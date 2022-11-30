const productPhoto = document.querySelectorAll(".product-photo");
productPhoto.forEach((element) => {
    element.addEventListener("click", (e) => {
        getProductDetail(element.dataset.productId);
    });
});

async function getProductDetail(productId) {
    const url = "./api/product/show";
    const data = { productId: productId };
    const token = document
        .querySelector("meta[name=csrf-token]")
        .getAttribute("content");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRF-TOKEN": token,
        },
        body: JSON.stringify(data),
    });

    // Nhan kq & giao dien
}

const btnComment = document.querySelector("#btn-comment");
if (btnComment) {
    btnComment.addEventListener("click", function () {
        addComment(this.dataset.productId, this.dataset.url);
    });
}

async function addComment(productId, url) {
    const commentContent = document.querySelector("#comment_content");
    const rating = document.querySelector("#rating");
    const data = {
        comment_content: commentContent.value,
        product_id: productId,
        rating: rating.value,
    };
    const token = document
        .querySelector("meta[name=csrf-token]")
        .getAttribute("content");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRF-TOKEN": token,
        },
        body: JSON.stringify(data),
    });
    // Xu ly ket qua va hien thi giao dien
    const result = await response.json();
    const commentsList = document.querySelector("#comments-list");
    commentsList.innerHTML = "";
    result.forEach((element) => {
        commentsList.innerHTML += `
        <li class="list-group-item">
            ${element.rating} -
            ${element.comment_content}
        </li>
        `;
    });
    commentContent.value = "";
    rating.value = "";
}

// Like
const btnLike = document.querySelectorAll(".btn-like");
btnLike.forEach((element) => {
    element.addEventListener("click", function () {
        likeProduct(this.dataset.productId, this.dataset.url, this);
    });
});

async function likeProduct(id, url, curBtn) {
    const data = {
        productId: id,
    };
    const token = document
        .querySelector("meta[name=csrf-token]")
        .getAttribute("content");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "X-CSRF-TOKEN": token,
        },
        body: JSON.stringify(data),
    });

    const result = await response.text();
    const likeSpan = (curBtn.nextElementSibling.innerHTML = result);
}

const btnLoadmore = document.querySelector(".btn-loadmore");
let url = "api/product/loadmore?page=2";

if (btnLoadmore) {
    btnLoadmore.addEventListener("click", function () {
        loadMore();
    });
}

async function loadMore() {
    const response = await fetch(url);
    const result = await response.json();
    url = result.next_page_url;

    //Hien thi giao dien
    const productList = document.querySelector(".product-list");
    result.data.forEach((element) => {
        productList.innerHTML += `
        <div class="col">
            <div class="card">
            <img src="images/${
                element.product_photo
            }" class="card-img-top product-photo" alt="..." data-product-id="{{ $product->id }}">
            <div class="card-body">
                <a href="#">
                <h5 class="card-title">${element.product_name}</h5>
                </a>

                <button class="btn btn-primary btn-like" data-product-id="${
                    element.id
                }" data-url="{{ route('product.like') }}">Like</button>
                <span class="badge bg-secondary">${element.likes}</span>

                <p class="card-text">
                ${renderCategories(element.categories)}
                ${element.product_price}
                </p>
            </div>
            </div>
        </div>
        `;
    });
    if (url == null) {
        btnLoadmore.remove();
    }
}

function renderCategories(categories) {
    let render = "";
    categories.forEach((element) => {
        render += `<span class="badge bg-warning text-dark">${element.category_name}</span>`;
    });
    return render;
}
