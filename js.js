peca={};
pecas=[{}];
jogador1=[];
bot1=[];
bot2=[];
bot3=[];
pecas.shift();
let pobj=[];
var v11=6,v22=6,s=0;

function obj(){
var r1=0 ,r2=0,pr=0;
while(10){
   var va1=String(r1),
    va2=String(r2);
    peca={
        pec:'pec/'+va1+va2+'.png',
        val1:r1,
        val2:r2,
        soma:r1+r2,
        psi:0
    }
    pecas.push(peca);
    r2++;
    if(r2==7){
        pr+=1;
        r2=pr;
        r1=pr;
        
    }
    if((va1+va2)==='66'){
        copy();
        break;
    }

}
}
function copy (){

    var ori=document.querySelector(".pec");
    ori.remove();
    var locopy;
    var nco=0;
    for(var i=0; i<28;){
      var n=Math.floor(Math.random() * 28);
      var rep=0;
        for(var r=0; r<pobj.length; r++){
          if(n==pobj[r]){
            rep=1;
          }
        }
        if(rep==0){
          pobj[i]=n;
          i++;
        }
    }
    while (nco<28){ 
      if(nco<7){
        
        locopy=document.querySelector(".jogador1");
        pecas[pobj[nco]].psi=nco;
        jogador1.push(pecas[pobj[nco]]);
      }
      if(nco>6 && nco<=13){

      locopy=document.querySelector(".bot1");
      pecas[pobj[nco]].psi=nco;
      bot1.push(pecas[pobj[nco]]);

       
      }
      if(nco>13 && nco<=20){
        locopy=document.querySelector(".bot2");
        pecas[pobj[nco]].psi=nco;  
        bot2.push(pecas[pobj[nco]]);
        
          }
          if(nco>20){
            locopy=document.querySelector(".bot3");
            pecas[pobj[nco]].psi=nco;
            bot3.push(pecas[pobj[nco]]);
              }
      var copy=ori.cloneNode(true);
        
      locopy.appendChild(copy);
      
      document.querySelectorAll(".pec")[nco].style.backgroundImage= "url('"+pecas[pobj[nco]].pec+"')";
    
      nco++;
    }
    jog12();
 }

