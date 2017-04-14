window.onload = function () {
	(function(){
		var oli=document.getElementById("menu-ul").children;
		for(var i=1;i<oli.length-4;i++){
			oli[i].onmouseover=function(){
				this.children[1].style.display="block";
				this.onmouseout=function(){
					this.children[1].style.display="none";
				}
				this.children[1].onmouseout=function(){
					this.style.display="none";
				}
			}
		}
	})();
	
	(function(){
		var wrap=document.getElementById("b-1");
		var pre=document.getElementById("b-1").children[0];
		var btm=document.getElementById("b-1-bottom").children;
		var timer=null;
		var now=0;
		
		if(timer){
			clearInterval(timer);
			timer=null;
		}
		timer=setInterval(autoplay,3000);
		function autoplay(){
			now++;
			if(now>=btm.length){
				now=0;
			}
			change(now);
		}
		for(var i=0;i<btm.length;i++){
			btm[i].index=i;
			btm[i].onclick=function(){
				clearInterval(timer);
				change(this.index);
			}	
		};
		function change(cur){
			for(var j=0;j<btm.length;j++){
				btm[j].className="off";
			}
			btm[cur].className="on";
			Move(pre,{left:-cur*440})
			now=cur;
		}
		wrap.onmouseover=function(){
			clearInterval(timer);
		}
		wrap.onmouseout=function(){
			clearInterval(timer);
			timer=setInterval(autoplay,3000);
		}
	})();
	
	(function(){
		var list=document.getElementById("top-list").children;
		
		for(var i=0;i<list.length;i++){
			list[i].onmouseover=function(){
				this.children[0].style.top=this.children[1].style.top=0+"px";
			}
			list[i].onmouseout=function(){
				this.children[0].style.top=this.children[1].style.top=82+"px";
			}
		}
	})();
	
	(function(){
		var list=getClass("b-list");
		var info=getClass("info");
		var room=getClass("room");
		var co1=getClass("list-cover");
		var co2=getClass("cover-list");
		
		for(var i=0;i<list.length;i++){
			list[i].index=i;
			list[i].onmouseover=function(){
				info[this.index].style.bottom=-20+"px";
				room[this.index].children[0].style.color="#00a1d6";
				co1[this.index].style.zIndex=5;
				co2[this.index].style.zIndex=6;
			}
			list[i].onmouseout=function(){
				info[this.index].style.bottom=3+"px";
				room[this.index].children[0].style.color="black";
				co1[this.index].style.zIndex=1;
				co2[this.index].style.zIndex=2;
			}
		}
	})();
	
	(function(){
		var wrap=getClass("live-list-wrapper")[0].children;
		var wrap2=getClass("live-list-wrapper")[1].children;
		var week=getClass("b-slt-tab1")[0].children;
		var week2=getClass("b-slt-tab1")[1].children;
		
		function Swift(a,b){
			for(var i=0;i<a.length;i++){
				a[i].index=i;
				a[i].onclick=function(){
					for(var j=0;j<a.length;j++){
						a[j].children[0].className="";
						b[j].className="list-on";
					}
					this.children[0].className="b-slt-num-on";
					b[this.index].className="";
				}
			}
		}
		Swift(week,wrap);
		Swift(week2,wrap2);
	})();
	
	(function(){
		var list=getClass("b-slt-tab");
		
		for(var i=0;i<list.length;i++){
			
			list[i].onmouseover=function(){
				var option=this.children;
				var wrap=this.parentNode.parentNode.parentNode.children[1];
				
				for(var j=0;j<option.length;j++){
					option[j].index=j;
					option[j].onclick=function(){
						for(var r=0;r<option.length;r++){
							option[r].children[0].className="";
							wrap.children[r].className="b-body-wrapper";
						}
						this.children[0].className="b-slt-tab-on";
						wrap.children[this.index].className="";
					}
				}
			}
		}
	})();
	
	(function(){
		var list=getClass("b-head-1-left");
		
		for(var i=0;i<list.length;i++){
			list[i].onmouseover=function(){
				var option=this.children[1].children;
				var wrap=this.parentNode.parentNode.children[1].children[0].children[0];
				for(var j=0;j<option.length;j++){
					option[j].index=j;
					option[j].onmouseover=function(){
						for(var r=0;r<option.length;r++){
							option[r].className="";
						}
						this.className="b-slt-tab-on";
						Move(wrap,{left:-this.index*260});
					}
				}
			}
		}
	})();
	
	
};