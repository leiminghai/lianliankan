var map = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
var nums = [];
var flag = true;
var ifStart = false;
var click1,click2;
var i1,i2;
var clickCount = 0;//单击计数
var finished = 0;//已完成数量
var finishedArray = [];//记录图片的状态（是否已完成 false未完成 true完成）
//生成随机数
/*混淆图片位置函数*/
function scramble() {

	var r;//0-35随机数
	var temp;//临时变量
	
	for (x = 0; x <= 35; x++) {
		//产生随机数
		r = Math.floor(Math.random() * 36);

		//随机交换位置
		temp = map[r];
		map[r] = map[x];
		map[x] = temp;
	}
}

 //点击开始键设置
 start = function(){
	//默认所有的图片都未完成，所有图片都是默认图片
	for (var i = 0;i <= 35;i ++) {
		finishedArray[i] = false;
		document.getElementById('img' + i).src = 'image/img0.gif';
	}
	var input = document.getElementsByTagName("input")[0];	
	input.value="游戏进行中";
	input.disabled=true;
	ifStart=true;
	scramble();
}
// aa = function(){
// 	for (var i = 0; i < 35; i++) {
// 		document.writeln(MathRadom());
// 	};
// 		document.writeln(nums);
// }
function showImage(imgNum) {	
	//判断重复点击相同图片
	if (imgNum == click1)
		return;	

	//判断是否点击已完成的图片
	if (finishedArray[imgNum])
		return;

	if(ifStart==true){
		ifStart=false;
		var imgObj = document.getElementById('img' + imgNum);
		imgObj.src ="image/img" + map[imgNum] + ".gif";
		
		if (clickCount==0) {
			clickCount++;
			ifStart=true;
			click1=imgNum;
			
		}else{
			clickCount=0;			
			click2=imgNum;
			setTimeout(finalCheck,600);
		};
	}
	
}
function finalCheck(){
	if ( map[click1] == map[click2] ) {
		finishedArray[click1]= true;
		finishedArray[click2]= true;
		finished ++; //完成数量加1	
	}else{
		document.getElementById('img'+click1).src = 'image/img0.gif';
		document.getElementById('img'+click2).src = 'image/img0.gif';
	};
	click1 = null;
	click2 = null;
	
	if (finished>=18) {
		alert("恭喜你过关");
		var input = document.getElementsByTagName("input")[0];	
		input.value="再玩一次";
		input.disabled=false;
		finished=0;

	}else{
		ifStart=true;
	};
}


	
