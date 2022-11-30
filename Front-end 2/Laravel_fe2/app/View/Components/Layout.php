<?php

namespace App\View\Components;

use Illuminate\View\Component;
use App\Models\Category;
use App\Models\Product;

class Layout extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        $categories = Category::all();
        return view('components.layout')->with('categories', $categories);

        $products = Product::all();
        return view('components.all-product')->with('products', $products);
    }
}