// TELA MENU PRINCIPAL //
var tela = 1;
// TELA MENU PRINCIPAL //
var img;
// TELA INFORMAÇÕES //
var info;
// TELA CRÉDITOS //
var cred;
// SOM DO MENU INICIAR //
var snd;
// TELA MENU FASES //
var niveis;
// TELA FASE 1 //
var fase1;
// TELA FASE 2 //
var fase2;
// TELA GAME OVER //
var over;
// TELA VITÓRIA //
var win;

// POSIÇÃO HORIZONTAL, VERTICAL, LARGURA E ALTURA DO BOTÃO DO BOTÃO (INICIAR), (INFORMAÇÕES) E (CRÉDITOS) //
var xMenu = 354;
var yMenu1 = 478;
var yMenu2 = 520;
var yMenu3 = 562;
var largura = 150;
var altura = 30;

// POSIÇÃO HORIZONTAL, VERTICAL, LARGURA E ALTURA DO BOTÃO (VOLTAR) DO MENU INFORMAÇÕES, CRÉDITOS, MENU FASES E JOGO //
var xVoltar = 75;
var yVoltar1 = 483;
var largura2 = 150;
var altura2 = 30;

// POSIÇÃO HORIZONTAL, VERTICAL, LARGURA E ALTURA DO BOTÃO (CONTINUAR) DAS FASES //
var xCont = 385;
var yCont = 483;
var largura3 = 150;
var altura3 = 30;

// POSIÇÃO HORIZONTAL, VERTICAL, LARGURA E ALTURA DOS BOTÕES DAS FASES //
var xfase = 100;
var yfase1 = 178;
var yfase2 = 228;
var yfase3 = 278;
var largbloco = 100;
var altbloco = 30;

// CONTADOR DO VALOR DOS BLOCOS //
var cont1 = 0
var cont2 = 0
var cont3 = 0

// VARIÁVEL DO COMANDO FOR //
var yy;

// VARIÁVEIS PARA APAGAR A ORDEM CORRETA DA TELA //

var ApareceTexto1 = true;
var contTempo1 = 0
var ApareceTexto2 = true;
var contTempo2 = 0
var ApareceTexto3 = true;
var contTempo3 = 0

function preload() {
  
// IMAGEM DE FUNDO DO MENU //
  img = loadImage("Menu.jpg"); 
// IMAGEM DAS INFORMAÇÕES DO JOGO //
  info = loadImage("infoo.jpg"); 
// IMAGEM DOS CRÉDITOS DO JOGO //
  cred = loadImage("credd.jpg");
// IMAGEM DE FUNDO DAS FASES //
  niveis = loadImage("fases.jpg");  
  
// FASE 1 //
  fase1 = loadImage("fase01.jpg");
// FASE 2 //
  fase2 = loadImage("fase02.jpg");
// FASE 3 //
  fase3 = loadImage("fase03.jpg");
  
// IMAGEM DE GAME OVER //  
  over = loadImage("gameover.jpg");
// IMAGEM DE VITÓRIA //  
  win = loadImage("parabens.jpg");
// IMAGEM THE END //
  theend = loadImage("theend.jpg");
   
// SOM DO MENU INICIAR //
  soundFormats('mp3');
  snd = loadSound("snd.mp3");
  
}

function setup() {
  createCanvas(626, 626);
  frameRate(30);
  
// SOM DO MENU INICIAR //
  snd.play();
  snd.setVolume(0.1);
  
}

