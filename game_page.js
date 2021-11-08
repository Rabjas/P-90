player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn- "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn- "+player2_name;

function send(){
number_1=document.getElementById("number_1").value;
number_2=document.getElementById("number_2").value;
answer=number_1*number_2
console.log("answer")



question_number="<h4> "+number_1+"x"+number_2+"</h4>";
input_box="<br>Answer: <input type='text' id='input_check_box'>";
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number_1").value="";
document.getElementById("number_2").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){
    get_answer=document.getElementById("input_check_box").value;
    
    

    if(answer==get_answer){
        if(answer_turn=="player_1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
            answer_turn="player_2";
            question_turn="player_1";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
            document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
            answer_turn="player_1";
            question_turn="player_2";
            document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
            document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;   
        }
    }
    document.getElementById("output").innerHTML="";
}  