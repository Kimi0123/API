let products = [
  { id: 101, name: "Laptop", price: 50000 },
  { id: 102, name: "Mobile", price: 20000 },
  { id: 103, name: "Tablet", price: 30000 },
  { id: 104, name: "Monitor", price: 15000 },
];

// 1. CREATE PRODUCT
const createProduct = (newProduct) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exists = products.find((p) => p.id === newProduct.id);
      if (exists) {
        return reject(new Error("Product with this ID already exists"));
      }

      // handle missing fields
      if (!newProduct.name) {
        newProduct.name = "Unknown Product";
      }
      if (!newProduct.price) {
        newProduct.price = 0;
      }

      products.push(newProduct);
      resolve(newProduct);
    }, 1000);
  });
};

// 2. GET ALL PRODUCTS
const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

// 3. GET PRODUCT BY ID
const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);

      if (product) {
        resolve(product);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });
};

// 4. SEARCH PRODUCT BY NAME
const searchProduct = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = products.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase()),
      );
      resolve(result);
    }, 500);
  });
};

// 5. UPDATE PRODUCT
const updateProduct = (id, updates) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id);

      if (!product) {
        return reject(new Error("Product not found"));
      }

      // update fields
      Object.assign(product, updates);

      resolve(product);
    }, 1000);
  });
};

// 6. DELETE PRODUCT
const deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = products.findIndex((p) => p.id === id);

      if (index === -1) {
        return reject(new Error("Product not found"));
      }

      products.splice(index, 1);
      resolve("Product deleted successfully");
    }, 1000);
  });
};

// MAIN FUNCTION
const main = async () => {
  try {
    console.log("All products:");
    console.log(await getProducts());

    console.log("\nCreate product:");
    await createProduct({ id: 105, name: "", price: null });

    console.log("\nGet product by ID:");
    console.log(await getProductById(105));

    console.log("\nSearch product:");
    console.log(await searchProduct("mobile"));

    console.log("\nUpdate product:");
    console.log(await updateProduct(105, { price: 25000 }));

    console.log("\nDelete product:");
    console.log(await deleteProduct(105));

    console.log("\nFinal product list:");
    console.log(await getProducts());
  } catch (error) {
    console.error(error.message);
  }
};

main();
