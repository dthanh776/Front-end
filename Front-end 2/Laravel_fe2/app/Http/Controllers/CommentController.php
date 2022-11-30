<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Comment;

class CommentController extends Controller
{

    public function store(Request $request)
    {
        $comment = new Comment;
        $comment->comment_content = $request->comment_content;
        $comment->rating = $request->rating;

        $product = Product::find($request->product_id);
        $product->comments()->save($comment);
        return $product->comments;
    }
}
