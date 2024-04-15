let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#restart");
let newgame = document.querySelector("#new-game");
let msg = document.querySelector("#turn");
let container = document.querySelector(".container");
let winmsg = document.querySelector("#winmsg");
let msgnew = document.querySelector(".msgnew");

let turn0 = true;
let count =0;

let match = [
  [0, 1, 2],
  [1, 4, 7],
  [2, 4, 6],
  [3, 4, 5],
  [0, 3, 6],
  [2, 5, 8],
  [0, 4, 8],
  [6, 7, 8],
];



const boxdisable=()=>
{
    for (let i = 0; i < 9; i++)
    {
        boxes[i].disabled=true;
    }
};
const boxenable=()=>
{
    for (let i = 0; i < 9; i++)
    {
        boxes[i].disabled=false;
        boxes[i].innerText = "";
    }
};
const restart=()=>
{
      turn0 = true;
      boxenable();
      wincheck();
}
const newreplay=()=>
{
      turn0 = true;
      boxenable();
    //   wincheck();
      container.classList.remove("disabled");
      winmsg.classList.add("disabled");
      newgame.classList.add("disabled");
      winmsg.classList.remove("winmsg");
      newgame.classList.remove("new-game");
      msg.innerText = "O's Turn";
};
const drawgame=()=>
{
    msg.innerText = "Opps! It's a Draw!";
    boxenable();
    turn0=true;
}

rebtn.addEventListener("click",restart);
newgame.addEventListener("click",newreplay);

for (let box = 0; box < 9; box++) {
    boxes[box].addEventListener("click", () => {
        
        if (turn0 === true) {
            boxes[box].innerText = "O";
      turn0 = false;
      msg.innerText = "X's Turn";
    } else {
        boxes[box].innerText = "X";
        turn0 = true;
        //boxes[box].disabled = true;
        msg.innerText = "O's Turn";
        
    }
    count++;
    boxes[box].disabled = true;
    
    wincheck();
    boxdisable();

    let iswinner=wincheck();
     if(count===9 && !iswinner)
     {
        drawgame();
     }
  });
};

let wincheck = () => {
  for (let i = 0; i < 9; i++) {
    let val = match[i].toString();
    let val1 = boxes[val[0]].innerText;
    let val2 = boxes[val[2]].innerText;
    let val3 = boxes[val[4]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log(`winner is ${val1}`);
        container.classList.add("disabled");
        winmsg.classList.remove("disabled");
        newgame.classList.remove("disabled");
        msgnew.classList.add("msgnew");
        winmsg.classList.add("winmsg");
        newgame.classList.add("new-game");
        winmsg.innerText = `Congratulations "${val1}" Wins!`;
      }
    }
  }
//   return val1;
};






