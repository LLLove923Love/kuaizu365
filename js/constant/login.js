//
require(["http://localhost:8080/js/requireJs/config.js"], function() {
	//写出页面需要的所有模块，不用考虑顺序问题
	require(["jquery","common"], function($,con) {
		$("#footer").load("common/footer.html",function(){
			con.footer();
		});
					
	});
});