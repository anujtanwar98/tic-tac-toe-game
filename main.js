console.log ("Welcome to Tic Tac Toe")

let turn = "X"
let gameover = false;
// funtion to change turn 
const changeTurn = ()=> {
    return turn === "X"?"O": "X"
}
// function to check winner
const checkWin = ()=> {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, -45],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.sub-sub-info').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true;
            document.querySelector('.thank-you-image').getElementsByTagName('img')[0].style.width= "300px"
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}
// game js 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("sub-sub-info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// for reset game 

resetbutton.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameover = false
    document.getElementsByClassName("sub-sub-info")[0].innerText = "Turn for " + turn;
    document.querySelector('.thank-you-image').getElementsByTagName('img')[0].style.width= "0"
    document.querySelector(".line").style.width = "0vw";
})