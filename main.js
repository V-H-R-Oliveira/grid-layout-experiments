const randomFloatNumberBetween = (minRange, maxRange) => {
    return Math.random() * (maxRange - minRange) + minRange;
}

const generateProductCard = (productRowIndex) => {
    const randomPrice = randomFloatNumberBetween(1, 100).toFixed(2);

    return `
        <div class="product-card">
            <img src="https://picsum.photos/200.webp" class="product-image" alt="product image">
            <div class="product-info">
                <h3 class="product-title">Product #${productRowIndex}</h3>
                <p>Brand: <span>Product brand</span></p>
                <p>Partner: <span>Partner #${productRowIndex}</span></p>
                <p>Price: <span>$${randomPrice}</span></p>
                <p>Breakdown: <span>$${randomPrice} / each</span></p>
                <p>Health Check: <span><i class="fa-solid fa-thumbs-up thumb-up-color"></i></span></p>
                <p>Price Check: <span><i class="fa-solid fa-thumbs-up thumb-up-color"></i></span></p>
            </div>
        </div>
    `;
}

const generateProductHorizontalList = (productsListRows = 1, productsPerRow = 20) => {
    const contentGrid = document.getElementById("horizontal-product-list");

    for (let horizontalListIndex = 0; horizontalListIndex < productsListRows; ++horizontalListIndex) {
        const horizontalProductsList = document.createElement("div");
        horizontalProductsList.classList.add("horizontal-products-list");

        for (let productRowIndex = 1; productRowIndex <= productsPerRow; ++productRowIndex) {
            const productCard = generateProductCard(productRowIndex);
            horizontalProductsList.innerHTML += productCard;
        }

        contentGrid.appendChild(horizontalProductsList);
    }
}

generateProductHorizontalList(20, 50);