function jog12(){
  var al=document.querySelector(".cademe");
  var i;
  for(i=0; i<7; i++){
   if(jogador1[i].soma==12){
     al.innerHTML="Voce Começa";
     al.style.display="block";
     s=1;
     break;
   }
   if(bot1[i].soma==12){
    al.innerHTML="jogador dois Começa";
    al.style.display="block";
    s=2;
    break;
  }
  if(bot2[i].soma==12){
    al.innerHTML="jogador tres Começa";
    al.style.display="block";
    s=3;
    break;
  }
  if(bot3[i].soma==12){
    al.innerHTML="jogador quatro Começa";
    al.style.display="block";
    s=4;
    break;
  }

  }
  setTimeout(function (){
    al.style.display="none";
    jog();
  
    
  },3500);
  
}
function jog(){
  console.log(s);
  var al=document.querySelector(".cademe");
  if(ganho()!=0){
    switch(ganho()){
      case 1:
          al.innerHTML="Voce ganhou";
          al.style.display="block";
      break;
      case 2:
          al.innerHTML="Jogador 2 ganhou";
          al.style.display="block";
      break;
      case 3:
          al.innerHTML="Jogador 3 ganhou";
          al.style.display="block";
      break;
      case 4:
          al.innerHTML="Jogador 4 ganhou";
          al.style.display="block";
      break;
    }
  }
  switch(s){
    case 1:
    joga1();
    break;
    case 2:
    botjog1();
    break;
    case 3:
      botjog2();
    break;
    case 4:
      botjog3();
    break;

    }
  
}
function botjog1(){ 
var el = document.querySelectorAll(".bot1 .pec");
var al=document.querySelector(".cademe");
if(bot1.length!=0){
  for(var i=0; i<=bot1.length; i++){
    if(i==bot1.length){
      s=3;
      al.innerHTML="vez do jogador 3";
      al.style.display="block";
      setTimeout(()=>{al.style.display="none"},2000);
      jog();
      break;
    }
    if(v11==bot1[i].val1){
      v11=bot1[i].val2;
    console.log(bot1[i]);
    console.log(v11,v22);
      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},1000);
      break;
    }
    if(v11==bot1[i].val2){
      v11=bot1[i].val1;
    console.log(bot1[i]);
    console.log(v11,v22);
      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},1000);
      break;
    }   
     if(v22==bot1[i].val2){
      v22=bot1[i].val1;
    console.log(bot1[i]);
    console.log(v11,v22);
      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},1000);
      break;
    }
    if(v22==bot1[i].val1){
      v22=bot1[i].val2;
    console.log(bot1[i]);
    console.log(v11,v22);
      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},1000);
      break;
    }
  }
}else{jog();}
}
function botjog2(){
var el = document.querySelectorAll(".bot2 .pec");
var al=document.querySelector(".cademe");
if(bot2.length!=0){
  for(var i=0; i<=bot2.length; i++){
    if(i==bot2.length){
      s=4;
      al.innerHTML="vez do jogador 4";
      al.style.display="block";
      setTimeout(()=>{al.style.display="none"},2000);
      jog();
      break;
    }
    if(v11==bot2[i].val1){
      v11=bot2[i].val2;
    console.log(bot2[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},1000);
      break;
    }
    if(v11==bot2[i].val2){
      v11=bot2[i].val1;
    console.log(bot2[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},1000);
      break;
    }   
     if(v22==bot2[i].val2){
      v22=bot2[i].val1;
    console.log(bot2[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},1000);
      break;
    }
    if(v22==bot2[i].val1){
      v22=bot2[i].val2;
    console.log(bot2[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},1000);
      break;
    }
  }
}else{jog();} 
}
function botjog3(){
var el = document.querySelectorAll(".bot3 .pec");
var al=document.querySelector(".cademe");
if(bot3.length!=0){
  for(var i=0; i<=bot3.length; i++){
    if(i==bot3.length){
      s=1;
      al.innerHTML="sua vez";
      al.style.display="block";
      setTimeout(()=>{al.style.display="none"},2000);
      jog();
      break;
    }
    if(v11==bot3[i].val1){
      v11=bot3[i].val2;
      console.log(bot3[i]);    
  console.log(v11,v22); 
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},1000);
      break;
    }
    if(v11==bot3[i].val2){
      v11=bot3[i].val1;
    console.log(bot3[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},1000);
      break;
    }   
     if(v22==bot3[i].val2){
      v22=bot3[i].val1;
      console.log(bot3[i]);    
  console.log(v11,v22); 
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},1000);
      break;
    }
    if(v22==bot3[i].val1){
      v22=bot3[i].val2;
    console.log(bot3[i]);
  console.log(v11,v22); 
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},1000);
      break;
    }
  }
}else{jog();}
}
function joga1(){

var el = document.querySelectorAll(".jogador1 .pec");
var al=document.querySelector(".cademe");
document.querySelector("button").style.display="block";


document.querySelector("button").addEventListener("click",()=>{
 
  al.innerHTML="voce passou a jogada";
  al.style.display="block";
  setTimeout(()=>{al.style.display="none"},3000);
  botjog1();
  document.querySelector("button").style.display="none";
});
  for(var i=0; i<jogador1.length; i++){
  el[i].addEventListener("click",function(){
    this.style.border="0.5px solid black";
    joga11();
  })  
  }
}
function remo(o){
var el = document.querySelectorAll(".jogador1 .pec");

  jogador1.splice(o,1);
  el[o].remove();
  console.log(v11,v22);
  s=1;
  jog();
}
function joga11(){
var el = document.querySelectorAll(".jogador1 .pec");
var al=document.querySelector(".cademe");

for(var i=0; i<el.length; i++){
    if(el[i].style.border=="0.5px solid black"){
       
    //jogador1[(i+1)>jogador1.length-1 ? i :i+1].psi=jogador1[i].psi;
    if(v11==jogador1[i].val1 || v22==jogador1[i].val2 ||v11==jogador1[i].val2 || v22==jogador1[i].val1 ){
    if(v11==jogador1[i].val1){
      v11=jogador1[i].val2;
    console.log(1);
    console.log(jogador1[i]);
    remo(i);
    break;
      
    }if(v11==jogador1[i].val2){
      v11=jogador1[i].val1;
    console.log(2);
    console.log(jogador1[i]);
    remo(i);
      break;
    }if(v22==jogador1[i].val1){
      v22=jogador1[i].val2;
    console.log(3);
    console.log(jogador1[i]);
    remo(i);
      break;

    }if(v22==jogador1[i].val2){
      v22=jogador1[i].val1;
    console.log(4);
    console.log(jogador1[i]);
    remo(i);
      break;

    }
    }else{
      al.innerHTML="peça invalida";
      al.style.display="block";
      el[i].style.border="0px"
      setTimeout(()=>{al.style.display="none"},3000);
      break;
    }
  }

}
}
function ganho(){
  if(jogador1.length==0){
  s=0;
  return 1;
  }
  if(bot1.length==0){
  s=0;
  return 2;
}
  if(bot2.length==0){
  s=0;
  return 3;
  }
  if(bot3.length==0){
  s=0;
  return 4;
  }

  return 0;
}
function load() {
    obj();
    /*var el = document.querySelectorAll(".pec");
    for(var i=0; i<=6; i++){
    el[i].addEventListener("click",function (){
      this.style.display="none";
    });

  }*/

  }
  
  
  document.addEventListener("DOMContentLoaded", load)