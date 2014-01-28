// ARRAY TO STORE NAME AND UNIQUE NUMBER FOR ALL COLLECTIONS
	
	var collectionList = new Array();
	var boxList = new Array();
	var itemList = new Array();
	
	// VARIABLES USE TO HOLD COLLECTION DETAIL GLOBALLY
	var prefixCode = '';
	var prefixText = '';
	
	// CONTACT INFORMATION DETAILS USED IN ALTER MESSAGES
	// IN CASE THERE ARE BUGS THAT DEVELOPER COULD NOT FIND
	var archivesContactDetail = '845.575.2750';
	var browserHack = '';
		
	$(document).ready(function(){
		// VARIABLES FOR LOCALSTORAGE KEY AND VALUE
		var key = '';
		var value = '';
		
		// CODE TO CHECK BROWSER VERSION START
		//if (navigator.userAgent.substr());
		if (navigator.userAgent.search('Chrome') != -1) {
		}
		if (navigator.userAgent.search('Firefox') != -1) {
		}
		if (navigator.userAgent.search('Safari') != -1) {
		}
		if (navigator.userAgent.search('MSIE') != -1) {
			browserHack = 'IE';
		}
		if (navigator.userAgent.search('Opera') != -1) {
		}
		// CODE TO CHECK BROWSER VERSION END
		
		
		
		// CHECK PAGE FOR COLLECTION TITLE AND TO ASSIGN THE SAME IN GLOBAL VARIABLE
		var currentPage = CheckCurrentPage();
		prefixCode = prefixTextCode (currentPage, 'prefixCode');
		prefixText = prefixTextCode (currentPage, 'prefixText');
	
		
		if (prefixText == '' && prefixCode == ''){
			// INFORMATION MESSAGE
			errorMessage('Collection Not Found \n Please notify Marist Archives about this problem @ ' + archivesContactDetail);
			prefixText = 'Unkown Collection';
			prefixCode = '0';
		}
		// END CHECK COLLECTION TITLE
		
		// CODE TO DYNAMICALLY GENERATE BUTTON POINTING TO THE HOW TO BLOGS
		if ($('title').html() != 'Research Shopping Cart : Checkout') 
		{
			$('<div id="cart"><div id="cartHeader"><div id="cartCaption">Your Research Cart</div><a href="/archives/researchcart/checkout.php" class="checkoutButton"><span>Checkout</span></a><div id="errMsg"> <!-- Informational/Error Messages --><span id="errLine1"></span><br/></div> <!-- Informational/Error Messages --></div><table id="cartItems"><tr id="cartHeading"><th>Collection</th><th>Box #</th><th>Item #</th><th>Remove</th></tr></table></div>	 <!-- /Dynamic shopping cart generated here-->').appendTo('div#bodyWrapper').insertAfter('div#contentWrapper');
	        $('<a href="http://library.marist.edu/archives/mainpage/blog/researchcart.htm" id="howTo" class="howTo" target="_blank">Help</a>').appendTo('div#cartHeader').insertBefore('div#cartCaption');
			$('a.checkoutButton').remove();
		    $('<a href="/archives/researchcart/checkout.php" class="checkoutButton"><span>Reserve</span></a>').appendTo('div#cartHeader').insertAfter('div#cartCaption');
		}
		
		// CODE TO DYNAMICALLY GENERATE FEEBACK BUTTON
		$('<div id="feedbackHolder"><a href="javascript:void(0)" id="feedback" class="feedback">Contact Us</a></div>').appendTo('div#bodyWrapper').insertAfter('div#cart');									//<input type="button" id="close" name="close" value="Close" style="float: right;"/>
		$('<div id="feedbackForm" style="display: none;"><span>Click </span><a href="mailto:monish.singh1@marist.edu?subject=Reservation Request&cc=john.ansley@marist.edu" id="feedbackEmail">here</a><span> to send us your reservation requests and feedbacks, </span><br /><span>Or use this email monish.singh1@marist.edu</span><br /><a href="javascript:void(0)" id="close" style="float: right;"><span>Close</span></a></div>').appendTo('div#bodyWrapper').insertAfter('div#feedbackHolder');
		
		// CLICK EVEN FOR FEEDBACK AND CLOSE BUTTON
		$('a#feedback').click(function(){
			$('div#feedbackForm').show();
		});
		
		$('a#close').click(function(){
			$('div#feedbackForm').hide();
		})
		

		
		// CLICK EVENT FOR CHECKBOX
		$('input.innerCheckBox').click(function(){
			
			// BOX NUMBER
			var boxId = $(this).closest('tr').find('td#boxNumber').text();

			// SUB SERIES NAME
			var subSeries = $('h2.heading').html();
			
			// DECREMENT HEADING AND CAPTION VALUE FROM INDEX
			var artifactNumber = trimForStupidIE($(this).closest('tr').find('td#fileNumber').text());

			// DETAILS OF SELECTED ARTIFACT LIKE DATE AND YEAR
			var artifactDetails = trimForStupidIE($(this).closest('tr').find('td#artifactDetail').text()); //.replace('\n',''));
			
			key = prefixCode + '.' + boxId + '.' + artifactNumber;
			value = prefixText + ' : ' + subSeries + ' : ' + artifactDetails;
			
			
			// #1 CHECK IF CHECKBOX IS ALREADY CHECKED
			// IF CHECKED
			// REMOVE KEY-VALUE PAIR
			// UNCHECK CHECKBOX
			if($(this).attr('checked')) {
				// CHECK FOR DUPLICATES
				if(!KeyExists(key, $.jStorage.index())){
					AddToCart(key, value);
					Effects();
					// ADD TO SHOPPING CART VISUAL ELEMENT
					Element(1, key, value);
				}else{
					// ADD LOGIC TO LET USER KNOW THAT ITEM IS ALREADY IN CART
					errorMessage('Item ' + key + ' is already in Shopping Cart ');
				}
				
			}
			// IF NOT CHECKED 
			// SET KEY-VALUE PAIR
			// MARK THE CHECKBOX AS CHECKED
			else if (!$(this).attr('checked')){
				// CHECK IF PRESENT
				if(KeyExists(key, $.jStorage.index())){
					RemoveFromCart(key);
					Effects();
					// REMOVE FROM SHOPPING CART VISUAL ELEMENT
					Element(2, key, value);
				}
				// REMOVE FROM SHOPPING CART VISUAL ELEMENT
			}						
		
		});
		
		$('span#errLine1').click(function(){
			$('span#errLine1').fadeOut(1500);	
		});

		$('#test').click(function(){
			//alert('ran');
		});
		
		
		$('a.localStore').click(function(){
			var pair = '';
			var localStoreIndex = $.jStorage.index();
			$.each(localStoreIndex, function(index, value){
				pair = pair + 'Key = ' + value + 'Value = ' + get_value(value) + ' ';
			});
			for(var i=0; i<localStoreIndex.length;i++){
				//alert('Type of Index in jStorage is : ' + typeof(localStoreIndex[i]));
			}

		});

		// 	WORK ON THIS IF OTHER ITEMS ARE COMPLETED BEFORE GO LIVE			
		$('a.invokeFunctions').click(function(){
			var conNumber = confirmationNumber().toString();
			var conLength = conNumber.toString().length;
			while(conLength != 12){
				if((12 - conLength) > 0 ){
					conNumber = conNumber + confirmationNumber().toString();
					conLength = conNumber.length;
				}
				if ((12 - conLength) < 0){
					conNumber = conNumber.substr(0, 12);
					conLength = conNumber.length;
				}
			}
		});
		
		$('.selectAll').click(function(){
			if ($(this).closest('table').find('.items').attr('disabled') == true || $(this).attr('checked') == false)
			{
				$(this).closest('table').find('.items').removeAttr('disabled');
			}
			else
			{
				$(this).closest('table').find('.items').attr('disabled','disabled');
			}
		});


	});	
	
	

	
	
	
	
	jQuery(window).bind("load", function(){
		// POPULATE SHOPPING CART AGAIN ON PAGE REFRESH 
		// OR WHEN USER NAVIGATES TO ANOTHER FINDING AID
		if ($.jStorage.index() != 0){
			RebuildShoppingCart();
			MarkCheckBox();
		}
	});



