function init(){
		//书写轮图片显示的定时操作
		setInterval("checkImg()",3000);
		//1.设置显示图片的定时操作
		time = setInterval("showAd()",3000);
		}
		//书写函数
		var i=0;
		function checkImg(){
			i++;
			//获取图片位置并设置src属性值
			document.getElementById("img1").src="../img/"+i+".jpg";
			if(i==3){
				i=0;
			}
		}
			//2.书写显示广告的函数
			function showAd(){
			//3.获取图片的位置
			var adEle = document.getElementById("img2");
			//4.修改广告图片元素里面的属性让其显示
			adEle.style.display="block";
			//5.清除显示图片的定时操作
			clearInterval(time);
			//6.设置隐藏图片的定时操作
			time = setInterval("hideAd()",3000);
			}
			//7.书写隐藏图片的函数
		function hideAd(){
			//8.获取广告图片元素里面的属性，并修改成none
			document.getElementById("img2").style.display="none";
			//清除隐藏图片的定时操作
			clearInterval(time);
			}