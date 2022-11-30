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
    // Bước 2: đọc dữ liệu trả về
    const result = await response.json();
    // Bước 3: hiển thị giao diện
    const divResult = document.querySelector(".modal-title");
    divResult.innerHTML = `${result.product_name}`;

    const divResult1 = document.querySelector(".modal-body");
    divResult1.innerHTML = `
          <img class="img-fluid" src="images/${result.product_photo}"}
          <div class="product-price">${result.product_price}</div>
          <div class="product-description">${result.product_description}</div>
      `;
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

const btnLike = document.querySelectorAll(".btn-like");
btnLike.forEach((element) => {
    element.addEventListener("click", function () {
        likeProduct(this.dataset.productId, this.dataset.url, this);
    });
});

//LIKE
async function likeProduct(id, url, curBtn) {
    if (!localStorage.getItem(id)) {
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
        localStorage.setItem(id, true);
    }
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
    displayLiked();
}

function renderCategories(categories) {
    let render = "";
    categories.forEach((element) => {
        render += `<span class="badge bg-warning text-dark">${element.category_name}</span>`;
    });
    return render;
}

// Search
async function showResult(productName) {
    //   // Hiện loader
    //   const loader = document.querySelector(".loader");
    //   loader.classList.remove("d-none");
    // Bước 1: url, data, fetch
    const url = "./app/api/search";
    const data = { productName: productName };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
        },
        body: JSON.stringify(data),
    });
    // Bước 2: đọc dữ liệu trả về
    const result = await response.json();

    // Ẩn loader
    //   loader.classList.add("d-none");
    // Bước 3: hiển thị giao diện
    const divResult1 = document.querySelector("#livesearch");

    divResult1.innerHTML = "";

    divResult1.innerHTML = `
          <img class="img-fluid" src="images/${result.product_photo}"}
          <div class="product-price">${result.product_price}</div>
          <div class="product-description">${result.product_description}</div>
      `;
}
