const baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/inr.json";
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
for (let na of dropdown){
    for(let r in name){
        let newop=document.createElement("option");
        newop.innerText=r;
        newop.value=r;
        if(na.name==="from"&& r==="USD"){
            newop.selected="selected";
        }
        else if(na.name==="to"&& r==="INR"){
            newop.selected="selected";
        }
        na.append(newop);
    }
    na.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    });   
}
const updateflag=(element)=>{
    let currcode=element.value;
    let n= name[currcode];
    let newimg=`https://flagsapi.com/${n}/flat/64.png`;
    let photo=element.parentElement.querySelector("img");
    photo.src= newimg;
};
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let inp=document.querySelector("input");
    let val=inp.value;
    if(val===""||val<1){
        val=1;
        inp.value=1;
    }
    console.log(fromcurr.value.toLowerCase());
    console.log(tocurr.value.toLowerCase());
});
