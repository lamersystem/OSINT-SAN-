define(function(){function b(c){this.element=c;this.promo=this.element.getAttribute("data-promo");this.staticPath=this.element.getAttribute("data-static");this.basePath=this.staticPath+"res/i/anonym/"+this.promo+"/";this.rootHtmlNode=document.documentElement;this.watchWidth=1380;this.widthMode="default";this.extension=".jpg";this.loadedImages={wide:null,"default":null};}b.prototype={init:function(){if(this.promo!=="default"){if(this.rootHtmlNode.classList.contains("chrome")||this.rootHtmlNode.classList.contains("mac-chrome")){this.extension=".webp";}window.addEventListener("resize",this.detectWidth.bind(this),false);this.detectWidth();}},setImage:function(){this.element.style.backgroundImage="url("+this.basePath+this.widthMode+"/image"+this.extension+")";},loadImage:function(){if(this.loadedImages[this.widthMode]){this.setImage();return;}var c=new Image();c.onload=function(){this.loadedImages[this.widthMode]=true;this.setImage();this.element.classList.add("__show");}.bind(this);c.src=this.basePath+this.widthMode+"/image"+this.extension;},detectWidth:function(){this.widthMode=document.body.clientWidth>this.watchWidth?"wide":"default";this.loadImage();}};function a(c){return new b(c).init();}return{activate:a};});