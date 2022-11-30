<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showProductDetail($id)
    {
        $product = Product::find($id);
        return view('components.showProduct')->with('product', $product);
    }

    // Show modal
    public function show(Request $request)
    {
        $id = $request->productId;
        $product = Product::find($id);
        return $product;
    }

    public function like(Request $request)
    {
        $product = Product::find($request->productId);
        $product->increment('likes');
        return $product->likes;
    }
    public function loadMore()
    {
        $products = Product::with('categories')->paginate(3);
        return $products;
    }
    public function search($product_Name)
    {
        return Product::where('product_name', 'like', '%' . $product_Name . '%')->get();
    }
}
