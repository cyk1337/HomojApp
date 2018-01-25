mui.plusReady(function(){
//	function hasClass(ele,cls) { 
//		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')); 
//	} 
//
//	function addClass(ele,cls) { 
//		if (!hasClass(ele,cls)) ele.className += " "+cls; 
//	} 
//	
//	function removeClass(ele,cls) { 
//		if (hasClass(ele,cls)) { 
//		var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
//		ele.className=ele.className.replace(reg,' '); 
//		} 
//	} 
//	
//	window.addEventListener('changePage',function(event){
//		//清除底部划线状态
//		var lines = mui(".nav_select")[0].children;
//		for(var i = 0, len = lines.length; i < len; i++){
//			removeClass(lines[i], "active");
//		}
//		
//		//根据不同页面修改文案
//		switch (event.detail.pageIndex){
//			case 0:
//				//修改标题文案
//				mui(".mui-title")[0].innerHTML = "文章精选";
//				//修改底部划线状态
//				addClass(lines[event.detail.pageIndex], "active");
//				break;
//			case 1:
//				//修改标题文案
//				mui(".mui-title")[0].innerHTML = "礼包福利";
//				//修改底部划线状态
//				addClass(lines[event.detail.pageIndex], "active");
//				break;
//		}
//	});
	
	document.getElementById('back').addEventListener('tap',function(){
		//隐藏后退按钮
		 document.getElementById("back").style.display="none";

		//fire自定义事件，通知内容页 后退
		var h=plus.webview.getWebviewById('index_content');
//		 console.log(h);
		mui.fire(h,'tapBack',{
			pageIndex:0,
		});  	
	});
	
});

window.addEventListener('showBack',function(event){
  //显示后退箭头 
  document.getElementById("back").style.display="block";
});

window.addEventListener('hideBack',function(event){
  //隐藏后退箭头
  document.getElementById("back").style.display="none";
});


