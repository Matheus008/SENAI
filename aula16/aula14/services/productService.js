const Product = require('../models/product');

class ProductService {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    getAllProducts() {
      return this.productRepository.getAll();
    }
  
    getProductById(id) {
      return this.productRepository.getById(id);
    }
  
    createProduct(productData) {
      const product = new Product(null, productData.name, productData.price);
      return this.productRepository.create(product);
    }
  
    updateProduct(id, productData) {
      return this.productRepository.update(id, productData);
    }
  
    deleteProduct(id) {
      return this.productRepository.delete(id);
    }
  }
  
  module.exports = ProductService;