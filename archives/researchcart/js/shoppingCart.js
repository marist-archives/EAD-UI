// ADD KEY-VALUE PAIR TO LOCAL STORAGE 
// ADD VISUAL ELEMENT IN SHOPPING CART
function AddToCart(key, value){
	// ADD KEY
	insert_value(key, value);
}

//REMOVE KEY-VALUE PAIR FROM LOCAL STORAGE
//REMOVE VISUAL ELEMENT FROM SHOPPING CART
function RemoveFromCart(key){
	//REMOVE KEY
	delete_value(key);

}

function Effects() {
	//alert($.jStorage.index());
	if($.jStorage.index() != 0) {
		if (browserHack == 'IE'){
			//alert('IE code ran');
			$('div#cart').css('visibility','visible');
		}else{
			$('div#cart').css('visibility','visible');
			//$('div#cart').show();			
		}
		$('div#cart').fadeIn('fast');
	}else {
		$('div#cart').fadeOut('fast');
		//$('div#cart').css('visibility','hidden');
	}
}

// FUNCTION TO ADD/REMOVE ELEMENT FROM NOTEPAD ON FUNCTION PARAMETER "action"
// action= 1 WOULD ADD ELEMENT
// action= 2 WOULD REMOVE ELEMENT
function ElementNotepad(action, key, value){
	if((document.getElementById('cart') != null) && action == 1) {
		//var prefixText = '1';
		// CREATE CARTITEM TABLE ELEMENT IF IT DOES NOT EXIST
		if (document.getElementById('cartItemsPad') == null) {
			$('div#cartTablePad').append('<table id="cartItemsPad"><tr id="cartHeadingPad"><th>Collection</th><th>Box #</th><th>Item Number</th><th>Description</th></tr></table>');
		}
		//$('table#cartItems').append('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>');
		//$('table#cartItems').add('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		//$('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td class="itemDescription">' + get_value(key) + '</td></tr>').insertAfter('tr#cartHeadingPad');
		$('<tr id="' + key.replace(/\./g,'_') + '"><td>' + BoxOrItem('collectionName',value) + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td class="itemDescription">' + get_value(key) + '</td></tr>').insertAfter('tr#cartHeadingPad');
	}
	else if((document.getElementById('cart') != null) && action == 2) {
		var rowId = key.replace(/\./g,'_');

		if (document.getElementById(rowId) != null) {
			$('tr#'+rowId).remove();
			} else {

		}

	}
}

//FUNCTION TO ADD/REMOVE ELEMENT BASED ON FUNCTION PARAMETER "action"
//action= 1 WOULD ADD ELEMENT
//action= 2 WOULD REMOVE ELEMENT
function Element(action, key, value){
	if((document.getElementById('cart') != null) && action == 1) {
		//var prefixText = '1';
		// CREATE CARTITEM TABLE ELEMENT IF IT DOES NOT EXIST
		if (document.getElementById('cartItems') == null) {
			$('div#cart').append('<table id="cartItems"><tr id="cartHeading"><th>Collection</th><th>Box #</th><th>Item Number</th><th>Remove</th></tr></table>');
		}
		//$('table#cartItems').append('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>');
		//$('table#cartItems').add('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		//$('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		$('<tr id="' + key.replace(/\./g,'_') + '"><td class="collectionName">' + BoxOrItem('collectionName',key) + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',Key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
	}
	else if((document.getElementById('cart') != null) && action == 2) {
		var rowId = key.replace(/\./g,'_');

		if (document.getElementById(rowId) != null) {
			$('tr#'+rowId).remove();
			} else {

		}

	}
}




// FUNCTION TO REMOVE ITEM FROM THE SHOPPING CART ITSELF.
function RemoveCartItem(item){
	var box = $(item).closest('tr').find('td.boxNumber').text();
	var itemNumber = $(item).closest('tr').find('td.itemNumber').text();
	var collectionName = $(item).closest('tr').find('td.collectionName').text();
	var prefixCode = prefixTextCode (collectionName, 'prefixCode');
	var tempKey = prefixCode + '.' + box + '.' + itemNumber;
	RemoveFromCart(tempKey);
	
	
	
	if ($('title').html() != 'Research Shopping Cart : Checkout') {
		Effects();
		
		// ADD CODE TO UNCHECK THE CHECKE BOXES
		var bolDone = false;
		$('td.caption').each(function() {
			//if ($(this).text().trim() == 'Box ' + box) {
			if (trimForStupidIE($(this).text()) == 'Box ' + box) 
			{
				$(this).closest('tbody').find('td#fileNumber').each(function() {
					//if ($(this).text().trim() == itemNumber) {
					if (trimForStupidIE($(this).text()) == itemNumber) {
						bolDone = true;
						$(this).closest('tr').find('input.innerCheckBox').attr('checked', false);
						return false;
					}
				});
				if (bolDone) {
					return false;
					
				}
			}
			
		});
		//UNCHECK ITEMS FROM LIST
		
	}

	// TABLE ROW REMOVED FROM SHOPPING CART
	$(item).closest('tr').remove();
}

function RebuildShoppingCart() {		
	$('div#cart').css('visibility','visible');
	$('div#cart').fadeIn('slow');
	$.each($.jStorage.index(), function(index, value){
		//alert(value + ' ' + get_value(value));
			Element(1, value, get_value(value));
	});
}

// MARK CHECKBOX IN CURRENT PAGE OF ITEM WHICH ARE ALREADY IN SHOPPING CART
function MarkCheckBox() {
	$.each($.jStorage.index(), function(index, value){
		box = BoxOrItem('boxNumber',value);
		itemNumber = BoxOrItem('itemNumber',value);
		if ($('title').html() != 'Research Shopping Cart : Checkout') {
			// CODE TO MARK THE CHECKBOXES
			$('td.caption').each(function() {
				//if ($(this).text().trim() == 'Box ' + box) {
				if (trimForStupidIE($(this).text()) == 'Box ' + box) {
					$(this).closest('tbody').find('td#fileNumber').each(function() {
						//if ($(this).text().trim() == itemNumber) {
						if (trimForStupidIE($(this).text()) == itemNumber) {
							$(this).closest('tr').find('input.innerCheckBox').attr('checked', true);
						}
					});
				}
				
			});
		}
	});
}
