function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  function ver(){
  
    var radioButtons = document.getElementsByName("resposta");
    for(var i = 0; i < radioButtons.length; i++)
    {
      if(radioButtons[i].checked == true)
        {
          const radiovalor = radioButtons[i].value
  
          alert('Checa: ' + radiovalor)
          escolhaUser(radiovalor)
  
        }
      }
  }
  
  //-------------------------------------------Abaixo as perg e resp-----------------------------------------------
  
  const alternativa = {
    
      p1:'Quem fundou a empresa Apple?', 
      p2:'Quais dessas alternativas são memórias RAM?', 
      p3:'Qual dessas figuras é Steve Jobs?',
      p4: "Qual dessas figuras é um processador Intel i9?",
      p5: "O que é litografia aplicado a processadores na área da engenharia da computação?",
      p6: "O que é um Flip-Flop em eletrônica?",
      p7: "Qual das alternativas abaixo representa 1 Byte?",
      p8: "Qual a melhor definição de ULA?",
      p9: "Qual a melhor definição de UC?",
      p10: "JavaSccript é uma linguagem funcional ou puramente POO?"
  
    }
  const resp1 = {a:'Bill Gates', b:'Linus Torvalds', c:'Steve Jobs', d:'Richard Stallamn'}
  const resp2 = {a:'Cache', b:'Memória Externa', c:'DDR', d:'DDI5'}
  const resp3 = {a:"<img src='assets/img/nup.jpg'>", b:"<img src='assets/img/nup.jpg'>", c:"<img src='assets/img/nup.jpg'>", d:"<img src='assets/img/nup.jpg'>"}
  const resp4 = {a:'img1i', b:'img2i', c:'img3i', d:'img4i' }
  const resp5 = {a:'É a tecnologia aplicada o construção de transistores para processadores em escala de nm', 
                 b:'É utilizada para construção de imagens a nível nm', 
                 c: 'É a maneira que engenheiros descrevem qualer arquitetura nm para hardware', 
                 d: 'Liturgia ou litrografia é a discussão folosofica de como funcionará um processador  ' }
  const resp6 = {a:'É um estado armazenado em rede', b:'É um estado armazenado em 0 ou 1', c: 'É um estado armazenado em HD', d: 'É um estado armazenado em imagem' }
  const resp7 = {a:'1000', b:'120000', c: '100000000', d: '10000000' }
  const resp8 = {a:'Unidade Lógica Ativa', b:'Unidade Lógica Aritmética', c: 'Unidade Lógica Analógica', d: 'Unidade Lógica A' }
  const resp9 = {a:'Unidade Contrária', b:'Unidade Certa', c: 'Unidade Contínua', d: 'Unidade Controladora' }
  const resp10 = {a:'POO', b:'Funcional', c: 'OS DOIS', d: 'NENHUM DOS DOIS' }
  
  
  const perg1 = [alternativa.p1]
  const perg2 = [alternativa.p2]
  const perg3 = [alternativa.p3]
  const perg4 = [alternativa.p4]
  const perg5 = [alternativa.p5]
  const perg6 = [alternativa.p6]
  const perg7 = [alternativa.p7]
  const perg8 = [alternativa.p8]
  const perg9 = [alternativa.p9]
  const perg10 = [alternativa.p10]
  
  //const perg = [perg1, perg2, perg3, perg4, perg5, perg6, perg7, perg8, perg9, perg10] //Apenas pergntas
  const perguntasPerg = [[perg1], [perg2], [perg3], [perg4], [perg5], [perg6], [perg7], [perg8], [perg9], [perg10]] //Apenas pergntas
  
  
  
  //console.log(perg[0])
  
  //------------------------------------------------------------------
  
  
  const rest1 = [resp1.a, resp1.b, resp1.c, resp1.d]
  const rest2 = [resp2.a, resp2.b, resp2.c, resp2.d]
  const rest3 = [resp3.a, resp3.b, resp3.c, resp3.d]
  const rest4 = [resp4.a, resp4.b, resp4.c, resp4.d]
  const rest5 = [resp5.a, resp5.b, resp5.c, resp5.d]
  const rest6 = [resp6.a, resp6.b, resp6.c, resp6.d]
  const rest7 = [resp7.a, resp7.b, resp7.c, resp7.d]
  const rest8 = [resp8.a, resp8.b, resp8.c, resp8.d]
  const rest9 = [resp9.a, resp9.b, resp9.c, resp9.d]
  const rest10 = [resp10.a, resp10.b, resp10.c, resp10.d]
  
  const respostaTodas = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8, rest9, rest10]
  
  //Respostas corretas das alternativas
  const re1 = [resp1.c]
  const re2 = [resp2.c]
  const re3 = [resp3.c]
  const re4 = [resp4.a]
  const re5 = [resp5.a]
  const re6 = [resp6.b]
  const re7 = [resp7.d]
  const re8 = [resp8.b]
  const re9 = [resp9.d]
  const re10 = [resp10.b]
  
  const respostasCorretas = [re1, re2, re3, re4, re5, re6, re7, re8, re9, re10]
  
  
  //-----------------------------------------------------------------------------------------------------
  
  let escolhaAlternativa  //vai receber o valor contido da string neste vetor
  let vetor = []


  function questoes(pergunta, resposta){
  
  const perg = document.getElementById('perg')
  const resp1 = document.getElementById('resp1')
  const resp2 = document.getElementById('resp2')
  const resp3 = document.getElementById('resp3')
  const resp4 = document.getElementById('resp4')
  
  perg.innerHTML = perguntasPerg[pergunta]  //Aqui é a pergunta já está certo
  vetor = shuffle(respostaTodas[resposta])
  
  resp1.innerHTML = vetor[0] 
  resp2.innerHTML = vetor[1]
  resp3.innerHTML = vetor[2]
  resp4.innerHTML = vetor[3]

  
  }
  
  
  function ValidateForm(verifica)
  {
  
  const resp1 = document.getElementById('resp1')
  const resp2 = document.getElementById('resp2')
  const resp3 = document.getElementById('resp3')
  const resp4 = document.getElementById('resp4')
  
  const res = [resp1, resp2, resp3, resp4]
  
  
      var radioButtons = document.getElementsByName("resposta");
      for(var i = 0; i < radioButtons.length; i++)
      {
          if(radioButtons[i].checked == true)
          {
              if(confirm("Você selecionou " + res[i].innerText + " a sua resposta é essa?")){
  
                if(res[i].innerText == respostasCorretas[verifica]){
                  alert('Resposta correta')
                  onCorretas(10)
                } else {
                  alert('Resposta errada')
                }
  
               }       
          }
      }    
  }
  
  var clicks = 0;
  
  function onClick() {
      
          clicks += 1;
          if(clicks <= 9){
          document.getElementById("clicks").innerHTML = clicks+1;
          questoes(clicks, clicks)
          } else {          
            alert('Fim das questões')  
          }
  
  }
  
  function onVoltar() {  
   
    clicks -= 1;
    if(clicks >= 0 && clicks <= 9){
    document.getElementById("clicks").innerHTML = clicks+1;
    questoes(clicks, clicks)
    } else {
      alert('Voltou no máximo')
    }
  }
  
  function estatus(){
    const total = document.getElementById("correta").innerHTML 
  
    //alert(total)
    
    if(total > 70){
      alert(`Parabéns você acertou ${total} das questões, Aprovado!`)
    } else {
      alert(`Você acertou ${total} das questões, você não foi aprovado!`)
    }
    
  
  }
  
  //Inicia o teste
  function quest(){ 
    questoes(0, 0) 
  }


  //Verifica a resposta com o sistema
  function answer(){
  
  const clicks = document.getElementById("clicks").innerHTML
  
  //alert(clicks-1)
  ValidateForm(clicks-1)
  
  }
  
  
  var corretas = 0;
  
  function onCorretas(conta) {
      
          corretas += 10;
          if(corretas <= 100){
          document.getElementById("correta").innerHTML = corretas       
          
          } else {
            alert('Fim da soma dos acertos')
          }
  
  }
  
  
  
