<div class="row row-cols-1 row-cols-md-3 g-4 product-list">
    @foreach($products as $product)
    <div class="col">
        <div class="card">


            <a href="" data-bs-toggle="modal" data-bs-target="#result" onclick="getProductDetail(<?php echo  $product->id ?> )">
                <img src="{{ asset('images/' . $product->product_photo) }}" class="card-img-top product-photo" alt="..." data-product-id="{{ $product->id }}"></a>
            <div class="card-body">
                <a href="{{route('showProduct',$product->id)}}">
                    <h5 class="card-title">{{ $product->product_name }}</h5>
                </a>

                <!-- Nut like -->
                <button class="btn btn-primary btn-like" data-product-id="{{ $product->id }}" data-url="{{ route('product.like') }}">Like</button>
                <span class="badge bg-secondary">{{ $product->likes }}</span>
                <!-- Nut like -->

                <p class="card-text">
                    @foreach($product->categories as $category)
                    <span class="badge text-bg-info">{{ $category->category_name }}</span>
                    @endforeach
                    <br>
                    {{ $product->product_price }}
                </p>
            </div>
        </div>
    </div>
    @endforeach

    <!-- Modal -->
    <!-- Doi Id -->
    <div class="modal fade" id="result" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Button trigger modal -->
    <button class="btn btn-primary btn-loadmore" data-url="{{ route('product.loadmore') }}">Load more</button>
</div>