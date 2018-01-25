mui.plusReady(function(){

	//设置手势跳转页面
	var tc= document.getElementsByClassName("_back");
	
		for (var i = 0; i < tc.length; i++) {
			tc[i].addEventListener("tap",function(){
//		    	showBack();    			
			//跳转页面
			mui.openWindow({
			    url:"index_content_article.html",
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
	
//	//swipeleft后退手势事件
//	var _b=document.getElementsByClassName("bd_content");
//	for (var i = 0; i < _b.length; i++) {
//		_b[i].addEventListener("swipeleft",function(){
//	//fire自定义事件，通知顶部nav更换状态
//		var h=plus.webview.getWebviewById( plus.runtime.appid );
//		mui.fire(h,'hideBack',{
//			pageIndex:0,
//		});     			
//	//跳转页面
//			mui.openWindow({
//			    url:"index_content_article.html",
//			    id:'index_content_article',
//			    styles:{
//			      top:'45px'//新页面顶部位置
//			    },
//			    
//			    waiting:{
//			      autoShow:false,//自动显示等待框，默认为true
//			      title:'正在加载...'//等待对话框上显示的提示内容
//				}	
//			})
//		//无法使用window.history.back(-1);
//		});
//		
//
//	}

	
	
	
	window.addEventListener('tapBack',function(event){
		
//		console.log("fire成功");
			mui.openWindow({
			    url:"index_content_article.html",
			    id:'index_content_article',
			    styles:{
			      top:'45px'//新页面顶部位置
			    },
			    
			    waiting:{
			      autoShow:false,//自动显示等待框，默认为true
			      title:'正在加载...'//等待对话框上显示的提示内容
				}	
			})
	});
	
	
});