/* 
 * CODE TO ACCESS JSTORAGE START: localStore.js
 */
function insert_value(key, value){
	if(!key){
		alert("There was a problem with selecting your item, Please contact the Marist Archives about the problem.");
		return;
	}
	$.jStorage.set(key, value);
}

function get_value(key){
	var value = $.jStorage.get(key);
	return value;
}

function delete_value(key){
	$.jStorage.deleteKey(key);
}

function flush_data(){
	$.jStorage.flush();
}
/*
 CODE TO ACCESS JSTORAGE END
 */





/*
 * FUNCTIONS TO REBUILD RESEARCH CART AND CHECKMARK CHECKBOXES START: shoppingCart.js
 */

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
	if($.jStorage.index() != 0) {
		if (browserHack == 'IE'){
			$('div#cart').css('visibility','visible');
		}else{
			$('div#cart').css('visibility','visible');
		}
		$('div#cart').fadeIn('fast');
	}else {
		$('div#cart').fadeOut('fast');
	}
}

// FUNCTION TO ADD/REMOVE ELEMENT FROM NOTEPAD ON FUNCTION PARAMETER "action"
// action= 1 WOULD ADD ELEMENT
// action= 2 WOULD REMOVE ELEMENT
function ElementNotepad(action, key, value){
	if((document.getElementById('cart') != null) && action == 1) {
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
		// CREATE CARTITEM TABLE ELEMENT IF IT DOES NOT EXIST
		if (document.getElementById('cartItems') == null) {
			$('div#cart').append('<table id="cartItems"><tr id="cartHeading"><th>Collection</th><th>Box #</th><th>Item Number</th><th>Remove</th></tr></table>');
		}
		//$('table#cartItems').append('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>');
		//$('table#cartItems').add('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		//$('<tr id="' + key.replace(/\./g,'_') + '"><td>' + prefixText + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		if ($('title').html() == 'Research Shopping Cart : Checkout') 
		{
			$('<tr id="' + key.replace(/\./g,'_') + '"><td class="collectionName">' + BoxOrItem('collectionName',value) + '</td><td class="collectionDetail" title="' + BoxOrItem('collectionDetail',value) + '">' +  (CollectionDetailLength(BoxOrItem('collectionDetail',value)) ) + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');
		}
		else 
		{
			$('<tr id="' + key.replace(/\./g,'_') + '"><td class="collectionName">' + BoxOrItem('collectionName',value) + '</td><td class="boxNumber">' + BoxOrItem('boxNumber',key) + '</td><td class="itemNumber">' + BoxOrItem('itemNumber',key) + '</td><td><a href="#" class="removeCartItem" onClick="RemoveCartItem(this); return false;">Remove</a></td></tr>').insertAfter('tr#cartHeading');	
		}	
		
	}
	else if((document.getElementById('cart') != null) && action == 2) {
		var rowId = key.replace(/\./g,'_');

		if (document.getElementById(rowId) != null) {
			$('tr#'+rowId).remove();
			} else {

		}

	}
}


function CollectionDetailLength(value)
{
	//alert(value.length);
	if (value.length < 55)
	{
		return value.substr(0,55);
	}
	else
	{
		return (value.substr(0,52) + '...');
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
		
		/* CHECK IF ITEM BEING REMOVED IS SELECT-ALL
		 * IF YES, THEN ENABLE ALL DISABLED CHECKBOXES OF THAT BOX
		 */
		var subSeries = $('h2.heading').html();
		if (itemNumber == 'All-Items' && subSeries == 'Microfiche')
		{
			$('td.caption').each(function() {
				if (trimForStupidIE($(this).text()) == 'Box ' + box)
				{
					
					
					$('tbody').each(function()
					{
						$(this).closest('tbody').find('input.selectAll').attr('checked', false);
						$(this).closest('tbody').find('input.innerCheckBox').removeAttr('disabled');
					});
					
					/*
					$('tbody').siblings()(function(){
						$(this).closest('tbody').find('input.selectAll').attr('checked', false);
					});
					
					$('tbody').siblings().each(function()
					{
						//alert($(this).closest('tbody').find('td#fileNumber').text());
						$(this).closest('tbody').find('input.innerCheckBox').removeAttr('disabled');
					});
					*/
					
					/*
					alert($(this).closest('tbody.year').closest('tbody').find('td#fileNumber').text());
					$(this).closest('tbody').next(function(){
						alert($(this).closest('tbody').find('td#fileNumber').text());
					});
					
					$(this).closest('tbody').find('td#fileNumber').next().each(function() {
						$(this).closest('tr').find('input.innerCheckBox').removeAttr('disabled');
					});
					*/
					//alert($(this).closest('tbody.year').closest('tbody').find('td#fileNumber').text());
					
				}
			});
		} 
		else if (itemNumber == 'All-Items')
		{
			$('td.caption').each(function() {
				if (trimForStupidIE($(this).text()) == 'Box ' + box)
				{
					$(this).closest('tbody').find('td#fileNumber').each(function() {
						$(this).closest('tr').find('input.innerCheckBox').removeAttr('disabled');
					});
				}
			});
		}
		
		// CODE TO UNCHECK THE CHECKE BOXES
		var bolDone = false;
		$('td.caption').each(function() {
			if (trimForStupidIE($(this).text()) == 'Box ' + box) 
			{
				$(this).closest('tbody').find('td#fileNumber').each(function() {
				//$(this).closest('table.collectionList').find('td#fileNumber').each(function() {
					if (trimForStupidIE($(this).text()) == itemNumber) {
						bolDone = true;
						$(this).closest('tr').find('input.innerCheckBox').attr('checked', false);
						//$('.selectAll').triggerHandler('click');
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
			Element(1, value, get_value(value));
	});
}

// MARK CHECKBOX IN CURRENT PAGE OF ITEM WHICH ARE ALREADY IN SHOPPING CART
function MarkCheckBox() {
	$.each($.jStorage.index(), function(index, value){
		box = BoxOrItem('boxNumber',value);
		itemNumber = BoxOrItem('itemNumber',value);
		if ($('title').html() != 'Research Shopping Cart : Checkout') {
		
		// MARK THE CHECKBOXES
		/* CHECK IF ITEM BEING REMOVED IS SELECT-ALL
		*  IF YES, THEN ENABLE ALL DISABLED CHECKBOXES OF THAT BOX
		*/
			if (itemNumber == 'All-Items')
			{
				$('td.caption').each(function() {
					if (trimForStupidIE($(this).text()) == 'Box ' + box) {
						$(this).closest('tbody').find('td#fileNumber').each(function() {
							if (trimForStupidIE($(this).text()) != 'All-Items') {
								$(this).closest('tr').find('input.innerCheckBox').attr('disabled','disabled');
							}
						});
					}
				});	
			}
			
			
			
			$('td.caption').each(function() {
				if (trimForStupidIE($(this).text()) == 'Box ' + box) {
					$(this).closest('tbody').find('td#fileNumber').each(function() {
						if (trimForStupidIE($(this).text()) == itemNumber) {
							$(this).closest('tr').find('input.innerCheckBox').attr('checked', true);
						}
					});
				}
				
			});
		}
	});
}
/*
 * FUNCTIONS TO REBUILD RESEARCH CART AND CHECKMARK CHECKBOXES END 
 */




/*
 * UTIL FUNCTIONS START: util.js 
 */
// FUNCTION TO EXTRACT BOX OR ITEM NUMBER BASED ON FUNCTION PARAMETER
// extract = 'boxNumber' WOULD FETCH BOX NUMBER
// extract = 'itemNumber' WOULD FETCH ITEM NUMBER

function BoxOrItem(extract , extractFrom){
	var boxAndItem = extractFrom.substr(extractFrom.indexOf('.') + 1);
	if (extract == 'boxNumber') {
		return(boxAndItem.substr(0,boxAndItem.indexOf('.')));
	}
	if (extract == 'itemNumber') {
		return(boxAndItem.substr(boxAndItem.indexOf('.') + 1));
	}
	if (extract == 'collectionNumber') {
		return(extractFrom.substr(0,extractFrom.indexOf('.')));
	}
	if (extract == 'collectionName'){
		return(extractFrom.substr(0,extractFrom.indexOf(':')));
	}
	if (extract == 'collectionDetail')
	{
		temp = extractFrom.substr(extractFrom.indexOf(':')+1);
		temp = temp.substr(temp.indexOf(':')+1);
		return(temp);
	}
}


// TO CHECK IF THE ITEMS BEING REMOVED ARE IN THE CURRENT PAGE
function CheckCurrentPage(){
	return $('h1.heading').html();
}


// FETCH AND PARSE LIST OF BOX NUMBERS FROM LOCAL STORAGE KEY
function CollectionList() {
	$.each($.jStorage.index(), function(index, value){
		collectionList[index] = BoxOrItem('collectionNumber', value);
	});
}

// FETCH AND PARSE LIST OF BOX NUMBERS FROM LOCAL STORAGE KEY
function BoxList() {
	$.each($.jStorage.index(), function(index, value){
		boxList[index] = BoxOrItem('boxNumber', value);
	});
}

// FETCH AND PARSE LIST OF ITEM NUMBERS FROM LOCAL STORAGE KEY
function ItemList() {
	$.each($.jStorage.index(), function(index, value){
		itemList[index] = BoxOrItem('itemNumber', value);
	});
}


//FUNCTION TO CHECK IF KEY EXISTS IN LOCAL STORAGE
function KeyExists(key, localStoreIndex){
	var returnValue;
	$.each(localStoreIndex, function(index, value){
		if (key == value){
			returnValue = true;
		}
	});
	if (returnValue){
		return true;
	}
}

function trimForStupidIE(trimString){	
	return $.trim(trimString);
}


function generateRandomNumber() {
	var dt = new Date().getMilliseconds();
	var num = Math.random();
	var rnd = Math.round(num*100000);
	return dt+rnd;
}

function confirmationNumber() {  
	var conNumber = generateRandomNumber().toString() + generateRandomNumber().toString();
	var conLength = conNumber.toString().length;
	
	while(conLength != 12){
		if((12 - conLength) > 0 ){
			conNumber = conNumber + generateRandomNumber().toString();
			conLength = conNumber.length;
		}
		if ((12 - conLength) < 0){
			conNumber = conNumber.substr(0, 12);
			conLength = conNumber.length;
		}
	}
	return conNumber;
}  

function errorMessage(errMsg){
	$('span#errLine1').show();
	$('span#errLine1').text(errMsg + '[click to close]');
}

function prefixTextCode (currentPage, returnPrefixType) {
	var collections = new Array();
	collections[0] = 'Lowell Thomas Papers';
	collections[1] = 'Nelly Goletti Papers';
	collections[2] = 'James T. Cox Collection';
	collections[3] = 'Rick Whitesell Collection';
	collections[4] = 'Gill Family Fore-Edge Painting Collections';
	collections[5] = 'Duggan Family Papers';
	collections[6] = 'Jonah Sherman Collection';
	collections[7] = 'George Carroll Papers';
	collections[8] = 'Joseph (Joe) McHugh, Jr. Collection';
	collections[9] = 'Fred Crawford Papers';
	
	var prefixText;
	var prefixCode;
	
	$.each(collections, function(index, value){
		if (trimForStupidIE(currentPage) == value){
			prefixCode = index + 1;
			prefixText = collections[index];
			return;
		} 
	});
	if (returnPrefixType == 'prefixCode') {
		return prefixCode;
	}
	if (returnPrefixType == 'prefixText') {
		return prefixText;
	}
}
/*
 * UTIL FUNCTIONS END
 */