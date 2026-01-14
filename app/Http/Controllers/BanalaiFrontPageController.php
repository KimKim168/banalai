<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Faq;
use App\Models\KeyValue;
use App\Models\LibraryData;
use App\Models\Location;
use App\Models\Page;
use App\Models\Post;
use App\Models\PostCategory;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;

class BanalaiFrontPageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $hero = Page::where('code', 'home')->with('images')->first();
        $productData = Page::where('code', 'products')->with('children')->first();
        // return ($hero);
        return Inertia::render('Banalai/Index', [
            'hero' => $hero,
            'productData' => $productData,
        ]);
    }

    public function about()
    {
        $aboutHeader = Page::where('code', 'about')->first();
        $ourMission = Page::where('code', 'our-mission')->with('children.images')->first();
        $ourStory = Page::where('code', 'our-story')->first();
        $ourCoreValueData = Page::where('code', 'our-core-values')->with('children.images')->first();
        // return $ourMission;
        return Inertia::render('Banalai/About', [
            'aboutHeader' => $aboutHeader,
            'ourMission' => $ourMission,
            'ourStory' => $ourStory,
            'ourCoreValueData' => $ourCoreValueData,
        ]);
    }
    public function support()
    {
        $supportData = Page::where('code', 'support')->with('children.images')->first();
        // return $supportData;
        return Inertia::render('Banalai/Supoort', [
            'supportData' => $supportData,
        ]);
    }

    public function products(Request $request)
    {
        $productData = Page::where('code', 'products')->with('children')->orderBy('order_index')->first();
        // return ($productData);
        return Inertia::render('Banalai/Products',[
            'productData' => $productData,
        ]);
    }
    public function pricing(Request $request)
    {
        $pricingtData = Page::where('code', 'pricing')->with('children')->orderBy('order_index')->first();
        $featurePricingPlans = Page::where('code', 'feature-pricing-plans')->with('images')->orderBy('order_index')->first();
        // return ($featurePricingPlans);
        return Inertia::render('Banalai/Pricing',[
            'pricingtData' => $pricingtData,
            'featurePricingPlans' => $featurePricingPlans,

        ]);
    }

    public function posts(Request $request)
    {
        $perPage = $request->input('perPage', 12);
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $category_code = $request->input('category_code');
        $sort_by = $request->input('sort_by');
        $sortDirection = $request->input('sortDirection', 'desc');

        $query = Post::query();

        // Exclude 'about' by selecting all other columns
        $columns = Schema::getColumnListing('posts'); // get all columns dynamically
        $columns = array_diff($columns, ['long_description']); // remove 'about' column
        $query->select($columns);

        if ($value = $request->input('status')) {
            $query->where('status', $value);
        }
        // End Exclude

        if ($category_code) {
            $query->where('category_code', $category_code);
        }
        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                $sub_query->where('title', 'LIKE', "%{$search}%")
                    ->orWhere('title_kh', 'LIKE', "%{$search}%")
                    ->orWhere('short_description', 'LIKE', "%{$search}%")
                    ->orWhere('short_description_kh', 'LIKE', "%{$search}%")
                    ->orWhere('long_description', 'LIKE', "%{$search}%")
                    ->orWhere('long_description_kh', 'LIKE', "%{$search}%")
                    ->orWhere('category_code', 'LIKE', "%{$search}%");
            });
        }

        if ($sort_by) {
            switch ($sort_by) {
                case 'newest':
                    $query->orderBy('created_at', 'desc')->orderBy('id', 'desc');
                    break;

                case 'oldest':
                    $query->orderBy('created_at', 'asc')->orderBy('id', 'asc');
                    break;

                case 'az':
                    $query->orderBy('title', 'asc');
                    break;

                case 'za':
                    $query->orderBy('title', 'desc');
                    break;

                case 'most_viewed':
                    $query->orderBy('total_view_count', 'desc');
                    break;

                case 'least_viewed':
                    $query->orderBy('total_view_count', 'asc');
                    break;

                default:
                    // fallback if unknown value, optional
                    $query->orderBy('id', 'desc');
                    break;
            }
        } else {
            // default order if no sort_by param
            $query->orderBy('id', 'desc');
        }

        $query->with('category');

        $tableData = $query->paginate($perPage)->onEachSide(2);

        // $tableData =  $query->limit(2)->get();
        // return $tableData;

        return Inertia::render('Buddhist/Posts/Index', [
            'tableData' => $tableData,
        ]);
    }

    public function post_show(Request $request, string $id)
    {
        $showData = Post::findOrFail($id)->load('category');
        $showData->increment('total_view_count');

        $query = Post::query();
        $columns = Schema::getColumnListing('posts');
        $columns = array_diff($columns, ['long_description']);

        // First related items
        $relatedItems = (clone $query)
            ->select($columns)
            ->where('category_code', $showData->category_code)
            ->inRandomOrder()
            ->limit(5)
            ->get();

        // Second related items, excluding the first set
        $relatedItemsTwo = (clone $query)
            ->select($columns)
            ->where('category_code', $showData->category_code)
            ->whereNotIn('id', $relatedItems->pluck('id')) // exclude first items
            ->inRandomOrder()
            ->limit(5)
            ->get();

        // Increase view count
        // return $relatedItems;
        return Inertia::render('Buddhist/Posts/Show', ['showData' => $showData, 'relatedItems' => $relatedItems, 'relatedItemsTwo' => $relatedItemsTwo]);
    }
}