// COMANDO DO VALOR DE CADA BLOCO, E PARA IDENTIFICAR SE ELE SERÁ CLICADO //
function mousePressed(){
  
// MOUSEPRESSED FASES //
  
// CLIQUES DA FASE 1 //
  if ( tela == 5){
    
  if (mouseX >= 202 && mouseX < 302 && mouseY >=255 && mouseY <355){ 
  cont1 = cont1 +1  // bloco azul //
   
  }else if (mouseX >= 309 && mouseX < 409 && mouseY >=255 && mouseY <355){ 
  cont1 = cont1 +3  // bloco amarelo //
     
  }else if (mouseX >= 202 && mouseX < 302 && mouseY >=365 && mouseY <465){ 
  cont1 = cont1 +5  // bloco verde //
     
  }else if (mouseX >= 309 && mouseX < 409 && mouseY >=365 && mouseY <465){ 
  cont1 = cont1 +7  // bloco vermelho //
    
       }
  }

// CLIQUES DA FASE2 //
  if ( tela == 6){
    
  if (mouseX >= 145 && mouseX < 245 && mouseY >=255 && mouseY <355){
  cont2 = cont2 +7 // bloco azul //
  
  }else if (mouseX >= 255 && mouseX < 355 && mouseY >=255 && mouseY <355){
  cont2 = cont2 +3  // bloco amarelo //
    
  }else if (mouseX >= 365 && mouseX < 465 && mouseY >=255 && mouseY <355){
  cont2 = cont2 +1  // bloco rosa //
    
  }else if (mouseX >= 145 && mouseX < 245 && mouseY >=365 && mouseY <465){
  cont2 = cont2 +5  // bloco verde //    

  }else if (mouseX >= 255 && mouseX < 355 && mouseY >=365 && mouseY <465){
  cont2 = cont2 +9 // bloco vermelho //
     
  }else if (mouseX >= 365 && mouseX < 465 && mouseY >=365 && mouseY <465){
  cont2 = cont2 +11 // bloco laranja //
    
       }
  }

// CLIQUES DA FASE3 //
  if ( tela == 7){
    
  if (mouseX >= 420 && mouseX < 520 && mouseY >=366 && mouseY <466){
  cont3 = cont3 +1 // bloco vermelho // 
    
  }else if (mouseX >= 200 && mouseX < 300 && mouseY >=366 && mouseY <466){
  cont3 = cont3 +3  // bloco turquesa //
   
  }else if (mouseX >= 420 && mouseX < 520 && mouseY >=257 && mouseY <357){
  cont3 = cont3 +5  // bloco rosa //
  
  }else if (mouseX >= 90 && mouseX < 190 && mouseY >=257 && mouseY <357){
  cont3 = cont3 +7  // bloco amarelo // 
  
  }else if (mouseX >= 310 && mouseX < 410 && mouseY >=366 && mouseY <466){
  cont3 = cont3 +9  // bloco verde // 
    
  }else if (mouseX >= 90 && mouseX < 190 && mouseY >=366 && mouseY <466){
  cont3 = cont3 +11  // bloco laranja //
  
  }else if (mouseX >= 310 && mouseX < 410 && mouseY >=257 && mouseY <357){
  cont3 = cont3 +13  // bloco roxo // 
    
  }else if (mouseX >= 200 && mouseX < 300 && mouseY >=257 && mouseY <357){
  cont3 = cont3 +15  // bloco azul //
       }
  }
  
}

function draw() {
  textStyle(NORMAL);
  background(220);
  
// IMAGEM DE FUNDO DO MENU //
  image(img,0,0);
  
// TELA DO MENU PRINCIPAL //
  if ( tela == 1){
    
// BOTÕES DO MENU PRINCIPAL DO JOGO //
    textAlign(CENTER);
    textSize(20);
    
// BOTÃO INICIAR //   
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura ) {
       stroke(10);
       fill(255);
       rect(xMenu, yMenu1, largura, altura, 5);
       if (mouseIsPressed) {
       tela = 2;
       cont1 = 0
       cont2 = 0
       cont3 = 0
       ApareceTexto1 = true
       ApareceTexto2 = true
       ApareceTexto3 = true
       }
    }
    fill(20)
    noStroke();
    text("Iniciar", 430, 500);
    
// BOTÃO INFORMAÇÕES //   
    if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura ) {
       stroke(10);
       fill(255);
       rect(xMenu, yMenu2, largura, altura, 5);
       if (mouseIsPressed) {
       tela = 3;
       }
    }
    fill(20)
    noStroke();
    text("Informações", 430, 542);
    
// BOTÃO CRÉDITOS // 
     if( mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura ) {
       stroke(10);
       fill(255);
       rect(xMenu, yMenu3, largura, altura, 5);
       if (mouseIsPressed) {
       tela = 4;
       }
    }
    fill(20)
    noStroke();
    text("Créditos", 430, 584);
    
  }
  
