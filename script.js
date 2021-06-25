
function Dis_play1(){
in_p_1=document.getElementById(id="in_1").value;
document.getElementById("p1").innerHTML="Player 1 name- "+in_p_1;
localStorage.setItem("player1", in_p_1);
}

function Dis_play2(){
    in_p_2=document.getElementById(id="in_2").value;
    document.getElementById("p2").innerHTML="Player 2 name- "+in_p_2;
    localStorage.setItem("player2", in_p_2);
}

function next_page(){
    window.location="main.html";
}