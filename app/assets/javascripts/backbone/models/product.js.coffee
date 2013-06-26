class Fun.Models.Product extends Backbone.Model
  paramRoot: 'product'

  defaults:
    name: null
    category: null
    price: null
    quantity: null

class Fun.Collections.ProductsCollection extends Backbone.Collection
  model: Fun.Models.Product
  url: '/products'
