<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;
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
        $productData = Page::where('code', 'products')->with('children')->orderBy('order_index')->get();
        // return ($hero);
        return Inertia::render('Banalai/Index', [
            'hero' => $hero,
            'productData' => $productData,
        ]);
    }

    public function about()
    {
        $aboutHeader = Page::where('code', 'about')->first();
        $ourMission = Page::where('code', 'our-mission')->with('children.images')->orderBy('order_index')->get();
        $ourStory = Page::where('code', 'our-story')->first();
        $ourCoreValueData = Page::where('code', 'our-core-values')->with('children.images')->orderBy('order_index')->get();
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
        $supportData = Page::where('code', 'support')->with('children.images')->orderBy('order_index')->get();
        // return $supportData;
        return Inertia::render('Banalai/Supoort', [
            'supportData' => $supportData,
        ]);
    }
    public function support_show(string $id)
    {
        $showData = Page::find($id);
        // return $showData;
        return Inertia::render('Banalai/Show', [
            'showData' => $showData,
        ]);
    }

    public function products(Request $request)
    {
        $productData = Page::where('code', 'products')->with('children')->orderBy('order_index')->first();
        // return ($productData);
        return Inertia::render('Banalai/Products', [
            'productData' => $productData,
        ]);
    }
    public function product_show(string $id)
    {
        $showData = Page::find($id);
        // return ($showData);
        return Inertia::render('Banalai/Show', [
            'showData' => $showData,
        ]);
    }
    public function pricing(Request $request)
    {
        $pricingtData = Page::where('code', 'pricing')->with('children')->orderBy('order_index')->first();
        $featurePricingPlans = Page::where('code', 'feature-pricing-plans')->with('images')->orderBy('order_index')->first();
        // return ($featurePricingPlans);
        return Inertia::render('Banalai/Pricing', [
            'pricingtData' => $pricingtData,
            'featurePricingPlans' => $featurePricingPlans,

        ]);
    }
}
