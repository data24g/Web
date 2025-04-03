// cart.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Thêm sản phẩm vào giỏ hàng
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', function () {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productImage = productCard.querySelector('img').getAttribute('src');

        // Fix đường dẫn hình ảnh nếu cần
        let fixedImagePath = productImage;
        if (productImage.includes('../img/')) {
            fixedImagePath = productImage.replace('../img/', 'img/');
        }

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: fixedImagePath,
                quantity: 1
            });
        }

        // Lưu vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Cập nhật số lượng trên icon giỏ hàng
        updateCartCount();

        // Hiển thị thông báo
        alert('Product added to cart!');
    });
});

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Cập nhật số lượng khi trang được tải
updateCartCount();