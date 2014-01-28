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
}


// TO CHECK IF THE ITEMS BEING REMOVED ARE IN THE CURRENT PAGE
function CheckCurrentPage(){
	//var collectionHeadingText = $(this).('h1#heading').html();
	return $('h1.heading').html();
}


// FETCH AND PARSE LIST OF BOX NUMBERS FROM LOCAL STORAGE KEY
function CollectionList() {
	$.each($.jStorage.index(), function(index, value){
		collectionList[index] = BoxOrItem('collectionNumber', value);
		//alert(BoxOrItem('collectionNumber', value));
	});
}

// FETCH AND PARSE LIST OF BOX NUMBERS FROM LOCAL STORAGE KEY
function BoxList() {
	$.each($.jStorage.index(), function(index, value){
		boxList[index] = BoxOrItem('boxNumber', value);
		//alert(BoxOrItem('boxNumber', value));
	});
}

// FETCH AND PARSE LIST OF ITEM NUMBERS FROM LOCAL STORAGE KEY
function ItemList() {
	$.each($.jStorage.index(), function(index, value){
		itemList[index] = BoxOrItem('itemNumber', value);
		//alert(BoxOrItem('itemNumber', value));
	});
}


//FUNCTION TO CHECK IF KEY EXISTS IN LOCAL STORAGE
function KeyExists(key, localStoreIndex){
	var returnValue;
	$.each(localStoreIndex, function(index, value){
		//pair = pair + 'Key = ' + value + 'Value = ' + get_value(value) + ' ';
		if (key == value){
			returnValue = true;
		}
	});
	if (returnValue){
		return true;
	}
	//alert(index.length);
	//for(var i=0; i<localStoreIndex.length;i++){
		//alert('Type of Index in jStorage is : ' + typeof(localStoreIndex[i]));
	//}
	
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
	
	//return prefix+dt+rnd;
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
