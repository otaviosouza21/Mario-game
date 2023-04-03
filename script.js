const mario = document.querySelector("img:nth-child(3)");
const obstaculo = document.querySelector("img:nth-child(2)");
const btn = document.querySelector("button");
const pontos = document.querySelector("h4");
const btn2 = document.querySelector("button:last-child")
let contador = 0


window.addEventListener("keydown",({key})=>{ //chama a funcao de pular do mario
  if (key == " ") {
    mario.classList.remove("ativo");
    pular()
    start();
  }
})


function pular(){ //funcao que faz o mario pular
  mario.classList.add("ativo")

  setTimeout(()=>{
    mario.classList.remove("ativo");
  },500)

}




const start = () =>{ // funcao que inicia o jogo
  btn.style.display ="none" // muda o botao de inicar para resetar
  btn2.style.display ="block"
  obstaculo.classList.add("inicia"); // comeca a animar o obstaculo
  mario.src = './img/mario.gif'

 const intervalo =  setInterval(()=>{ // verifica quando o mario encosta no tubo
 
    dimMario = mario.getBoundingClientRect();
    dimObstaculo = obstaculo.getBoundingClientRect();


  pontos.innerText = parseInt(contador/5) // conta os pontos e exibe
  contador++
  
    if(dimMario.right-20 > dimObstaculo.left &&
       dimMario.left+50 < dimObstaculo.right && 
       dimMario.top < dimObstaculo.bottom && 
       dimMario.bottom > dimObstaculo.bottom){ // se mario enconstar no objeto
        gameOver() //chama a funcao de gameover
     /*    clearInterval(intervalo) // para a verificacao */
     clearInterval(intervalo)
       }
  })

}

const gameOver = () =>{
  obstaculo.classList.add("game-over") // para a animacao do tubo
  mario.classList.add("game-over") // animacao de game-over no mario
  mario.src = './img/game-over.png' // muda imagem do mario
} 

const reset = () =>{



 /*  obstaculo.classList.remove("game-over");
  obstaculo.classList.add("inicia");
  mario.classList.remove("game-over");
  contador = 0;

  btn.style.display ="block"
  btn2.style.display ="none" */

 
}

btn.addEventListener("click",start);
btn2.addEventListener("click",()=>{

  reset();
}); 
