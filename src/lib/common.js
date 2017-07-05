/*
* @Author: wj77998
* @Date:   2017-06-21 20:14:44
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-07-04 16:36:48
*/

'use strict';

/*if(!__DEBUG__){
  (function a() {
      try {
          (function b(i) {
              if (("" + i / i).length !== 1 || i % 20 === 0) {
                  (function() {}).constructor("debugger")();
              } else {
                  debugger;
              }
              b(++i);
          })(0);
      } catch (e) {
          setTimeout(a, 5e3);
      }
  })();
}*/


(function(){
    -[1,]||(function(){
      //为window对象添加
      addEventListener=function(n,f){
        if("on"+n in this.constructor.prototype)
          this.attachEvent("on"+n,f);
        else {
          var o=this.customEvents=this.customEvents||{};
          n in o?o[n].push(f):(o[n]=[f]);
        };
      };
      removeEventListener=function(n,f){
        if("on"+n in this.constructor.prototype)
          this.detachEvent("on"+n,f);
        else {
          var s=this.customEvents&&this.customEvents[n];
          if(s)for(var i=0;i<s.length;i++)
            if(s[i]==f)return void s.splice(i,1);
        };
      };
      dispatchEvent=function(e){
        if("on"+e.type in this.constructor.prototype)
          this.fireEvent("on"+e.type,e);
        else {
          var s=this.customEvents&&this.customEvents[e.type];
          if(s)for(var s=s.slice(0),i=0;i<s.length;i++)
            s[i].call(this,e);
        }
      };
      //为document对象添加
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
      HTMLDocument.prototype.dispatchEvent=dispatchEvent;
      HTMLDocument.prototype.createEvent=function(){
        var e=document.createEventObject();
        e.initMouseEvent=function(en){this.type=en;};
        e.initEvent=function(en){this.type=en;};
        return e;
      };
    })();
}());

export const imageData = () => {
	return {
		src : "",
		height : "",
		width : "",
		linkValue : "",
		linkType : "",
		linkText : ""
	}
}

export const navData = () => {
  return {
    text : "",
    linkValue : "",
    linkType : "",
    linkText : ""
  }
}

export const companyData = () => {
	return {
		value : "",
		vunit : "",
		additional : ""
	}
}

export const uploadApi = "http://localhost:3600/upload/"

