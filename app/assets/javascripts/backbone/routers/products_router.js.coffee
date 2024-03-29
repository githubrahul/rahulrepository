class Fun.Routers.ProductsRouter extends Backbone.Router
  initialize: (options) ->
    @products = new Fun.Collections.ProductsCollection()
    @products.reset options.products

  routes:
    "new"      : "newProduct"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newProduct: ->
    @view = new Fun.Views.Products.NewView(collection: @products)
    $("#products").html(@view.render().el)

  index: ->
    @view = new Fun.Views.Products.IndexView(products: @products)
    $("#products").html(@view.render().el)

  show: (id) ->
    product = @products.get(id)

    @view = new Fun.Views.Products.ShowView(model: product)
    $("#products").html(@view.render().el)

  edit: (id) ->
    product = @products.get(id)

    @view = new Fun.Views.Products.EditView(model: product)
    $("#products").html(@view.render().el)
