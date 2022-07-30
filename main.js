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

const generatePriorityList = (priority) => {
    const priorityLowerCase = priority.toLowerCase();

    return `
        <div class="priority-container">
            <span class="priority-list-label">${priority}</span>

            <ol class="priority-list">
                <li class="priority-list-item">
                    <label for="${priorityLowerCase}-mexican">Mexican</label>
                    <input type="checkbox" id="${priorityLowerCase}-mexican">
                </li>
                <li class="priority-list-item">
                    <label for="chinese-${priorityLowerCase}">Chinese</label>
                    <input type="checkbox" id="chinese-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="japanese-${priorityLowerCase}">Japanese</label>
                    <input type="checkbox" id="japanese-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="korean-${priorityLowerCase}">Korean</label>
                    <input type="checkbox" id="korean-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="vietnamese-${priorityLowerCase}">Vietnamese</label>
                    <input type="checkbox" id="vietnamese-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="filipino-${priorityLowerCase}">Filipino</label>
                    <input type="checkbox" id="filipino-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="indian-${priorityLowerCase}">Indian</label>
                    <input type="checkbox" id="indian-${priorityLowerCase}">
                </li>
                <li class="priority-list-item">
                    <label for="american-${priorityLowerCase}">American</label>
                    <input type="checkbox" id="american-${priorityLowerCase}">
                </li>
            </ol>
        </div>
    `;
}

const generateColorsList = () => {
    return `
        <div class="priority-container">
            <span class="priority-list-label">Colors</span>

            <ul class="priority-list">
                <li class="priority-list-item">
                    <p>Hero</p>
                    <div class="color-box color-box-hero-color"></div>
                </li>
                <li class="priority-list-item">
                    <p>High</p>
                    <div class="color-box color-box-high-color"></div>
                </li>
                <li class="priority-list-item">
                    <p>Medium</p>
                    <div class="color-box color-box-medium-color"></div>
                </li>
                <li class="priority-list-item">
                    <p>Low</p>
                    <div class="color-box color-box-low-color"></div>
                </li>
            </ul>
        </div>`;
}

const generatePrioritiesList = () => {
    const priorities = ["Hero", "High", "Medium", "Low"];
    const prioritiesContainerParent = document.getElementById("priorities");

    prioritiesContainerParent.innerHTML = "";

    for (const priority of priorities) {
        const priorityList = generatePriorityList(priority);
        prioritiesContainerParent.innerHTML += priorityList;
    }

    const colorsList = generateColorsList();
    prioritiesContainerParent.innerHTML += colorsList;
}

generatePrioritiesList();
generateProductHorizontalList(20, 50);