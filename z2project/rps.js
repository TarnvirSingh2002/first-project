let users_score=0;
let computers_score=0;
let t=document.querySelectorAll(".choice");

const computer_choice=()=>{
    const a=["rock1","paper1","scissors1"];
    let k=Math.floor(Math.random()*3);
    return (a[k]);
}

t.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const user=choice.getAttribute("class");
            compete(user);
    })
})
const compete=(user)=>{
    console.log(user);
    console.log(computer_choice());
}