async function getProductDetail(productId) {
    // Hiện loader
    const loader = document.querySelector('.loader');
    loader.classList.remove('d-none');

    // Bước 1: url, data, fetch
    const url = "./app/api/getproductdetail.php";
    const data = { productId: productId };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json; charset=utf-8"
        },
        body: JSON.stringify(data)
    });

    // Bước 2: đọc dữ liệu trả về
    const result = await response.json();

    // Ẩn loader
    loader.classList.add('d-none');

    // Bước 3: hiển thị giao diện
    const divResult = document.querySelector('#result');
    divResult.innerHTML = `
        <h2>${result.product_name}</h2>
        <div class="product-price">${result.product_price}</div>
        <div class="product-description">${result.product_description}</div>
    `;
}