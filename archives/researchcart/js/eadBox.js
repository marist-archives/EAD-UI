$(document).ready(function(){
	
		var showOnce = false;
		var $tdata=$('table.tbl');
		$tdata.find('tr.tbldata').hide();
		 var subSeries = $('h2.heading').html();
		
		// CODE TO RENDER COLLAPSED BOXES START			
		$('tr.Box').each(function(){
			$(this).find('td.caption').append('<span class="iconExpand"></span>');
		});
		
		/*$('body').append('<div class="backDrop"></div>');
		
		$('input.selectAll').each(function(){
			$(this).parent().append('<span class="pointerAllItem">Check this to select all items in the box.</span>');
			$(this).parent().append('<span class="pointerOneItem">Check these to select individual items from the box.</span>');
			
		});*/
		
		$('tr.Box').toggle(
			function(){
				if(subSeries != 'Microfiche')
				{
					if (!showOnce)
					{
						$(this).closest('table.tbl').css('z-index','13');
						$(this).closest('table.tbl').css('position', 'relative');
						$('div.backDrop').show();
					}
					$(this).parent().find('tr.tbldata').show();
					$(this).find('span.iconExpand').addClass('iconContract');
					$(this).find('span.iconExpand').removeClass('iconExpand');
					if (!showOnce)
					{
						$('span.pointerAllItem, span.pointerOneItem').delay(6000).hide(800).queue(function(){
							$('tr.Box').each(function(){
								$('span.pointerAllItem').remove();
								$('span.pointerOneItem').remove();
								$('div.backDrop').hide();
								$(this).closest('table.tbl').css('z-index','11');
							});
							showOnce = true;
						});
					}
				}
		},		
			function(){
				if(subSeries != 'Microfiche')
				{
					$(this).parent().find('tr.tbldata').hide();
					$(this).find('span.iconContract').addClass('iconExpand');
					$(this).find('span.iconContract').removeClass('iconContract');
				}
		});
		
		$('span.pointerAllItem').bind('DOMActivate', function() {
		});
		
		
		$('a.expand').click(function(){
			$tdata.find('tr.tbldata').show();
		});
		
		$('a.collapse').click(function(){
			$tdata.find('tr.tbldata').hide();
		});
		
		$('tr.Box').hover(function(){
			$(this).css({'cursor' : 'pointer' });
		});
	
			
		// CODE TO RENDER COLLAPSED BOXES END
		
		

	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();

		$('#tblElems').css('z-index', '1').css('position', 'relative');
		//Get clicked link href
		var image_href = $(this).attr("href");
		var image_id = $(this).attr("id");

		//var image_href = image_href + " " + image_id;

		$('#lightbox').css('visibility', 'visible').load(image_href);
	//$('#closebutton').html('<img src="/archives/researchcart/images/close.png">');
		
		$('#bodyContent').css('opacity', '0.1');
		$('body').css('background', 'grey');
		
	});


	});
