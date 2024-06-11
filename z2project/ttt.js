  let topbar=document.querySelector(".topbar");
  let container=document.querySelector(".container");
  let nxtpage=document.querySelector(".nxtpage");
  let message=document.querySelector(".message");
  let newgame=document.querySelector(".newgame");
  let reset=document.querySelector(".bigger_text");
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  let turnO=true;
  let count=0;
  const boxes=document.querySelectorAll(".box");
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disableBoxes=true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) {
          nxtpage.style.display="block";
          topbar.classList.add("blank");
          container.classList.add("blank1");
          reset.classList.add("blank1");
          message.innerText=`Match is draw`;
        }
    });
  });
  const disableBoxes=()=>{
    for(let box of boxes){
      box.disabled = true;
    }
  };
  let checkWinner=()=>{
    for(let patt of winPatterns){
      let pos1Val = boxes[patt[0]].innerText;
      let pos2Val = boxes[patt[1]].innerText;
      let pos3Val = boxes[patt[2]].innerText;
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  }
    reset.addEventListener("click",()=>{
    turnO=true;
    count=0;
    enableBoxes();
    reset.innerText="Reset";
  });
  const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false; 
      box.innerText = "";
    }
  };
  nxtpage.style.display="none";
  let showWinner=(winner)=>{
    nxtpage.style.display="block";
    topbar.classList.add("blank");
    container.classList.add("blank1");
    reset.classList.add("blank1");
    message.innerText=`Winner is ${winner}`;
  }
newgame.addEventListener("click",()=>{
  turnO=true;
  count=0;
  enableBoxes();
  reset.innerText="Reset";
  nxtpage.style.display="none";
  topbar.classList.remove("blank");
  reset.classList.remove("blank1");
  container.classList.remove("blank1");
});
  
  