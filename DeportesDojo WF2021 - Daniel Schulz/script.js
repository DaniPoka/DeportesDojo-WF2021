function IncreaseScore1(element){
    element = document.querySelector("#team1score").innerHTML;
    parseInt(element);
    element++;
    document.querySelector("#team1score").innerHTML = element;
};

function IncreaseScore2(element){
    element = document.querySelector("#team2score").innerHTML;
    parseInt(element);
    element++;
    document.querySelector("#team2score").innerHTML = element;
};


setTimeout( 
    function () 
    {
        var team1 = document.querySelector("#team1").innerHTML;
        var team2 = document.querySelector("#team2").innerHTML;
        var scoret1 = document.querySelector("#team1score").innerHTML;
        var scoret2 = document.querySelector("#team2score").innerHTML;
if(scoret1>scoret2){
    alert( "GAME ENDED! "+team1+" have won" );
} else if (scoret2>scoret1) {
    alert( "GAME ENDED! "+team2+" have won" );
} else if (scoret1 == scoret2) {
alert( "GAME ENDED! IT WAS A DRAW" );
} 
}, 13000);


function hidesubbar() {
    var element = document.querySelector('#side-bar3');
    element.remove();
};