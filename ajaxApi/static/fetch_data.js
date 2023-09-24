document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById("product_fetch_button");
    const productsContainer = document.querySelector(".product_cards_container");
    const api = 'https://fakestoreapi.com/products';
    
    fetchButton.addEventListener('click', async () => {
        try {
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error("Error fetching data!");
            }
            const products = await response.json();
            console.log(products);

            productsContainer.innerHTML = "";

            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add('product_card'); // Fix the class name here
                productElement.innerHTML = `
                    <h2>${product.title}</h2>
                    <img src=${product.image} />
                    <h4>${product.rating.rate} out of ${product.rating.count}</h4>
                    <h3>Price: ${product.price}</h3>
                    <p>${product.description}</p>
                `;
                productsContainer.appendChild(productElement);
            });
        } catch (error) {
            console.log(error);
        }
    });
});