// MENU FASES DO JOGO //
  else if ( tela == 2){
    image(niveis,0,0);
    
// FASE 1 //
    if( mouseX > xfase && mouseX < xfase + largbloco && mouseY > yfase1 && mouseY < yfase1 + altbloco ) {
       stroke(10);
       fill(255);
       rect(xfase, yfase1, largbloco, altbloco, 5);
       if (mouseIsPressed) {
       tela = 5;
       }
    }
    fill(20)
    noStroke();
       
// FASE 2 //
    if( mouseX > xfase && mouseX < xfase + largbloco && mouseY > yfase2 && mouseY < yfase2 + altbloco ) {
       stroke(10);
       fill(255);
       rect(xfase, yfase2, largbloco, altbloco, 5);
       if (mouseIsPressed) {
       tela = 6;
       }
    }
    fill(20)
    noStroke();
    
// FASE 3 //
    if( mouseX > xfase && mouseX < xfase + largbloco && mouseY > yfase3 && mouseY < yfase3 + altbloco ) {
       stroke(10);
       fill(255);
       rect(xfase, yfase3, largbloco, altbloco, 5);
       if (mouseIsPressed) {
       tela = 7;
       }
    }
    fill(20)
    noStroke();


// CÓDIGO QUE MOSTRA AS FASES DA TELA //    
    for (let i=1,yy=200;i<=3;i++,yy+=50)
      {text("Fase "+i, 150, yy) }
    
// BOTÃO VOLTAR //
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);   
    
  }

// INFORMAÇÕES DO JOGO //
  else if ( tela == 3){
    image(info,0,0);
    
// BOTÃO VOLTAR //
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
  }
  
// CRÉDITOS DO JOGO //
  else if ( tela == 4){
    image(cred,0,0);
    
// BOTÃO VOLTAR //
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
  }
  
// FASE 1 //
  else if ( tela == 5){
  image(fase1,0,0);   
    
// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
    
// CORES E POSIÇÕES DOS BLOCOS //

  fill(0,0,255) // azul //
  square(202,257,100) 
    
  fill(255,255,0) // amarelo //
  square(309,257,100) 
    
  fill(0,128,0) // verde //
  square(202,366,100) 
    
  fill(255,0,0) // vermelho //
  square(309,366,100) 
  
// CORES E POSIÇÕES DOS TEXTOS //
  
  if (ApareceTexto1){
  stroke(15);
  textSize(20);
  fill(0,0,255);  
  text("azul", 150, 200);
    
  fill(255,255,0);
  text("amarelo", 250, 200);
    
  fill(0,128,0);
  text("verde", 350, 200);
    
  fill(255,0,0);
  text("vermelho", 450, 200);
  contTempo1++ 
  
  if (contTempo1 > 120){
  ApareceTexto1 = false;
  contTempo1 = 0
    
    }
  }
    
// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO, COMPARA COM O CONTADOR E FAZ O BLOCO SUMIR //    
  if(cont1 < 0 || cont1 == 1){
    noStroke();
    fill(255)
    square(202,257,100)
}
  if(cont1 == 4){
    noStroke();
    fill(255)
    square(202,257,100) 
    noStroke();
    fill(255)
    square(309,257,100)
}
  if(cont1 == 9){
    noStroke();
    fill(255)
    square(202,257,100) 
    noStroke();
    fill(255)
    square(309,257,100)
    noStroke();
    fill(255)
    square(202,366,100)
}
    if(cont1 == 16){
    noStroke();
    fill(255)
    square(202,257,100) 
    noStroke();
    fill(255)
    square(309,257,100)
    noStroke();
    fill(255)
    square(202,366,100)
    noStroke();
    fill(255)
    square(309,366,100)
}
    
// COMANDO PARA SER GAME OVER //
    if(cont1 != 0 && cont1 != 1 && cont1 != 4 && cont1 != 9 && cont1 != 16) {
    image(over,0,0);

// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
      
    }
// COMANDO PARA VITÓRIA //    
    if(cont1 == 16){
    image(win,0,0);  
      
// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
    
// BOTÃO CONTINUAR //
    if( mouseX > xCont && mouseX < xCont + largura3 && mouseY > yCont && mouseY < yCont + altura3 ) {
       stroke(10);
       fill(255);
       rect(xCont, yCont, largura3, altura3, 5);
       if (mouseIsPressed) {
       tela = 6;
       }
    }
    fill(20)
    noStroke();
    text("Continuar", 460, 505);
      
       }
    }   
  
