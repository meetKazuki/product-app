const Product = require('../models/product');

exports.test = function(request, response) {
  response.send('Greetings!');
}

exports.createProduct = function(request, response) {
  const product = new Product({
    name: request.body.name,
    price: request.body.price,
  });

  product.save(function(error) {
    if (error) return next(error);
    response.send('Product created')
  })
}

exports.getProduct = function(request, response) {
  Product.findById(request.params.id, function(error, product) {
    if (error) return next(error);
    response.send(product);
  });
}

exports.updateProduct = function(request, response) {
  Product.findByIdAndUpdate(request.params.id, {$set: request.body}, function(err, doc) {
    if (err) return next(err);
    response.send('product updated');
  })
}
