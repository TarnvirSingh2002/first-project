// let box=document.querySelectorAll(".no");
// box.forEach((n)=>{
//     let r=n.innerText;
//     console.log(r);
// })
// let box1=document.querySelector(".no").children;
// console.log(box1);
// // let first=document.querySelector("#big");
// let box2=document.querySelector("#big");
// box2.setAttribute("class","binjo");

// let arr=[3,4,5,1];
// let r=arr.reduce((pre,neww)=>{
//     return pre+=neww;
    
// });
// console.log(r);
// let e=document.createElement("button");
// e.innerText="bingo";
// e.setAttribute("id","but");
// box2.after(e);
// e.remove();

// let box3=document.querySelector(".no").childNodes;
// console.log(box3);


// let rr=document.querySelector("#small");
// rr.classList.add("bc");
// rr.classList.add("b");
// rr.classList.add("bb");
// rr.classList.remove("b");

// let big=document.querySelector("#big");
// big.addEventListener("mouseover",()=>{
//     big.style.curser="pointer";
// });

// const oi={
//     o:"name",
//     l:"pink",
//     ji(){
//         console.log("oa");
//     }
// };
// const moya={
//     lp:"snow",
//     mk(){
//         "panchi"
//     }
// };
// moya.__proto__=oi;
// console.log(moya.o);
// console.log(moya.l);


// let c=90;
// console.log("hello");
// console.log("hello");
// try{
//     console.log(p+c);
// }
// catch(err){
//     console.log(err);
// }
// console.log("hello");
// console.log("hello");

// let a=()=>{
//     console.log("lolo");
// }
// setTimeout(a,4000);
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");

// let a=(k,l)=>{
//     setTimeout(()=>{
//         console.log(k);
//         if(l){
//             a();
//         }},2000
//     );
// }
// a(3,()=>{
//     a(9,()=>{
//         a(0,()=>{
//             a(8,()=>{
//               a(0);
//             });
//         });
//     });
// });

// let sec=()=>{
//     return new Promise((resolve, reject)=>{
//         console.log("wait...");
//         setTimeout(()=>{
//             resolve(200);
//         },3000);
//     });
// };
// sec(1).then((re)=>{
//     console.log(re);
//     return sec(2);
// }).then((re)=>{
//     console.log(re);
//     return sec(3);
// }).then((re)=>{
//     console.log(re);
// });
// (async function(){
//     await sec(1);
//     await sec(11);
//     await sec(13);
// })();














let parent=document.querySelector(".no");
let neww=document.createElement("div");
parent.append(neww);
let url="https://www.weatherapi.com/api-explorer.aspx";

// (async function(){
//     let r=await fetch(url);
//     let data=await r.json();
//     neww.innerText=(data[1].text);

// })();

fetch(url).then((r)=>{
    r.json().then((data)=>{
        console.log(data);
    });
});
