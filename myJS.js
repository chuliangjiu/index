/**  
   * getStyle  
   * startMove 
*/    
                     
  function getStyle(obj, attr){    
      if(obj.currentStyle)    {    
          return obj.currentStyle[attr]; //for ie   
     }else{    
         return getComputedStyle(obj, false)[attr];  // for ff  
     }    
 }    
 function Move(obj,json,fn){    
       
     clearInterval(obj.timer); 
       
     obj.timer = setInterval(function(){    
             
         var bStop = true;    
         for(var attr in json){      
                   
             var iCur = 0;    
             if(attr == 'opacity'){    
                
                 iCur = Math.round(parseFloat(getStyle(obj, attr))*100);    
             }else{    
                 iCur = parseInt(getStyle(obj,attr)); 
             }    
                
             var iSpeed = (json[attr] - iCur) /5;  
             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  
 
             if(iCur != json[attr]){    
                 bStop = false;    
             }       
  
             if(attr=='opacity'){    
                 iCur += iSpeed; 
                 obj.style.filter='alpha(opacity:' + iCur + ')';    
                 obj.style.opacity=iCur / 100;    
             }    
             else{    
                 obj.style[attr]=iCur+iSpeed+'px';    
             }    
         }    
   
         if(bStop){    
             clearInterval(obj.timer);    
             if(fn) fn();    
         }    
     },30);    
  }
 /**
   *
   *
 */
 function getClass(n) {
	    var classElements = [],allElements = document.getElementsByTagName('*');
	    for (var i=0; i< allElements.length; i++ )
	   {
	       if (allElements[i].className == n ) {
	           classElements[classElements.length] = allElements[i];
	        }
	   }
	   return classElements;
}