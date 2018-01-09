

var items = ['rock', 'paper', 'scissors'];
var item = items[Math.floor(Math.random()*items.length)];

function doorPrize(event){
	var rps = event.target.id;
	console.log(rps);
	if(rps == 'rock'){
		if(confirm("Are you sure?") == true){
			document.getElementById('youchoseimg').innerHTML = '<img src="media/rock.png" height="200px" width="150px ">';
			document.getElementById('ichoseimg').innerHTML = '<img src="media/'+item+'.png" height="200px" width="150px ">';
			results(rps, item);
		}else{
			document.getElementById('youmustchoose').innerHTML = '<h1>YOU MUST CHOOSE!</h1>';
			 return false;
		 };
	}else if(rps == 'paper'){
			if(confirm("Are you sure?") == true){
				document.getElementById('youchoseimg').innerHTML = '<img src="media/paper.png" height="200px" width="150px ">';
				document.getElementById('ichoseimg').innerHTML = '<img src="media/'+item+'.png" height="200px" width="150px ">';
				results(rps, item);
			}else{
				document.getElementById('youmustchoose').innerHTML = '<h1>YOU MUST CHOOSE!</h1>';
				 return false;
			 };
	}else if(rps == 'scissors'){
		if(confirm("Are you sure?") == true){
			document.getElementById('youchoseimg').innerHTML = '<img src="media/scissors.png" height="200px" width="150px ">';
			document.getElementById('ichoseimg').innerHTML = '<img src="media/'+item+'.png" height="200px" width="150px ">';
			results(rps, item);
		}else{
			document.getElementById('youmustchoose').innerHTML = '<h1>YOU MUST CHOOSE!</h1>';
			 return false;
		 };
	}else if(rps == 'null'){
		document.getElementById('ichoseimg').innerHTML = '';
		document.getElementById('ichoseimg').innerHTML = '';
	}else{
		alert("Try again!");
	}
}


function results(rps, item){
	//a tie
if(rps == item){
document.getElementById('youmustchoose').innerHTML = '<h1>It\'s a tie!!!</h1><br><img src="media/tie.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'rock' && item == 'paper'){
	document.getElementById('youmustchoose').innerHTML = '<h1 class="red">YOU LOSE!</h1><br><img src="media/rlose.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'rock' && item == 'scissors'){
	document.getElementById('youmustchoose').innerHTML = '<h1 class="green">YOU WIN!</h1><br><img src="media/rwin.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'paper' && item == 'rock'){
	document.getElementById('youmustchoose').innerHTML = '<h1 class="green">YOU WIN!</h1><br><img src="media/pwin.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'paper' && item == 'scissors'){
	document.getElementById('youmustchoose').innerHTML = '<h1 class="red">YOU LOSE!</h1><br><img src="media/plose.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'scissors' && item == 'rock'){
		document.getElementById('youmustchoose').innerHTML = '<h1 class="red">YOU LOSE!</h1><br><img src="media/slose.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';
}else if(rps == 'scissors' && item == 'paper'){
		document.getElementById('youmustchoose').innerHTML = '<h1 class="green">YOU WIN!</h1><br><img src="media/swin.gif" height="300px" width="300px" alt=""><br><br><button type="button" class="btn btn-secondary value="Reload Page" onClick="document.location.reload(true)">Play again!</button>';}


}
