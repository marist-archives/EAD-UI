function insert_value(key, value){
	//var row = new Element("tr"),
		//key = $('key').value,
		//val = $('val').value;
	if(!key){
		alert("There was a problem with selecting your item, Please contact the Marist Archives about the problem.");
		//$('key').focus();
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

/*
function flush_values(){
	$.jStorage.flush();
}
*/

function flush_data(){
	$.jStorage.flush();
}

