function check(){
	$.ajax({
		url : "http://localhost:8888/rp/account/verifyUsername",
		dataType : "text",
		success : function(result) {
			console.log(result);
		}
	});
}