// FASE 2 //
  else if ( tela == 6){
  image(fase2,0,0);  
  
// BOTÃO VOLTAR //
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
    
// CORES E POSIÇÕES DOS BLOCOS //
    
  fill(0,0,255) // azul //
  square(145,257,100) 
    
  fill(255,255,0) // amarelo //
  square(255,257,100) 
    
  fill(255,20,147) // rosa //
  square(365,257,100)  
    
  fill(0,128,0) // verde //
  square(145,366,100) 
    
  fill(255,0,0) // vermelho //
  square(255,366,100)

  fill(255,165,0) // laranja //  
  square(365,366,100)  
    
// CORES E POSIÇÕES DOS TEXTOS //
   
  if (ApareceTexto2){
  stroke(15);
  textSize(20);
  fill(255,20,147);  
  text("rosa",125,200);
    
  fill(255,255,0);
  text("amarelo",195,200);
    
  fill(0,128,0);
  text("verde",270,200);
    
  fill(0,0,255);
  text("azul",325,200);
    
  fill(255,0,0);
  text("vermelho",395,200);
    
  fill(255,165,0);
  text("laranja",475,200);
  contTempo2++
  
  if (contTempo2 > 120){
  ApareceTexto2 = false;
  contTempo2 = 0
    
    }
  }

// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO, COMPARA COM O CONTADOR E FAZ O BLOCO SUMIR //    
  if(cont2 < 0 || cont2 == 1){
    noStroke();
    fill(255)
    square(365,257,100)
}
  if(cont2 == 4){
    noStroke();
    fill(255)
    square(365,257,100) 
    noStroke();
    fill(255)
    square(255,257,100)
}
  if(cont2 == 9){
    noStroke();
    fill(255)
    square(365,257,100) 
    noStroke();
    fill(255)
    square(255,257,100)
    noStroke();
    fill(255)
    square(145,366,100)
}   
  if(cont2 == 16){
    noStroke();
    fill(255)
    square(365,257,100) 
    noStroke();
    fill(255)
    square(255,257,100)
    noStroke();
    fill(255)
    square(145,366,100)
    noStroke();
    fill(255)
    square(145,257,100)   
}   
  if(cont2 == 25){
    noStroke();
    fill(255)
    square(365,257,100) 
    noStroke();
    fill(255)
    square(255,257,100)
    noStroke();
    fill(255)
    square(145,366,100)
    noStroke();
    fill(255)
    square(145,257,100)   
    noStroke();
    fill(255)
    square(255,366,100)
}     
  if(cont2 == 36){
    noStroke();
    fill(255)
    square(365,257,100) 
    noStroke();
    fill(255)
    square(255,257,100)
    noStroke();
    fill(255)
    square(145,366,100)
    noStroke();
    fill(255)
    square(145,257,100)   
    noStroke();
    fill(255)
    square(255,366,100) 
    noStroke();
    fill(255)
    square(365,366,100)      
}
    
// COMANDO PARA SER GAME OVER //
    if(cont2 != 0 && cont2 != 1 && cont2 != 4 && cont2 != 9 && cont2 != 16 && cont2 != 25 && cont2 != 36) {
    image(over,0,0);

// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
      
    }
    
// COMANDO PARA VITÓRIA //    
    if(cont2 == 36){
    image(win,0,0);  
      
// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
    
// BOTÃO CONTINUAR //
    if( mouseX > xCont && mouseX < xCont + largura3 && mouseY > yCont && mouseY < yCont + altura3 ) {
       stroke(10);
       fill(255);
       rect(xCont, yCont, largura3, altura3, 5);
       if (mouseIsPressed) {
       tela = 7;
       }
    }
    fill(20)
    noStroke();
    text("Continuar", 460, 505);
    
       }
    }

