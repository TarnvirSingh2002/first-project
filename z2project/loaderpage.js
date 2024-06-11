let lo=document.querySelector(".custom-loader");
let h=document.querySelector('h1');
let hh=document.querySelector('p');
lo.style.display="block";
const url="https://cat-fact.herokuapp.com/facts";
async function n(){   
    r=await fetch(url);
    n=await r.json();
    h.innerText=n[0].type;
    hh.innerText=n[0].text;
    lo.style.display="none";
}
n();
