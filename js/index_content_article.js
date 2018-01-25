mui.plusReady(function(){

	//设置手势跳转页面
	var tc= document.getElementsByClassName("content_card");
	for (var i = 0; i < tc.length; i++) {
		tc[i].addEventListener("tap",function(){
	
			//fire自定义事件，显示后退箭头
			var h=plus.webview.getWebviewById( plus.runtime.appid );
			mui.fire(h,'showBack',{
				pageIndex:0,
			});  			
			
			//跳转页面
			mui.openWindow({
			    url:"index_content.html",
			    id:'index_content',
			    styles:{
			      top:'45px'//新页面顶部位置
			    },
			    waiting:{
			      autoShow:false,//自动显示等待框，默认为true
			      title:'正在加载...'//等待对话框上显示的提示内容
				}	
			})
		});
	}	
});





//var detailPage = null;
////添加列表项的点击事件
//mui('.mui-content').on('tap', 'a', function(e) {
//var id = this.getAttribute('id');
////获得详情页面
//if(!detailPage){
//  detailPage = plus.webview.getWebviewById('detail.html');
//}
////触发详情页面的newsId事件
//mui.fire(detailPage,'hiddenBack',{
//  id:id
//});
//
//});






//function showBack(){
//	document.getElementById("back").style.visibility="visible";
//			
//}

//function showBack(){
//var imgId=document.getElementById("back");
//if(imgId.style.display=="block")
//imgId.style.display="none";
//else
//imgId.style.display="block";
//}