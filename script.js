const words=[
"IT Support",
"Network Engineer",
"Helpdesk",
"Freelancer"
]

let i=0;
let j=0;
let current="";

function type(){

if(j<words[i].length){

current+=words[i][j];
document.querySelector(".typing").innerHTML=current;

j++;

setTimeout(type,100);

}else{

setTimeout(()=>{
current="";
j=0;
i=(i+1)%words.length;
type();
},1500)

}

}

type();
