/*const profile={
    fullname:"mahi",
    post:34,
    followers:56,
    following:89,

};
console.log(profile["post"]);
let a=5;
let b=7;
console.log(a+b);
let a=11;
if(a%2===0){
    console.log("it is even",a);
}
else{
    console.log("it is odd",a);
}
let age=25;
let result=age>18?"old":"young";
console.log(result);
let num=prompt("enter your number:");
console.log(num);
/*if(num%5===0){
    console.log("it is divisibe by 5:",num);
}
else{
    console.log("not divisible by 5:",num);
}
let n=(num%5===0?"divisibe":"not divisible");
console.log(n);
let num=prompt("enter your number:");
if(num>=90&&num<=100){
    console.log("grade A",num);
}
else{
    console.log("fail",num);
}
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
let gamenum=34;
let usernum=prompt("enter your nummber");
while(gamenum != usernum){
    usernum=prompt("wrong number guess again=");/*(string hoti h prompt se use kiya gya number)
}
console.log("game end");
let user=prompt("enter your name");
let res="@"+user;
console.log(res)

let marks=[45,89,90];
let sum=0;
for(let val of  marks){
     sum+=val;
}
 let avg=sum/marks.length;
 console.log(avg); 
 let items=[250,645,300,900,50];
 /*let i=0;
 for(item of items){
    console.log(`value of index ${i}=${item}`);
    let offer=item/10;
    items[i]=items[i]-offer;
    console.log(`items after offer=${items[i]}`);
    i++;

 }
 for(i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]-=offer;
 }
console.log(items);

const mul=(a,b)=>{
    console.log(a*b);
}
function countvowels(vowels) {
    let count = 0;
    for (const char of vowels) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
            count++;
        }


    }
    return count;
}
let nums=[1,5,4,3];
nums.forEach((num)=>{
    console.log(num*num);
})
//youtube questions
 let num=prompt("enter your number:");
if(num%5===0){
    console.log("your num is divisible by 5");
}
else{
    console.log("your number not divisible by 5");
}

let num=prompt("enter your number:");
if(num>=90&&num<=100){
    console.log("your grade is A");
}
else if(num>=80&&num<=90){
    console.log("your grade is B");
}
else {
    console.log("your grade is c");
}
console.log("your marks according to grade",num);

for(let i=0;i<=100;i++){
    if(i%2!==0){
        console.log("even",i)
    }
    else{
        
    }
}
let num="45"; 
let nums=prompt("enter your number");
while(num!==nums){
    user=prompt("enter again");

}
console.log("game end");
let username=prompt("Enter Your Name");
let fullname="@"+username+username.length;
console.log(fullname); 

let marks=[85,97,44,37,76,60];
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let avg=sum/marks.length;
console.log(avg);
 
let items=[250,645,300,900,50];
for(let item of items){
    offer=item/10;
    price=item-offer;
    console.log(`the real price is ${item}-${offer}=${price}`)
    
}

let comp=["bloomberg","microsoft","uber","google","IBM","netflix"];
let re=comp.push("Amazon");
console.log(re);
console.log(comp);

function myl(vowels){
    let count=0;
    for(let vowel of vowels){
        if(vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u"){
            
            count++;
        }
    }
    return count;
}

const letter=(vowels)=>{
    let count=0;
    for(let vowel of vowels){
        if(vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u"){
            
            count++;
        }
    }
    return count;

}
let arr=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val*val);
    

})

let arr=[87,90,9,97,67,96];
let newarr=arr.filter((val)=>{
    return val>90;
   
})
console.log(newarr);

let n=prompt("enter your number:");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;

}
console.log(arr);

let h2=document.querySelector("h2");
console.log(h2.innerText);
h2.innerText=h2.innerText+"  Apna college";

let divs=document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText="mahi";
divs[1].innerText="raj";
divs[2].innerText="12";

let ele=document.createElement("button");
ele.innerText="click me!";
ele.style.backgroundColor="red";
ele.style.color="white";
document.querySelector("body").prepend(ele);

let para=document.querySelector("p");
para.classList.add("newclass");*/

let btnmode=document.querySelector(".mode");
let mycurr="light";
btnmode.addEventListener("click",()=>{
  if(mycurr==="light"){
    mycurr="dark";
    document.querySelector("body").style.backgroundColor="black";
  }
  else{
    mycurr="light";
    document.querySelector("body").style.backgroundColor="white";
  }
  console.log(mycurr);
})







