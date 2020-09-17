var put1=0;
var put2=0;
var put3=0;
var put4=0;
var put5=0;

function start ()
{
	document.getElementById( "small" ).addEventListener("mouseover", mouseOver3, false );
	document.getElementById( "small" ).addEventListener("mouseout", mouseOut3, false );
	document.getElementById( "shopping" ).addEventListener("mouseover", mouseOver, false );
	document.getElementById( "shop" ).addEventListener("mouseover", mouseOver2, false );
	document.getElementById( "shopping" ).addEventListener("mouseout", mouseOut, false );
	document.getElementById( "shop" ).addEventListener("mouseout", mouseOut2, false );
	document.getElementById( "rank11" ).addEventListener("mouseover", mouseOver4, false );
	document.getElementById( "rank11" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank22" ).addEventListener("mouseover", mouseOver5, false );
	document.getElementById( "rank22" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank33" ).addEventListener("mouseover", mouseOver6, false );
	document.getElementById( "rank33" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank44" ).addEventListener("mouseover", mouseOver7, false );
	document.getElementById( "rank44" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank55" ).addEventListener("mouseover", mouseOver8, false );
	document.getElementById( "rank55" ).addEventListener("mouseout", mouseOut4, false );

	document.getElementById( "f2" ).addEventListener("click", p1, false );
	document.getElementById( "f3" ).addEventListener("click", p1, false );
	document.getElementById( "F1" ).addEventListener("click", p11, false );
	document.getElementById( "f4" ).addEventListener("click", p2, false );
	document.getElementById( "f5" ).addEventListener("click", p2, false );
	document.getElementById( "F2" ).addEventListener("click", p22, false );
	document.getElementById( "f6" ).addEventListener("click", p3, false );
	document.getElementById( "f7" ).addEventListener("click", p3, false );
	document.getElementById( "F3" ).addEventListener("click", p33, false );
	
	
	document.getElementById( "rank66" ).addEventListener("mouseover", mouseOver9, false );
	document.getElementById( "rank66" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank77" ).addEventListener("mouseover", mouseOver10, false );
	document.getElementById( "rank77" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank88" ).addEventListener("mouseover", mouseOver11, false );
	document.getElementById( "rank88" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank99" ).addEventListener("mouseover", mouseOver12, false );
	document.getElementById( "rank99" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank100" ).addEventListener("mouseover", mouseOver13, false );
	document.getElementById( "rank100" ).addEventListener("mouseout", mouseOut4, false );
	document.getElementById( "rank111" ).addEventListener("mouseover", mouseOver14, false );
	document.getElementById( "rank111" ).addEventListener("mouseout", mouseOut4, false );
	
	
		
}

function p1()
{
	document.getElementById( "F1" ).setAttribute("class","F1");
	document.getElementById( "F" ).setAttribute("style","display:none;");
	document.getElementById( "ff2" ).setAttribute("class","ff2");
}
function p11()
{
	document.getElementById( "F1" ).setAttribute("class","");
	document.getElementById( "F" ).setAttribute("style","");
	document.getElementById( "ff2" ).setAttribute("class","");
}
function p2()
{
	document.getElementById( "F2" ).setAttribute("class","F2");
	document.getElementById( "F" ).setAttribute("style","display:none;");
	document.getElementById( "ff1" ).setAttribute("class","ff1");
}
function p22()
{
	document.getElementById( "F2" ).setAttribute("class","");
	document.getElementById( "F" ).setAttribute("style","");
	document.getElementById( "ff1" ).setAttribute("class","");
}
function p3()
{
	document.getElementById( "F3" ).setAttribute("class","F3");
	document.getElementById( "F" ).setAttribute("style","display:none;");
	document.getElementById( "ff3" ).setAttribute("class","ff3");
}
function p33()
{
	document.getElementById( "F3" ).setAttribute("class","");
	document.getElementById( "F" ).setAttribute("style","");
	document.getElementById( "ff3" ).setAttribute("class","");
}

function mouseOver4 ()
{
	document.getElementById( "rank11" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -140px; z-index: 1;");
}
function mouseOver5 ()
{
	document.getElementById( "rank22" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -417px;left:700px;z-index: 1; ");
	
}
function mouseOver6 ()
{
	document.getElementById( "rank33" ).setAttribute("style","position: relative;top: -694px;left:255px;-webkit-transform:scale(2, 2);z-index: 1;");
	
}
function mouseOver7 ()
{
	document.getElementById( "rank44" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -971px; z-index: 1;");
}
function mouseOver8 ()
{
	document.getElementById( "rank55" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -1249px;left:700px;z-index: 1;");
}

function mouseOver9 ()
{
	document.getElementById( "rank66" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -55px;left:250px;z-index: 1;");
}
function mouseOver10 ()
{
	document.getElementById( "rank77" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -300px;left:205px+20%;z-index: 1;");
}
function mouseOver11 ()
{
	document.getElementById( "rank88" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -365px;left:205px+20%;z-index: 1;");
}
function mouseOver12 ()
{
	document.getElementById( "rank99" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -610px;left:250px;z-index: 1;");
}
function mouseOver13 ()
{
	document.getElementById( "rank100" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -1045px;left:705px;z-index: 1;");
}
function mouseOver14 ()
{
	document.getElementById( "rank111" ).setAttribute("style","-webkit-transform:scale(2, 2);position: relative;top: -1105px;left:705px;z-index: 1;");
}
function mouseOut4 ()
{
	document.getElementById( "rank11" ).setAttribute("style","");
	document.getElementById( "rank22" ).setAttribute("style","");
	document.getElementById( "rank33" ).setAttribute("style","");
	document.getElementById( "rank44" ).setAttribute("style","");
	document.getElementById( "rank55" ).setAttribute("style","");
	document.getElementById( "rank66" ).setAttribute("style","");
	document.getElementById( "rank77" ).setAttribute("style","");
	document.getElementById( "rank88" ).setAttribute("style","");
	document.getElementById( "rank99" ).setAttribute("style","");
	document.getElementById( "rank100" ).setAttribute("style","");
	document.getElementById( "rank111" ).setAttribute("style","");
	document.getElementById( "rank122" ).setAttribute("style","");
}
function mouseOver3 ()
{
	document.getElementById( "small" ).setAttribute("style","width:82%;height:590px;position: relative;top:-185px; left:0px;background:#CCEEFF;border-radius:20px;border:10px solid #F0FFF0;border-style:double;");
	document.getElementById( "word" ).setAttribute("style","font-size:50px;-webkit-text-stroke: 2px #778899;font-weight:650;position: relative;top: 10px; left:0px;color:white;");	
}
function mouseOut3 ()
{
	document.getElementById( "small" ).setAttribute("style","");
	document.getElementById( "word" ).setAttribute("style","");
		
			
}

		function mouseOver(e)
		{
			document.getElementById( "shop" ).setAttribute("style","border:10px solid white;-webkit-transform: rotate(360deg) scale(0, 0);");
			document.getElementById( "word2" ).setAttribute("style","color:white;");
			document.getElementById( "word1" ).setAttribute("style","font-size:70px;color:black;");
			document.getElementById( "shopping" ).setAttribute("style","border:10px solid #48637f;background-color:#DCDCDC;position: relative;top: 140px; left: 600px;width:250px; height:250px;");
			document.getElementById( "shopping1" ).setAttribute("class","box");
			document.getElementById( "shopping2" ).setAttribute("class","box");
			document.getElementById( "shopping3" ).setAttribute("class","box");
			document.getElementById( "shopping4" ).setAttribute("class","box");
			document.getElementById( "shopping5" ).setAttribute("class","box3");
			document.getElementById( "min1" ).setAttribute("class","min1");
			document.getElementById( "min2" ).setAttribute("class","min2");
			document.getElementById( "min3" ).setAttribute("class","min3");
			document.getElementById( "word4" ).setAttribute("class","");
			document.getElementById( "ss1" ).setAttribute("class","s1");
			document.getElementById( "ss2" ).setAttribute("class","s1");
			document.getElementById( "ss3" ).setAttribute("class","s1");
			document.getElementById( "ss4" ).setAttribute("class","s1");
			document.getElementById( "ss11" ).setAttribute("class","s2");
			document.getElementById( "ss22" ).setAttribute("class","s2");
			document.getElementById( "ss33" ).setAttribute("class","s2");
			document.getElementById( "ss44" ).setAttribute("class","s2");
			document.getElementById( "ss55" ).setAttribute("class","s3");
			document.getElementById( "ss5" ).setAttribute("class","s33");
			document.getElementById( "ss6" ).setAttribute("class","s1");
			document.getElementById( "ss7" ).setAttribute("class","s1");
			document.getElementById( "ss8" ).setAttribute("class","s1");
			document.getElementById( "ss66" ).setAttribute("class","s2");
			document.getElementById( "ss77" ).setAttribute("class","s2");
			document.getElementById( "ss88" ).setAttribute("class","s2");
		}
		function mouseOut(e)
		{
			document.getElementById( "shopping" ).setAttribute("style","");
			document.getElementById( "word2" ).setAttribute("style","");
			document.getElementById( "word1" ).setAttribute("style","");
			document.getElementById( "shop" ).setAttribute("style","");
			document.getElementById( "shopping1" ).setAttribute("class","");
			document.getElementById( "shopping2" ).setAttribute("class","");
			document.getElementById( "shopping3" ).setAttribute("class","");
			document.getElementById( "shopping4" ).setAttribute("class","");
			document.getElementById( "shopping5" ).setAttribute("class","");
			document.getElementById( "min1" ).setAttribute("class","");
			document.getElementById( "min2" ).setAttribute("class","");
			document.getElementById( "min3" ).setAttribute("class","");
			document.getElementById( "word4" ).setAttribute("class","word4");
			document.getElementById( "ss1" ).setAttribute("class","s");
			document.getElementById( "ss2" ).setAttribute("class","s");
			document.getElementById( "ss3" ).setAttribute("class","s");
			document.getElementById( "ss4" ).setAttribute("class","s");
			document.getElementById( "ss11" ).setAttribute("class","s");
			document.getElementById( "ss22" ).setAttribute("class","s");
			document.getElementById( "ss33" ).setAttribute("class","s");
			document.getElementById( "ss44" ).setAttribute("class","s");
			document.getElementById( "ss55" ).setAttribute("class","s");
			document.getElementById( "ss5" ).setAttribute("class","s");
			document.getElementById( "ss6" ).setAttribute("class","s");
			document.getElementById( "ss7" ).setAttribute("class","s");
			document.getElementById( "ss8" ).setAttribute("class","s");
			document.getElementById( "ss66" ).setAttribute("class","s");
			document.getElementById( "ss77" ).setAttribute("class","s");
			document.getElementById( "ss88" ).setAttribute("class","s");
			
			
		}
		function mouseOut2(e)
		{
			document.getElementById( "shopping" ).setAttribute("style","");
			document.getElementById( "word1" ).setAttribute("style","");
			document.getElementById( "word2" ).setAttribute("style","");
			document.getElementById( "shop" ).setAttribute("style","");
			document.getElementById( "shop1" ).setAttribute("class","");
			document.getElementById( "shop2" ).setAttribute("class","");
			document.getElementById( "shop3" ).setAttribute("class","");
			document.getElementById( "shop4" ).setAttribute("class","");
			document.getElementById( "shop5" ).setAttribute("class","");
			document.getElementById( "shop6" ).setAttribute("class","");
			document.getElementById( "word4" ).setAttribute("class","word4");
			document.getElementById( "sp1" ).setAttribute("class","s");
			document.getElementById( "sp2" ).setAttribute("class","s");
			document.getElementById( "sp3" ).setAttribute("class","s");
			document.getElementById( "sp4" ).setAttribute("class","s");
			document.getElementById( "sp5" ).setAttribute("class","s");
			document.getElementById( "sp6" ).setAttribute("class","s");
			document.getElementById( "sp11" ).setAttribute("class","s");
			document.getElementById( "sp22" ).setAttribute("class","s");
			document.getElementById( "sp33" ).setAttribute("class","s");
			document.getElementById( "sp44" ).setAttribute("class","s");
			document.getElementById( "sp55" ).setAttribute("class","s");
			document.getElementById( "sp66" ).setAttribute("class","s");
			
		}
		function mouseOver2(e)
		{
			document.getElementById( "shopping" ).setAttribute("style","border:10px solid #283643;background:#283643;");
			document.getElementById( "word1" ).setAttribute("style","color:#283643;");
			document.getElementById( "word2" ).setAttribute("style","font-size:70px;color:black;");
			document.getElementById( "shop" ).setAttribute("style","border:10px solid #48637f;background-color:#DCDCDC;relative;top: -160px; left: 620px;width:250px; height:250px;");
			document.getElementById( "shop1" ).setAttribute("class","box4");
			document.getElementById( "shop2" ).setAttribute("class","box4");
			document.getElementById( "shop3" ).setAttribute("class","box4");
			document.getElementById( "shop4" ).setAttribute("class","box4");
			document.getElementById( "shop5" ).setAttribute("class","box4");
			document.getElementById( "shop6" ).setAttribute("class","box4");
			document.getElementById( "word4" ).setAttribute("class","");
			document.getElementById( "sp1" ).setAttribute("class","s1");
			document.getElementById( "sp2" ).setAttribute("class","s1");
			document.getElementById( "sp3" ).setAttribute("class","s1");
			document.getElementById( "sp4" ).setAttribute("class","s1");
			document.getElementById( "sp5" ).setAttribute("class","s1");
			document.getElementById( "sp6" ).setAttribute("class","s1");
			document.getElementById( "sp11" ).setAttribute("class","s2");
			document.getElementById( "sp22" ).setAttribute("class","s2");
			document.getElementById( "sp33" ).setAttribute("class","s2");
			document.getElementById( "sp44" ).setAttribute("class","s2");
			document.getElementById( "sp55" ).setAttribute("class","s2");
			document.getElementById( "sp66" ).setAttribute("class","s2");
		}
		
		
		
window.addEventListener( "load", start, false );