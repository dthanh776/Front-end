<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/product/show', [ProductController::class, 'show']);
// Route::get('/product/{id}', [ProductController::class, 'show']);
Route::resource('comments', CommentController::class);
Route::post('/product/like', [ProductController::class, 'like'])->name('product.like');

Route::get('/product/loadmore', [ProductController::class, 'loadMore'])->name('product.loadmore');

Route::post('/product/search', [ProductController::class, 'search']);
