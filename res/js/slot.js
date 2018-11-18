var doing = false;
var spin = [new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3"),new Audio("res/sounds/spin.mp3")];
var coin = [new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3"),new Audio("res/sounds/coin.mp3")]
var win = new Audio("res/sounds/win.mp3");
var lose = new Audio("res/sounds/lose.mp3");
var audio = false, mode = false;
let status = document.getElementById("status"),
 elemalarm = document.getElementById('alarmText'),
 wintext = document.getElementById('winningtext'),
 Topinfo = document.getElementById('Topinfo'),
 Topnumber = document.getElementById('Topnumber'),
 Centerinfo = document.getElementById('Centerinfo'),
 Centernumber = document.getElementById('Centernumber'),
 Bottominfo = document.getElementById('Bottominfo'),
 Bottomnumber = document.getElementById('Bottomnumber'),
 Sumnumber = document.getElementById('Sumnumber'),
 slotT = document.getElementById("TopSlot"),
 slotC = document.getElementById("CenterSlot"),
 slotB = document.getElementById("BottomSlot");

var info = true, chkCherrytop = false, chkCherrycenter=false,chkCherrybottom=false,chk7top=false, chk7center=false, chk7bottom= false, chkBartop = false, chkBarcenter=false,chkBarbottom=false;
var SStop1=0,SStop2=0,SStop3=0,SScenter1=0,SScenter2=0,SScenter3=0,SSbottom1=0,SSbottom2=0,SSbottom3=0;
var xlandingPosition = [ 'top', 'center', 'bottom' ]; 
function doSlot(){
	// if (doing){return null;}
	//doing = true;
	slotT.style.visibility = 'hidden';
	slotC.style.visibility = 'hidden';
	slotB.style.visibility = 'hidden';
	document.getElementById("Gira").disabled=true;
	document.getElementById("Gira").innerHTML="Please wait ...";
	elemalarm.style.visibility = 'hidden';
	var numChanges = randomInt(1,4)*5
	var numeberSlot1 = numChanges+randomInt(1,5)
	var numeberSlot2 = numChanges+2*5+randomInt(1,5)
	var numeberSlot3 = numChanges+4*5+randomInt(1,5)
  
	var i1 = 0,i2 = 0,i3 = 0;
	var sound = 0;
	status.innerHTML = "SPINNING Derivco Company";
	slot1 = setInterval(spin1, 50);
	slot2 = setInterval(spin2, 50);
	slot3 = setInterval(spin3, 50);
	document.getElementById("Gira").disabled=false;
	
	function spin1(){
		i1++;
		if (i1>=numeberSlot1){
			coin[0].play()
			clearInterval(slot1);
			return null;
		}
		//Top
		slotTileT = document.getElementById("slotT1");
		if (slotTileT.className == "a5") {
			slotTileT.className = "a0";
		}
		slotTileT.className = "a" + (parseInt(slotTileT.className.substring(1)) + 1)
		SStop1 = slotTileT.className;
		//Center
		slotTile = document.getElementById("slot1");
		if (slotTile.className == "a5") {
			slotTile.className = "a0";
		}
		slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    SScenter1 = slotTile.className;
		//Bottom
		slotTileB = document.getElementById("slotB1");
		if (slotTileB.className == "a5") {
			slotTileB.className = "a0";
		}
		slotTileB.className = "a" + (parseInt(slotTileB.className.substring(1)) + 1)
		SSbottom1 = slotTileB.className;	
	}
	function spin2(){
		i2++;
		if (i2>=numeberSlot2){
			coin[1].play()
			clearInterval(slot2);
			return null;
		}
		slotTile = document.getElementById("slot2");
		if (slotTile.className=="a5"){
			slotTile.className = "a0";
		}
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
		SScenter2 = slotTile.className;
		slotTileT = document.getElementById("slotT2");
		if (slotTileT.className=="a5"){
			slotTileT.className = "a0";
		}
		slotTileT.className = "a"+(parseInt(slotTileT.className.substring(1))+1)
		SStop2 = slotTileT.className;
		slotTileB = document.getElementById("slotB2");
		if (slotTileB.className=="a5"){
			slotTileB.className = "a0";
		}
		slotTileB.className = "a"+(parseInt(slotTileB.className.substring(1))+1)
		SSbottom2 = slotTileB.className;
	}
	function spin3(){
		i3++;
		if (i3>=numeberSlot3){
			coin[2].play()
			clearInterval(slot3);
			winningplay();
			return null;
		}
		slotTile = document.getElementById("slot3");
		if (slotTile.className=="a5"){
			slotTile.className = "a0";
		}
		sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();
		slotTile.className = "a"+(parseInt(slotTile.className.substring(1))+1)
		SScenter3 = slotTile.className;
		slotTileT = document.getElementById("slotT3");
		if (slotTileT.className=="a5"){
			slotTileT.className = "a0";
		}
		slotTileT.className = "a"+(parseInt(slotTileT.className.substring(1))+1)
		SStop3 = slotTileT.className;
		slotTileB = document.getElementById("slotB3");
		if (slotTileB.className=="a5"){
			slotTileB.className = "a0";
		}
		slotTileB.className = "a"+(parseInt(slotTileB.className.substring(1))+1)
		SSbottom3 = slotTileB.className;
	}
}

function winningplay(){
	
	var sumPaytable = 0;
	
	Topinfo.innerHTML = Topnumber.innerHTML = Centerinfo.innerHTML = Centernumber.innerHTML = Bottominfo.innerHTML = Bottomnumber.innerHTML = Sumnumber.innerHTML = " ";

	// 3 CHERRY symbols on top center bottom line
  if (SStop1 == "a5" && SStop2 == "a5" && SStop3 == "a5"){
		console.log('Win Cherry: 2000' );
		Topinfo.innerHTML = '3 CHERRY symbols';
		Topnumber.innerHTML = '2000';
		sumPaytable += 2000;
		chkCherrytop = true;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a5" && SScenter2 == "a5" && SScenter3 == "a5"){
		console.log('Win Cherry: 1000' );
		Centerinfo.innerHTML = '3 CHERRY symbols';
		Centernumber.innerHTML = '1000';
		sumPaytable += 1000;
		chkCherrycenter = true;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a5" && SSbottom2 == "a5" && SSbottom3 == "a5"){
		console.log('Win Cherry: 4000' );
		Bottominfo.innerHTML = '3 CHERRY symbols';
		Bottomnumber.innerHTML = '4000';
		sumPaytable += 4000;
		chkCherrybottom = true;
		slotB.style.visibility = 'visible';
	}
  // 3 7 symbols on top center bottom line
	if (SStop1 == "a4" && SStop2 == "a4" && SStop3 == "a4"){
		console.log('Win 7: 150' );
		Topinfo.innerHTML = '3 7 symbols';
		Topnumber.innerHTML = '150';
		sumPaytable += 150;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a4" && SScenter2 == "a4" && SScenter3 == "a4"){
		console.log('Win 7: 150' );
		Centerinfo.innerHTML = '3 7 symbols';
		Centernumber.innerHTML = '150';
		sumPaytable += 150;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a4" && SSbottom2 ==  "a4" && SSbottom3 == "a4"){
		console.log('Win 7: 150' );
		Bottominfo.innerHTML = '3 7 symbols';
		Bottomnumber.innerHTML = '150';
		sumPaytable += 150;
		slotB.style.visibility = 'visible';
	}
	// 3 3xBar symbols on top center bottom line
	if (SStop1 == "a1" && SStop2 == "a1" && SStop3 == "a1"){
		console.log('Win 3xBar: 50' );
		Topinfo.innerHTML = '3 3xBar symbols';
		Topnumber.innerHTML = '50';
		sumPaytable += 50;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a1" && SScenter2 == "a1" && SScenter3 == "a1"){
		console.log('Win 3xBar: 50' );
		Centerinfo.innerHTML = '3 3xBar symbols';
		Centernumber.innerHTML = '50';
		sumPaytable += 50;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a1" && SSbottom2 == "a1" && SSbottom3 == "a1"){
		console.log('Win 3xBar: 50' );
		Bottominfo.innerHTML = '3 3xBar symbols';
		Bottomnumber.innerHTML = '50';
		sumPaytable += 50;
		slotB.style.visibility = 'visible';
	}
	// 3 2xBar symbols on top center bottom line
	if (SStop1 == "a3" && SStop2 == "a3" && SStop3 == "a3"){
		console.log('Win 2xBar: 20' );
		Topinfo.innerHTML = '3 2xBar symbols';
		Topnumber.innerHTML = '20';
		sumPaytable += 20;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a3" && SScenter2 == "a3" && SScenter3 == "a3"){
		console.log('Win 2xBar: 20' );
		Centerinfo.innerHTML = '3 2xBar symbols';
		Centernumber.innerHTML = '20';
		sumPaytable += 20;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a3" && SSbottom2 == "a3" && SSbottom3 == "a3"){
		console.log('Win 2xBar: 20' );
		Bottominfo.innerHTML = '3 2xBar symbols';
		Bottomnumber.innerHTML = '20';
		sumPaytable += 20;
		slotB.style.visibility = 'visible';
	}
	// 3 Bar symbols on top center bottom line
	if (SStop1 == "a2" && SStop2 == "a2" && SStop3 == "a2"){
		console.log('Win BAR: 10' );
		Topinfo.innerHTML = '3 Bar symbols';
		Topnumber.innerHTML = '10';
		sumPaytable += 10;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a2" && SScenter2 == "a2" && SScenter3 == "a2"){
		console.log('Win BAR: 10' );
		Centerinfo.innerHTML = '3 Bar symbols';
		Centernumber.innerHTML = '10';
		sumPaytable += 10;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a2" && SSbottom2 == "a2" && SSbottom3 == "a2"){
		console.log('Win BAR: 10' );
		Bottominfo.innerHTML = '3 Bar symbols';
		Bottomnumber.innerHTML = '10';
		sumPaytable += 10;
		slotB.style.visibility = 'visible';
	}
	// Any combination of CHERRY and 7 symbols on top center bottom line
	if ((SStop1 == "a4" || SStop2 == "a4" || SStop3 == "a4") && (SStop1 == "a5" || SStop2 == "a5" || SStop3 == "a5")){
		console.log('Win 7 Cherry top: 75' );
		Topinfo.innerHTML = 'CHERRY and 7';
		Topnumber.innerHTML = '75 ';
		sumPaytable += 75;
		slotT.style.visibility = 'visible';
	}
	if ((SScenter1 == "a4" || SScenter2 == "a4" || SScenter3 == "a4") && (SScenter1 == "a5" || SScenter2 == "a5" || SScenter3 == "a5")){
		console.log('Win 7 Cherry center: 75' );
		Centerinfo.innerHTML = 'CHERRY and 7 ';
		Centernumber.innerHTML = '75 ';
		sumPaytable += 75;
		slotC.style.visibility = 'visible';
	}
	if ((SSbottom1 == "a4" || SSbottom2 == "a4" || SSbottom3 == "a4") && (SSbottom1 == "a5" || SSbottom2 == "a5" || SSbottom3 == "a5")){
		console.log('Win 7 Cherry Bottom: 75' );
		Bottominfo.innerHTML = 'CHERRY and 7 ';
		Bottomnumber.innerHTML = '75 ';
		sumPaytable += 75;
		slotB.style.visibility = 'visible';
	}
  // combination of BAR symbols on top center bottom line
	if (SStop1 == "a2" || SStop2 == "a2" || SStop3 == "a2"){
		console.log('BAR symbol' );
		Topinfo.innerHTML += ' BAR ';
		Topnumber.innerHTML += ' 5';
		sumPaytable += 5;
		slotT.style.visibility = 'visible';
	}
	if (SScenter1 == "a2" || SScenter2 == "a2" || SScenter3 == "a2") {
		console.log('Win BAR center: 5' );
		Centerinfo.innerHTML += ' BAR ';
		Centernumber.innerHTML += ' 5';
		sumPaytable += 5;
		slotC.style.visibility = 'visible';
	}
	if (SSbottom1 == "a2" || SSbottom2 == "a2" || SSbottom3 == "a2"){
		console.log('Win BAR Bottom: 5' );
		Bottominfo.innerHTML += ' BAR ';
		Bottomnumber.innerHTML += ' 5';
		sumPaytable += 5;
		slotB.style.visibility = 'visible';
	}
	// if (((slot1 == slot2 && slot2 == slot3) ||
	// 	(slot1 == slot2 && slot3 == "a5") ||
	// 	(slot1 == slot3 && slot2 == "a5") ||
	// 	(slot2 == slot3 && slot1 == "a5") ||
	// 	(slot1 == slot2 && slot1 == "a5") ||
	// 	(slot1 == slot3 && slot1 == "a5") ||
	// 	(slot2 == slot3 && slot2 == "a5") ) && !(slot1 == slot2 && slot2 == slot3 && slot1=="a5"))
	console.log ('check sum value:',sumPaytable);
	if (sumPaytable > 0 )	
	{
		status.innerHTML = "YOU WIN!";
		wintext.innerHTML = "Winning Sum : " + sumPaytable;
		elemalarm.style.visibility = 'visible';
		win.play();
	}else{
		status.innerHTML = "YOU LOSE!";
		lose.play();
	}
	Sumnumber.innerHTML = sumPaytable;
	document.getElementById("Gira").innerHTML="SPIN!";
	//doing = false;
}

function toggleAudio(){
	if (!audio){
		audio = !audio;
		for (var x of spin){
			x.volume = 0.5;
		}
		for (var x of coin){
			x.volume = 0.5;
		}
		win.volume = 1.0;
		lose.volume = 1.0;
	}else{
		audio = !audio;
		for (var x of spin){
			x.volume = 0;
		}
		for (var x of coin){
			x.volume = 0;
		}
		win.volume = 0;
		lose.volume = 0;
	}
	document.getElementById("audio").src = "res/icons/audio"+(audio?"On":"Off")+".png";
}
function toggleMode(){
  //  Fixed Mode
	if (!mode){
		mode = !mode;
		status.innerHTML = "WELCOME Derivco Slot! Fixed Mode";
		var x = document.getElementById("contentlist");
		for (var i = 0; i < x.options.length; i++) {
			document.getElementById("slotT1").className = x.options[0].value;
			document.getElementById("slotT2").className = x.options[0].value;
			document.getElementById("slotT3").className = x.options[0].value;
			document.getElementById("slot1").className = x.options[1].value;
			document.getElementById("slot2").className = x.options[1].value;
			document.getElementById("slot3").className = x.options[1].value;
			document.getElementById("slotB1").className = x.options[2].value;
			document.getElementById("slotB2").className = x.options[2].value;
			document.getElementById("slotB3").className = x.options[2].value;
		}
	}else{ //Random Mode
		mode = !mode;
		status.innerHTML = "WELCOME Derivco Slot! Random Mode";
		document.getElementById("slotT1").className = "a1";
		document.getElementById("slotT2").className = "a1";
		document.getElementById("slotT3").className = "a1";
		document.getElementById("slot1").className = "a2";
		document.getElementById("slot2").className = "a2";
		document.getElementById("slot3").className = "a2";
		document.getElementById("slotB1").className = "a3";
		document.getElementById("slotB2").className = "a3";
		document.getElementById("slotB3").className = "a3";
	}
}
function moveUp() {
	var ddl = document.getElementById('contentlist');
	//var size = ddl.length;
	//var index = ddl.selectedIndex;
	var selectedItems = new Array();
	var temp = { innerHTML: null, value: null };
	for (var i = 0; i < ddl.length; i++)
		if (ddl.options[i].selected)
			selectedItems.push(i);

	if (selectedItems.length > 0)
		if (selectedItems[0] != 0)
			for (var i = 0; i < selectedItems.length; i++) {
				temp.innerHTML = ddl.options[selectedItems[i]].innerHTML;
				temp.value = ddl.options[selectedItems[i]].value;
				ddl.options[selectedItems[i]].innerHTML = ddl.options[selectedItems[i] - 1].innerHTML;
				ddl.options[selectedItems[i]].value = ddl.options[selectedItems[i] - 1].value;
				ddl.options[selectedItems[i] - 1].innerHTML = temp.innerHTML;
				ddl.options[selectedItems[i] - 1].value = temp.value;
				ddl.options[selectedItems[i] - 1].selected = true;
				ddl.options[selectedItems[i]].selected = false;
			}
}

function moveDown() {
	var ddl = document.getElementById('contentlist');
	//var size = ddl.length;
	//var index = ddl.selectedIndex;
	var selectedItems = new Array();
	var temp = { innerHTML: null, value: null };
	for (var i = 0; i < ddl.length; i++)
		if (ddl.options[i].selected)
			selectedItems.push(i);

	if (selectedItems.length > 0)
		if (selectedItems[selectedItems.length - 1] != ddl.length - 1)
			for (var i = selectedItems.length - 1; i >= 0; i--) {
				temp.innerHTML = ddl.options[selectedItems[i]].innerHTML;
				temp.value = ddl.options[selectedItems[i]].value;
				ddl.options[selectedItems[i]].innerHTML = ddl.options[selectedItems[i] + 1].innerHTML;
				ddl.options[selectedItems[i]].value = ddl.options[selectedItems[i] + 1].value;
				ddl.options[selectedItems[i] + 1].innerHTML = temp.innerHTML;
				ddl.options[selectedItems[i] + 1].value = temp.value;
				ddl.options[selectedItems[i] + 1].selected = true;
				ddl.options[selectedItems[i]].selected = false;
			}
}
function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}