const Product = require('../models/product');

class ProductRepository {
  constructor() {
    this.products = [{id:1, name:"Produto 01", price:10.99}];
    this.currentId = 1;
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find(product => product.id === id);
  }

  create(product) {
    product.id = ++this.currentId;
    this.products.push(product);
    return product;
  }

  update(id, productData) {
    const product = this.getById(id);
    if (product) {
      product.name = productData.name;
      product.price = productData.price;
    }
    return product;
  }

  delete(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}

module.exports = ProductRepository;