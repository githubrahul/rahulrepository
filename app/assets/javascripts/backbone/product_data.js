$(document).ready(function() {
	var totalcollection=[];
	var create_view=function(){
		var pd = new psview({
			collection:totalcollection
		});
		//console.log(pc);
	}
	
	j=0;
	var on_success = function(collection){
							console.log(arguments)
							totalcollection[j]=collection;j++;
							if(j==4)
							{
								create_view();
							}
					}
	
	var mycollection = new Fun.Collections.ProductsCollection();
	mycollection.url="products.json";
	mycollection.fetch(
		{
		success: on_success
		});

	var kailashcollection = new Fun.Collections.ProductsCollection();
	kailashcollection.url="http://10.1.2.29:3000/products.json";
	kailashcollection.fetch(
		{
		success: on_success
		}) ;

	var kishorecollection = new Fun.Collections.ProductsCollection();
	kishorecollection.url="http://10.1.2.27:3000/products.json";
	kishorecollection.fetch(
		{
		success: on_success
		}) ;
	
	var rahulcollection = new Fun.Collections.ProductsCollection();
	rahulcollection.url="http://10.1.2.64:3000/products.json";
	rahulcollection.fetch(
		{
		success: on_success
		}) ;
		
});	