
var altura = 0, largura = 0, vidas = 1

function ajustaTamanhoPalcoJogo(){
   altura = window.innerHeight
   largura = window.innerWidth
   //console.log(altura,largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

   if (document.getElementById('mosquito')){
      document.getElementById('mosquito').remove()
      if (vidas > 3){
         window.location.href = 'fim_de_jogo.html'
      }else {
         document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
         vidas++
      }  
   }

   var posicaoX = Math.floor(Math.random() * largura) - 110 
   var posicaoY = Math.floor(Math.random() * altura) - 110

   posicaoX = posicaoX < 0 ? 10 : posicaoX
   posicaoY = posicaoY < 0 ? 10 : posicaoY
   var mosquito = document.createElement('img')
   mosquito.src = 'imagens/mosquito.png'
   //mosquito.className = 'mosquito' + tamanhoAleatorio()
   mosquito.style.width = 40 * tamanhoAleatorio() + 'px'
   mosquito.style.heigth = 40 * tamanhoAleatorio() + 'px'
   mosquito.style.left = posicaoX + 'px'
   mosquito.style.top = posicaoY + 'px'
   mosquito.style.position = 'absolute'
   mosquito.style.transform = 'scaleX(' + ladoAleatorio() + ')'
   mosquito.id = 'mosquito'
   mosquito.onclick = function() {
      this.remove()
   }
   document.body.appendChild(mosquito)
}

function tamanhoAleatorio(){
  classe = Math.floor(Math.random() * 4)
  return classe +=1
}

function ladoAleatorio(){
   classe = Math.floor(Math.random() * 2)
   return classe = classe <= 0 ? -1 : classe
 }