var tableau = new Array(9).fill(0);
var i = 0;
var x = 0;
var o = 0;

function order() {
	if (Math.random() < 0.5) {
		window.joueur = 1;
		next = -1;
		document.getElementById("tour").innerHTML = "X";
	}
	else {
		window.joueur = -1;
		next = 1;
		document.getElementById("tour").innerHTML = "O";
	}

	if (joueur == 1) {
		alert("X commence");
	}
	else {
		alert("O commence");
	}
}
window.onload=order;

function win() {
	if (tableau[0] + tableau[1] + tableau[2] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[0] + tableau[1] + tableau[2] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[3] + tableau[4] + tableau[5] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[3] + tableau[4] + tableau[5] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[6] + tableau[7] + tableau[8] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[6] + tableau[7] + tableau[8] == -3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[0] + tableau[3] + tableau[6] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[0] + tableau[3] + tableau[6] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[1] + tableau[4] + tableau[7] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[1] + tableau[4] + tableau[7] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[2] + tableau[5] + tableau[8] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[2] + tableau[5] + tableau[8] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[0] + tableau[4] + tableau[8] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[0] + tableau[4] + tableau[8] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}

	if (tableau[2] + tableau[4] + tableau[6] == 3) {
		alert("X a gagné");
		joueur = 0;
		x++;
		document.getElementById('score_x').innerHTML = x;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
	if (tableau[2] + tableau[4] + tableau[6] == -3) {
		alert("O a gagné");
		joueur = 0;
		o++;
		document.getElementById('score_o').innerHTML = o;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
}


function draw() {
	if (i == 9 && joueur != 0) {
		alert("Egalité!");
		joueur = 0;
		document.getElementById("Rbutton").style.visibility = "visible";
	}
}

function cliquer(grid_id) {
	if (joueur != 0) {
		if (joueur == 1 && tableau[grid_id] == 0) {
			tableau[grid_id] = 1;
			joueur = -joueur;
			i++;
			document.getElementById("img" + grid_id).src = "cross.png";
			document.getElementById("tour").innerHTML = "O";
		}
		else if (joueur == -1 && tableau[grid_id] == 0){
			tableau[grid_id] = -1;
			joueur = -joueur;
			i++;
			document.getElementById("img" + grid_id).src = "round.png";
			document.getElementById("tour").innerHTML = "X";
		}
		else if (tableau[grid_id] != 0){
			alert("Vous ne pouvez pas jouez ici!");
		}
		win();
		draw();
	}	
}

function rejouer(){
	if (joueur == 0) {
		tableau = Array(9).fill(0);
		for (var h=0; h<9; h++) {
			document.getElementById("img" + h).src = "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=";
	    }
		i = 0;
		joueur = next;
		document.getElementById("Rbutton").style.visibility = "hidden";
		next = -next;
		if (joueur == 1) {
			document.getElementById("tour").innerHTML = "X";
			alert("X commence");
		}
		else {
			document.getElementById("tour").innerHTML = "O";
			alert("O commence");
		}	
	}
}