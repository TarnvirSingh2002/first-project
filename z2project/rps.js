let users_score=0;
let computers_score=0;
let t=document.querySelectorAll(".same");
let tu=document.querySelector("#tu");
let ma=document.querySelector("#ma");
let txt=document.querySelector("#txt");


const computer_choice=()=>{
    let a=["rock1","paper1","scissors1"];
    const k=Math.floor(Math.random()*3);
    let u=(a[k]);
    return (u);
}
t.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const user=choice.getAttribute("id");
        compete(user);
    });
});

const compete=(user)=>{
    let y=computer_choice();
    console.log(y);
    console.log(user);
    if(user==y){
       txt.innerText=("draw");
    }
    else if(user=="rock1" && y=="paper1"){
        txt.innerText=("computer win");
        computers_score++;
        ma.innerText=computers_score;
    }
    else if(user=="scissors1" && y=="rock1"){
        txt.innerText=("computer win");
        computers_score++;
        ma.innerText=computers_score;
    }
    else if(user=="paper1" && y=="scissors1"){
        txt.innerText=("computer win");
        computers_score++;
        ma.innerText=computers_score;
    }
    else if(user=="paper1" && y=="rock1"){
        txt.innerText=("you win");
        users_score++;
        tu.innerText=users_score;
    }
    else if(user=="rock1" && y=="scissors1"){
        txt.innerText=("you win");
        users_score++;
        tu.innerText=users_score;
    }
    else  //if(user=="scissors1" && computer_choice()=="paper1")
    {
        txt.innerText=("you win");
        users_score++;
        tu.innerText=users_score;
    }
}