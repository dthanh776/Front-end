const productPhoto = document.querySelectorAll('.product-photo');
productPhoto.forEach(element => {
    element.addEventListener('click', () => {
        getProductDetail(element.dataset.productId);
    });
});

async function getProductDetail(productId) {
    const url = './api/product/' + productId;
    const response = await fetch(url);
    // Giao diện
}