player1=localStorage.getItem("player1");
player2=localStorage.getItem("player2");

player1_score=0;
player2_score=0;


document.getElementById("player1_name").innerHTML=player1;
document.getElementById("player2_name").innerHTML=player2;
document.getElementById("player_q").innerHTML=player1;
document.getElementById("player_a").innerHTML=player2;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;


function send(){
    num1=document.getElementById("1i").value;
    num2=document.getElementById("2i").value;
    final_ans= parseInt(num1)*parseInt(num2);
    console.log(final_ans);

    question="<h4>"+num1+" X "+num2+"-";
    input="<br> Answer- <input type='text' id='input_check'>"
    button="<br><br> <button class='btn btn-info' onclick='check()'> Check</button>"
    row=question+input+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("p1s").value="";
    document.getElementById("2i").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){

    player_answer=document.getElementById("input_check").value;
    console.log(player_answer);
    
    if(final_ans==player_answer){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            //mam this part is showing error
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if(question_turn=="player1"){
        question_turn=="player2";
        document.getElementById("player_q").innerHTML=player2;
    }
    else{
        question_turn=="player1";
        document.getElementById("player_q").innerHTML=player1;
    }

    if(answer_turn=="player1"){
        answer_turn=="player2";
        document.getElementById("player_a").innerHTML=player2;
    }
    else{
        answer_turn=="player1";
        document.getElementById("player_a").innerHTML=player1;
    }

    document.getElementById("output").innerHTML="";
    document.getElementById("input_check").value="";
}
