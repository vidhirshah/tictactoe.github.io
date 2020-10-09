// player presentation
// X,O,undefined

var active_player = "X";

var game_state = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];


// Game states 
// X-X
// O-O
// undefined-undefined

var win_positions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

$("#gamestatus").text(active_player + "\'s Turn");
$(".cell").click(function () 
{
    index = $(".cell").index(this);
    if(game_state[index]==undefined)
    {
        game_state[index]=active_player;
        document.getElementsByTagName("p")[index].innerHTML=game_state[index];
        if(active_player=="X")
        {
            active_player="O";
            $("#gamestatus").text(active_player + "\'s Turn");
        }
        else
        {
            active_player="X";
            $("#gamestatus").text(active_player + "\'s Turn");
        }
    }
}
);

function a(){
    var i,a,b,c;
    var win=false;
    for(i=0;i<8;i++)
    {
        var cond = win_positions[i];
        a=game_state[cond[0]];
        b=game_state[cond[1]];
        c=game_state[cond[2]];
        if(a==b && b==c && c==a)
        {
            win=true;
            break;
        }
        if(a === undefined || b === undefined || c === undefined)
        {            
            $("#gamestatus").html(active_player+ "\;\'s Turn<br>Continue It");
            continue;
        }
    }
    if(win==true)
    {
        $("#gamestatus").text(a+ " Has Won");
    }
    else if(win==false)
    {
        $("#gamestatus").text("Game is Draw");
    }
}