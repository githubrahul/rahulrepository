$.ajax(url: "http://10.1.2.29:3000/products.json").done (html) ->
  $("#products").append html