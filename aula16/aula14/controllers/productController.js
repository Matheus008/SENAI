class ProductController {
    constructor(productService) {
      this.productService = productService;
    }
  
    getAllProducts(req, res) {
      const products = this.productService.getAllProducts();
      res.json(products);
    }
  
    getProductById(req, res) {
      const product = this.productService.getProductById(parseInt(req.params.id));
      if (product) {
        res.json(product);
      } else {
        res.status(404).send('Product not found');
      }
    }
  
    createProduct(req, res) {
      const product = this.productService.createProduct(req.body);
      res.status(201).json(product);
    }
  
    updateProduct(req, res) {
      const product = this.productService.updateProduct(parseInt(req.params.id), req.body);
      if (product) {
        res.json(product);
      } else {
        res.status(404).send('Product not found');
      }
    }
  
    deleteProduct(req, res) {
      const success = this.productService.deleteProduct(parseInt(req.params.id));
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).send('Product not found');
      }
    }
  }
  
  module.exports = ProductController;