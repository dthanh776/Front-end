const productPhoto = document.querySelectorAll('.product-photo');
productPhoto.forEach(element => {
    element.addEventListener('click', (e) => {
        getProductDetail(element.dataset.productId);
    });
});

async function getProductDetail(productId) {
    const url = './api/product/show';
    const data = { productId: productId };
    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });

    // Nhan kq & giao dien
}

const btnComment = document.querySelector('#btn-comment');
if(btnComment) {
    btnComment.addEventListener('click', function () {
        addComment(this.dataset.productId, this.dataset.url);
    });
}

async function addComment(productId, url) {
    const commentContent = document.querySelector('#comment_content');
    const rating = document.querySelector('#rating');
    const data = {
        comment_content: commentContent.value,
        product_id: productId,
        rating: rating.value
    };
    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });

    // Xử lý kết quả trả về
    const result = await response.json();
    const divComments = document.querySelector('#comments');
    divComments.innerHTML = '';
    result.forEach(element => {
        divComments.innerHTML += `
        <li class="list-group-item">
            ${element.rating} - ${element.comment_content}
        </li>
        `;
    });
    commentContent.value = '';
    rating.value = '';
}

const btnLike = document.querySelectorAll('.btn-like');
if(btnLike) {
    btnLike.forEach(element => {
        element.addEventListener('click', function () {
            console.log('aa');
            likeProduct(this.dataset.productId, this.dataset.url)
        });
    });
}

async function likeProduct(productId, url) {
    const token = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    const data = {productId: productId};
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': token
        },
        body: JSON.stringify(data)
    });
    // Ket qua + giao dien
}