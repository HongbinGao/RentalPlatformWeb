function search() {
	var search = $("#search").val()
	$.ajax({
		async : false,
		url : url,
		data : {
			"search" : search
		},
		success : function() {
			console.log("success")
		},
		error : function() {
			console.log("error")
		}
	})
}