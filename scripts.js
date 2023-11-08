const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
    {
      question: "Qual é o melhor time do Brasil?",
      choices: ["Palmeiras", "Corinthians", "Flamengo", "São Paulo"],
      answer: "Palmeiras",
    },
    {
      question: "Só há uma certa. 25% de chance de acerto.",
      choices: [".", "..", "...", "...."],
      answer: "..",
    },
    {
      question: "Clique na alternativa certa",
      choices: ["Alternativa certa", "Certa", "Alternativa", "alternativa certa"],
      answer: "alternativa certa",
    },
    {
      question: "Onde a resposta estava na questão 6?",
      choices: ["Aqui", "Nessa", "Essa daqui", "Não é essa"],
      answer: "Essa daqui",
    },
    {
      question: "-80538738812075974³ + 80435758145817515³ + 12602123297335631³",
      choices: ["38", "42", "82484963", "1"],
      answer: "42",
    },
    {
      question: "Sabe que agora eu vim impactar. Jaya faz a dobra",
      choices: ["Klu klu", "kru kru", "Ye ye", "Pode pá"],
      answer: "Ye ye",
    },
    {
      question: "Sabe que eu falo pra tu. Pode fazer outra dobra?",
      choices: ["Klu klu", "Kru kru", "Era a vez do Dudu", "Eu falo uuuh"],
      answer: "Kru kru",
    },
    {
      question: "Sendo bem sincero, tô com preguiça de fazer o resto, então vai na sorte",
      choices: [".", "..", "...", "...."],
      answer: "..",
    },
    {
      question: ">D",
      choices: ["..", ".", "...", "...."],
      answer: ".",
    },
    {
      question: "paysandu",
      choices: [".", "..", "...", "...."],
      answer: "....",
    },
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");
  
  let currentQuestion = 0;
  let score = 0;
  let wrong = 0;
  let answerChosen = false;
  
  function loadQuestion() {
    const currentQuestionData = questions[currentQuestion];
    questionElement.innerText = currentQuestionData.question;
  
    const choices = shuffleArray(currentQuestionData.choices);
    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i];
    }
    answerChosen = false; // reset flag when loading new question
  }
  
  function checkAnswer(e) {
    if (answerChosen) return; // prevent multiple answers
    answerChosen = true;
  
    if (e.target.innerText === questions[currentQuestion].answer) {
      score++;
      scoreElement.innerText = "Pontuação: " + score;
      alert("Correto!");
    } else {
      wrong++;
      wrongElement.innerText = "Erros: " + wrong;
      alert(
        "Errado! Mó burrão" + "."
      );
    }
  }
  
  choiceElements.forEach((element) => {
    element.addEventListener("click", checkAnswer);
  });
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    wrong = 0;
    scoreElement.innerText = "Pontuação: 0";
    wrongElement.innerText = "Erros: 0";
    loadQuestion();
  }
  
  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, escolha uma resposta antes de prosseguir.");
      return;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      alert(
        "Fim do Quiz! Você acertou " +
          score +
          " de " +
          questions.length +
          " perguntas."
      );
      restartQuiz();
    }
  });
  
  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  loadQuestion();