peca={};
pecas=[];
jogador1=[];
bot1=[];
bot2=[];
bot3=[];
let pobj=[];
var v11=6,v22=6,s=0,qle=0,qld=0,led=43,ldd=49,sese=0;

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
     sese=i;
     break;
   }
   if(bot1[i].soma==12){
    al.innerHTML="jogador dois Começa";
    al.style.display="block";
    s=2;
    sese=i;
    break;
  }
  if(bot2[i].soma==12){
    al.innerHTML="jogador tres Começa";
    al.style.display="block";
    s=3;
    sese=i;
    break;
  }
  if(bot3[i].soma==12){
    al.innerHTML="jogador quatro Começa";
    al.style.display="block";
    s=4;
    sese=i;
    break;
  }

  }
  setTimeout(function (){
    al.style.display="none";
    jog();
  
    
  },3500);
  
}
function jogblock(){
var n=0,co=0;
for(var i=0; i<jogador1.length; i++){
  if(v11==jogador1[i].val1 || v22==jogador1[i].val2 ||v11==jogador1[i].val2 || v22==jogador1[i].val1 ){
    co=1;
    break;
  }
}if(co!=1){
  n+=1;
}
co=0;
for(var i=0; i<bot1.length; i++){
  if(v11==bot1[i].val1 || v22==bot1[i].val2 ||v11==bot1[i].val2 || v22==bot1[i].val1 ){
    co=1;
    break;
  }
}if(co!=1){
  n+=1;
}
co=0;
for(var i=0; i<bot2.length; i++){
  if(v11==bot2[i].val1 || v22==bot2[i].val2 ||v11==bot2[i].val2 || v22==bot2[i].val1 ){
    co=1;
    break;
  }
}if(co!=1){
  n+=1;
}
co=0;
for(var i=0; i<bot3.length; i++){
  if(v11==bot3[i].val1 || v22==bot3[i].val2 ||v11==bot3[i].val2 || v22==bot3[i].val1 ){
    co=1;
    break;
  }
}if(co!=1){
  n+=1;
}
return n; 
}
function jog(){
  console.log(s);
  var al=document.querySelector(".cademe");
  if(jogblock()==4){
    al.innerHTML="jogo bloqueado";
    al.style.display="block";
  document.querySelector(".cobrejo1").style.display="block";
  s=0;
    return 0;
  }
  if(ganho()!=0){
  document.querySelector(".cobrejo1").style.display="block";
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
    s=0;
    return 0;
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
    default:
      return 0;
    }
  
}
function botjog1(){ 
  document.querySelector(".cobrejo1").style.display="block";
var el = document.querySelectorAll(".bot1 .pec");
var al=document.querySelector(".cademe");
if(sese!=-1){
  mesa(1,0,bot1[sese].val1,bot1[sese].val2,bot1[sese].pec);

  el[sese].remove();
  bot1.splice(sese,1);
  sese=-1;
  setTimeout(()=>{botjog1()},1000)
}
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
  mesa(1,0,bot1[i].val1,bot1[i].val2,bot1[i].pec);

      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},2500);
      break;
    }
    if(v11==bot1[i].val2){
      v11=bot1[i].val1;
    console.log(bot1[i]);
    console.log(v11,v22);
  mesa(1,1,bot1[i].val1,bot1[i].val2,bot1[i].pec);

      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},2500);
      break;
    }   
     if(v22==bot1[i].val2){
      v22=bot1[i].val1;
    console.log(bot1[i]);
    console.log(v11,v22);
  mesa(2,1,bot1[i].val1,bot1[i].val2,bot1[i].pec);

      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},2500);
      break;
    }
    if(v22==bot1[i].val1){
      v22=bot1[i].val2;
    console.log(bot1[i]);
    console.log(v11,v22);
  mesa(2,0,bot1[i].val1,bot1[i].val2,bot1[i].pec);
      el[i].remove();
      bot1.splice(i,1);
      setTimeout(()=>{botjog1()},2500);
      break;
    }
  }
}else{jog();}
}
function botjog2(){
  document.querySelector(".cobrejo1").style.display="block";
var el = document.querySelectorAll(".bot2 .pec");
var al=document.querySelector(".cademe");
if(sese!=-1){
  mesa(1,0,bot2[sese].val1,bot2[sese].val2,bot2[sese].pec);

  el[sese].remove();
  bot2.splice(sese,1);
  sese=-1;
  setTimeout(()=>{botjog2()},1000)
}
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
  mesa(1,0,bot2[i].val1,bot2[i].val2,bot2[i].pec);

      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},2500);
      break;
    }
    if(v11==bot2[i].val2){
      v11=bot2[i].val1;
    console.log(bot2[i]);
  console.log(v11,v22);
  mesa(1,1,bot2[i].val1,bot2[i].val2,bot2[i].pec);

      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},2500);
      break;
    }   
     if(v22==bot2[i].val2){
      v22=bot2[i].val1;
    console.log(bot2[i]);
  console.log(v11,v22);
  mesa(2,1,bot2[i].val1,bot2[i].val2,bot2[i].pec);
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},2500);
      break;
    }
    if(v22==bot2[i].val1){
      v22=bot2[i].val2;
    console.log(bot2[i]);
  console.log(v11,v22);
  mesa(2,0,bot2[i].val1,bot2[i].val2,bot2[i].pec);
      el[i].remove();
      bot2.splice(i,1);
      setTimeout(()=>{botjog2()},2500);
      break;
    }
  }
}else{jog();} 
}
function botjog3(){
  document.querySelector(".cobrejo1").style.display="block";
var el = document.querySelectorAll(".bot3 .pec");
var al=document.querySelector(".cademe");
if(sese!=-1){
  mesa(1,0,bot3[sese].val1,bot3[sese].val2,bot3[sese].pec);

  el[sese].remove();
  bot3.splice(sese,1);
  sese=-1;
  setTimeout(()=>{botjog3()},2500)
}
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
  mesa(1,0,bot3[i].val1,bot3[i].val2,bot3[i].pec);
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},2500);
      break;
    }
    if(v11==bot3[i].val2){
      v11=bot3[i].val1;
    console.log(bot3[i]);
  console.log(v11,v22);
  mesa(1,1,bot3[i].val1,bot3[i].val2,bot3[i].pec);
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},2500);
      break;
    }   
     if(v22==bot3[i].val2){
      v22=bot3[i].val1;
      console.log(bot3[i]);    
  console.log(v11,v22); 
  mesa(2,1,bot3[i].val1,bot3[i].val2,bot3[i].pec);
      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},2500);
      break;
    }
    if(v22==bot3[i].val1){
      v22=bot3[i].val2;
    console.log(bot3[i]);
  console.log(v11,v22); 
  mesa(2,0,bot3[i].val1,bot3[i].val2,bot3[i].pec);

      el[i].remove();
      bot3.splice(i,1);
      setTimeout(()=>{botjog3()},2500);
      break;
    }
  }
}else{jog();}
}
function joga1(){
  document.querySelector(".cobrejo1").style.display="none";
var el = document.querySelectorAll(".jogador1 .pec");
var al=document.querySelector(".cademe");
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
if(sese!=-1){
if(el[sese].style.border=="0.5px solid black"){
    mesa(1,0,jogador1[sese].val1,jogador1[sese].val2,jogador1[sese].pec);
    remo(sese);
    sese=-1;
}else{
  al.innerHTML="peça invalida";
  al.style.display="block";
  for(var i=0; i<el.length; i++){
    if(el[i].style.border=="0.5px solid black"){
      el[i].style.border="0px"
    }
  }
  setTimeout(()=>{al.style.display="none"},3000);
  
}
}else{
document.querySelector("button").style.display="block";
for(var i=0; i<el.length; i++){
    if(el[i].style.border=="0.5px solid black"){
       
    //jogador1[(i+1)>jogador1.length-1 ? i :i+1].psi=jogador1[i].psi;
    if(v11==jogador1[i].val1 || v22==jogador1[i].val2 ||v11==jogador1[i].val2 || v22==jogador1[i].val1 ){
    if(v11==jogador1[i].val1){
      v11=jogador1[i].val2;
    console.log(1);
    console.log(jogador1[i]);
    mesa(1,0,jogador1[i].val1,jogador1[i].val2,jogador1[i].pec);
    remo(i);
    break;
      
    }if(v11==jogador1[i].val2){
      v11=jogador1[i].val1;
    console.log(2);
    console.log(jogador1[i]);
    mesa(1,1,jogador1[i].val1,jogador1[i].val2,jogador1[i].pec);
    remo(i);
      break;
    }if(v22==jogador1[i].val1){
      v22=jogador1[i].val2;
    console.log(3);
    console.log(jogador1[i]);
    mesa(2,0,jogador1[i].val1,jogador1[i].val2,jogador1[i].pec);
    remo(i);
      break;

    }if(v22==jogador1[i].val2){
      v22=jogador1[i].val1;
    console.log(4);
    console.log(jogador1[i]);
    mesa(2,1,jogador1[i].val1,jogador1[i].val2,jogador1[i].pec);
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
}
function ganho(){
  if(jogador1.length==0){
  return 1;
  }
  if(bot1.length==0){
  return 2;
}
  if(bot2.length==0){
  return 3;
  }
  if(bot3.length==0){
  return 4;
  }

  return 0;
}
function mesa(l,lv,vl1,vl2,styl){
  le=document.querySelectorAll(".eme");
  ld=document.querySelectorAll(".emd");
  console.log(le[qle].style.left,styl);
  if(vl1==6 && vl2==6){
    document.querySelector(".emc").style.backgroundImage="url('"+styl+"')";
  }else{
      if(vl1==vl2){
        lv=2;
      }
      if(l==1){
        le[qle].style.backgroundImage="url('"+styl+"')";
        if(lv==0){
        le[qle].style.transform="rotate(90deg)";
        le[qle].style.left=String(led)+"%";
        led-=4;
        }if(lv==1){
          le[qle].style.transform="rotate(270deg)";
          le[qle].style.left=String(led)+"%";
          led-=4;
        }if(lv==2){
          led+=1;
          le[qle].style.transform="rotate(0deg)";
          le[qle].style.left=String(led)+"%";
          led-=3;         
        }
        qle+=1;
        cle();          
      }else{
        ld[qld].style.backgroundImage="url('"+styl+"')";
        if(lv==0){
        ld[qld].style.transform="rotate(270deg)";
        ld[qld].style.left=String(ldd)+"%";
        ldd+=4;
        }if(lv==1){
          ld[qld].style.transform="rotate(90deg)";
          ld[qld].style.left=String(ldd)+"%";
          ldd+=4;
        }if(lv==2){
          ldd-=1;
          ld[qld].style.transform="rotate(0deg)";
          ld[qld].style.left=String(ldd)+"%"; 
          ldd+=3;
        }
        qld+=1;          
        cld();
      }
    }
}
function cld(){
  locopy=document.querySelector(".mesa");
  ori=document.querySelector(".emd");
  var copy=ori.cloneNode(true);    
  locopy.appendChild(copy);
}
function cle(){
  locopy=document.querySelector(".mesa");
  ori=document.querySelector(".eme");
  var copy=ori.cloneNode(true);    
  locopy.appendChild(copy);
}
function load() { 
var al=document.querySelector(".cademe");
document.querySelector(".cobrejo1").addEventListener("click",()=>{
  al.innerHTML="não e sua vez";
  al.style.display="block";
setTimeout(al.style.display="none",1500);
})
obj();
}
  
  
  document.addEventListener("DOMContentLoaded", load)