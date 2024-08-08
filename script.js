let btn=document.querySelector("button");
console.log(btn);

let body=document.querySelector("body");
console.log(body);

let mode=0;
btn.addEventListener("click",function(){
    if(mode==0){
    body.style.backgroundColor="black";
    mode=1;
    }
    else{
        body.style.backgroundColor="white";
        mode=0;
    }
})