const keystone = require('keystone');

exports = module.exports = function(req, res) {
  const view = new keystone.View(req, res);
  const locals = res.locals;
  
  // Set locals
  
  locals.section = "store";
  locals.filters = {
    product: req.params.product
  }
  
  locals.data = {
    products: []
  }

  view.on('init', function(next) {
    const q = keystone.list('Product').model.findOne({
      slug: locals.filters.product
    });
    locals.title = q.title
    console.log(q)
    q.exec(function(err, result){
      locals.data.product = result;
      locals.title = result.title;
      next(err);
    })
  })
  
  // Render view
  view.render('product')
} 