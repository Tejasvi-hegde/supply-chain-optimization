document
  .getElementById("productForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const productId = event.target.id.value;
    const response = await fetch(`/product/${productId}`);
    const resultDiv = document.getElementById("result");

    if (response.ok) {
      const data = await response.json();
      resultDiv.textContent = `Product Data: ${JSON.stringify(data)}`;
    } else {
      resultDiv.textContent = "Product not found or error occurred.";
    }
  });
