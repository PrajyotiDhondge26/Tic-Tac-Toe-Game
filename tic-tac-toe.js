let boxes= document.querySelectorAll(".box")
let reset= document.querySelector("#rst-btn")
let nGame= document.querySelector("#btn3")
let message= document.querySelector(".msg")
let msg =document.querySelector(".msg-p")

let turnO = true;
let count =0;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const newGame= ()=>{
    turnO=true;
    count =0;
    enableBoxes();
    message.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO){
        box.innerText= "O";
        box.style.color="red";
        box.style.backgroundColor="white";
        turnO=false;
       }
       else{
        box.innerText= "X";
        box.style.color="white"
        box.style.backgroundColor="red";
        turnO=true;
       }
       box.disabled= true;
       count++;
       let isWinner= checkWinner();
       if(count==9 && !isWinner){
        gameDraw();
       }
    })
    // var count= for(let i =0)
})
const gameDraw =()=>{
    msg.innerText =`Game is a draw.`;
    message.classList.remove("hide");
    disableBoxes();
    
}
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText= "";
        box.style.backgroundColor="#ffffc7";
    }
}
const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const showWinnner= (winner)=>{
    msg.innerText=`Congratulations, winner is ${winner}`;
    message.classList.remove("hide")
    disableBoxes();
}
const checkWinner =()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        console.log(pos1);
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner", pos1);
                showWinnner(pos1);
            }
        }
    }

   }
 
   nGame.addEventListener("click",newGame);
   reset.addEventListener("click",newGame);
