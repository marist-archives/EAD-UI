	jQuery.fn.show = function() {
		return this.each(function(){
					var $tdata=$(this);
					$tdata.find('tr.tbldata').hide();
								
					$('tr.Box').toggle(
					function(){
						$(this).parent().find('tr.tbldata').show();
					},
					function(){
						$(this).parent().find('tr.tbldata').hide();
					}
					);					
					
					$('a.expand').click(function(){
						$tdata.find('tr.tbldata').show();
					});
					
					$('a.collapse').click(function(){
						$tdata.find('tr.tbldata').hide();
					});
					
					$('tr.Box').hover(function(){
						$(this).css({'cursor' : 'pointer'});

					});
					});
					
					};	
					
					
					/*
					  var $tdata=$('table.tbl');
					$tdata.find('tr.tbldata').hide();
								
					$('tr.Box').toggle(
					function(){
						$(this).parent().find('tr.tbldata').show();
					},
					function(){
						$(this).parent().find('tr.tbldata').hide();
					}
					);					
					
					$('a.expand').click(function(){
						$tdata.find('tr.tbldata').show();
					});
					
					$('a.collapse').click(function(){
						$tdata.find('tr.tbldata').hide();
					});
					
					$('tr.Box').hover(function(){
						$(this).css({'cursor' : 'pointer' });
					});
				
					 */