// FASE 3 //
  else if ( tela == 7){
  image(fase3,0,0);  

// BOTÃO VOLTAR //
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);

// CORES E POSIÇÕES DOS BLOCOS //
    
  
  fill(255,255,0) // amarelo //  
  square(90,257,100) 
     
  fill(0,0,255) // azul //  
  square(200,257,100) 
     
  fill(128,0,128) // roxo //  
  square(310,257,100)
      
  fill(255,20,147) // rosa //  
  square(420,257,100) 
      
  fill(255,165,0) // laranja //    
  square(90,366,100) 
  
  fill(64,224,208) // turquesa //  
  square(200,366,100)
  
  fill(0,128,0) // verde //  
  square(310,366,100) 
  
  fill(255,0,0) // vermelho //  
  square(420,366,100) 

// CORES E POSIÇÕES DOS TEXTOS //
    
  if (ApareceTexto3){
  stroke(15);
  textSize(20);
  fill(255,0,0);  
  text("vermelho",131,200);
    
  fill(64,224,208);
  text("turquesa",221,200);
    
  fill(255,20,147);
  text("rosa",290,200);
    
  fill(255,255,0);
  text("amarelo",354,200);
    
  fill(0,128,0);
  text("verde",424,200);
    
  fill(255,165,0);
  text("laranja",487,200);
    
  fill(128,0,128);
  text("roxo",283,222);
    
  fill(0,0,255);
  text("azul",328,222);
  contTempo3++
    
  if (contTempo3 > 120){
  ApareceTexto3 = false;
  contTempo3 = 0
    
    }
  }

// COMANDO QUE IDENTIFICA QUAL BLOCO FOI CLICADO, COMPARA COM O CONTADOR E FAZ O BLOCO SUMIR //    
  if(cont3 < 0 || cont3 == 1){
    noStroke();
    fill(255)
    square(420,366,100)
}
  if(cont3 == 4){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
}
  if(cont3 == 9){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
}
  if(cont3 == 16){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
    noStroke();
    fill(255)
    square(90,257,100)
}
  if(cont3 == 25){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
    noStroke();
    fill(255)
    square(90,257,100)
    noStroke();
    fill(255)
    square(310,366,100)
}
  if(cont3 == 36){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
    noStroke();
    fill(255)
    square(90,257,100)
    noStroke();
    fill(255)
    square(310,366,100)
    noStroke();
    fill(255)
    square(90,366,100)
}
  if(cont3 == 49){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
    noStroke();
    fill(255)
    square(90,257,100)
    noStroke();
    fill(255)
    square(310,366,100)
    noStroke();
    fill(255)
    square(90,366,100)
    noStroke();
    fill(255)
    square(310,257,100)
}
  if(cont3 == 64){
    noStroke();
    fill(255)
    square(420,366,100)
    noStroke();
    fill(255)
    square(200,366,100)
    noStroke();
    fill(255)
    square(420,257,100)
    noStroke();
    fill(255)
    square(90,257,100)
    noStroke();
    fill(255)
    square(310,366,100)
    noStroke();
    fill(255)
    square(90,366,100)
    noStroke();
    fill(255)
    square(310,257,100)
    noStroke();
    fill(255)
    square(200,257,100)
}
    
// COMANDO PARA SER GAME OVER //
    if(cont3 != 0 && cont3 != 1 && cont3 != 4 && cont3 != 9 && cont3 != 16 && cont3 != 25 && cont3 != 36 && cont3 != 49 && cont3 != 64) {
    image(over,0,0);

// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
      
    }
    
// COMANDO PARA VITÓRIA //    
    if(cont3 == 64){
    image(theend,0,0);  
    
// BOTÃO VOLTAR //  
    if( mouseX > xVoltar && mouseX < xVoltar + largura2 && mouseY > yVoltar1 && mouseY < yVoltar1 + altura2 ) {
       stroke(10);
       fill(255);
       rect(xVoltar, yVoltar1, largura2, altura2, 5);
       if (mouseIsPressed) {
       tela = 1;
       }
    }
    fill(20)
    noStroke();
    text("Voltar", 150, 505);
      
    }
  }
}