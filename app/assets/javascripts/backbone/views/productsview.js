psview = Backbone.View.extend({
			el:'#products',

			initialize: function() {
										console.log(this.$el);
										this.render()
										},

			render:function(){
								pc = this.options.collection
								for(k=0;k<pc.length;k++)
								{
									self = this;
									i=1;
									j=0;
									d1=document.createDocumentFragment();
									d2=document.createDocumentFragment();
									    model=pc[k];
										model.each(function(m)
										{
											view=new pview({model:m, counter:i++});
											d2.appendChild(view.el);
											j++;
											if(j==3)
											{
												j=0;
												d3=document.createDocumentFragment();
												d3=document.createElement('div');
												d3.className='row';
												d3.appendChild(d2);

												d2=document.createDocumentFragment();
												d1.appendChild(d3);
											}
											
										})
												d3=document.createDocumentFragment();
												d3=document.createElement('div');
												d3.className='row';
												d3.appendChild(d2);
												d1.appendChild(d3);
											
										self.$el.append(d1);

								}
							}
						});