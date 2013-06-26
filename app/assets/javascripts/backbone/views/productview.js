pview = Backbone.View.extend({

	className: 'product col span_4',

	events:
	{
		"click #reduce": "quantity_reduce"
	},

	template:JST['backbone/templates/viewtemplate'],

	render:function(){
		var attributes = this.model.toJSON()
		attributes.count = this.options.counter
		var str =this.template(attributes)
		this.$el.html(str);
	},

    quantity_reduce: function()
     {
     	
     	if(this.model.attributes.quantity>0)
     	{
     		
     		this.model.attributes.quantity-=1;
     		this.render();
     		
     	}
     	else
     	{
     		alert("not in stock");
     		 this.parent.collection.remove(this.model);
   			 this.model.destroy();	
     		this.render();
     	}
     	
     },
	
	initialize:function(){
		this.render()
	}
})
