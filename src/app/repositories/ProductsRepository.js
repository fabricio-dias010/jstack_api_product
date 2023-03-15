const { v4 } = require('uuid');

let products = [
  {
    id: v4(),
    name: 'Mana leak',
    price: '10,00',
    category_id: v4(),
    subcategory: 'card',
  },
  {
    id: v4(),
    name: 'Counterspell',
    price: '10,00',
    category_id: v4(),
    subcategory: 'card',
  },
];

class ProductsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(products);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      products.find((products) => products.id === id)
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      products = products.filter((product) => product.id !== id);
      resolve();
    });
  }

  create({ name, price, category_id, subcategory, }) {
    return new Promise((resolve) => {
      const newProduct = {
        id: v4(),
        name,
        price,
        category_id,
        subcategory,
      };
      products.push(newProduct);
      resolve(newProduct);
    });
  }

  update(id, { name, price, category_id, subcategory, }) {
    return new Promise((resolve) => {
      const updatedProduct = {
        id,
        name,
        price,
        category_id,
        subcategory,
      };
      products = products.map((product) => {
        return product.id === id ? updatedProduct : product
      });
      resolve(updatedProduct);
    });
  }
}

module.exports = new ProductsRepository();
