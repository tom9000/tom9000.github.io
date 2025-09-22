function pop(url,winN,winW,winH,cT,cL,features){
		winL=(screen.width/2.1)-(cL*650/2+10);
		winT=(screen.height/2.2)-(cT*300/2+20);
		window.open(url, winN, "height="+winH+", width="+winW+", top="+winT+", left="+winL+", "+features);
}
function pop1(url,winN,winW,winH,wTop,wLeft,features){
		window.open(url, winN, "height="+winH+", width="+winW+", top="+wTop+", left="+wLeft+", "+features);
}

function jqk34i(data){
var res = "";
for(var i = 0; i < data.length; i++)
{
var ch = data.charCodeAt(i);
res += (ch + 47 >= 126) ? String.fromCharCode(" ".charCodeAt(0) + (ch + 47) % 126) : String.fromCharCode(ch + 47);
}
return res;
}

// popup closing existing popup first

// start simpleswap

function SimpleSwap(el,which){
        el.src=el.getAttribute(which||"origsrc");
}

function SimpleSwapSetup(){
  var x = document.getElementsByTagName("img");
  for (var i=0;i<x.length;i++){
    var oversrc = x[i].getAttribute("oversrc");
    if (!oversrc) continue;
    // preload image
    // comment the next two lines to disable image pre-loading
    x[i].oversrc_img = new Image();
    x[i].oversrc_img.src=oversrc;
    // set event handlers
    x[i].onmouseover = new Function("SimpleSwap(this,'oversrc');");
    x[i].onmouseout = new Function("SimpleSwap(this);");
    // save original src
    x[i].setAttribute("origsrc",x[i].src);
  }
}

var PreSimpleSwapOnload =(window.onload)? window.onload : function(){};

window.onload = function(){PreSimpleSwapOnload(); SimpleSwapSetup();}

// end simple swap

var myWindow = '0';
function newwin(theurl,thename,thefeatures){
if((!myWindow.closed)&&(myWindow!='0')){
	myWindow.close();
	}
myWindow = window.open(theurl,thename,thefeatures);
myWindow.focus();
}

var TimeoutDelay = 1000; //Milliseconds

function mydrop(myObj,visStr) {
	navOn = myObj;
	var theObj, objStr;
	clearTimeout(dropTimer);
	dropTimer = setTimeout('hideDropDowns()', TimeoutDelay);
	//alert('hello');
	if ((navigator.appName == 'Netscape') && document.layers != null) {
		document.layers[myObj].visibility = visStr;
	} else if (document.all != null) {
		if (visStr == 'show') visStr = 'visible';
		if (visStr == 'hide') visStr = 'hidden';
		document.all[myObj].style.visibility = visStr;
	} else {
		if (visStr == 'show') visStr = 'visible';
		if (visStr == 'hide') visStr = 'hidden';
		objStr = 'document.getElementById(\'' + myObj + '\')';
		theObj = eval(objStr);
		theObj.style.visibility = visStr;
	}
}

