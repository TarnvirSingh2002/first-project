const baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const mg=document.querySelector(".mg");
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
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let inp=document.querySelector("input");
    let val=inp.value;
    if(val===""||val<1){
        val=1;
        inp.value=1;
    }
    const baseURL=`${baseurl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
    let data=await fetch(baseURL);
    let modidata= await data.json();
    let rate=modidata[tocurr.value.toLowerCase()];
    let final=val*rate;
    mg.innerText=`${val}${fromcurr.value}=${final}${tocurr.value}`;
});
