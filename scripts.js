const flashcards = [
  {
    question: "O que é React?",
    answer: "React é uma biblioteca JavaScript para construção de interfaces de usuário de forma declarativa e eficiente."
  },
  {
    question: "Para que serve o useState no React?",
    answer: "O useState é um hook do React usado para adicionar estado a componentes funcionais."
  },
  {
    question: "O que é o JSX?",
    answer: "JSX é uma extensão de sintaxe que permite escrever HTML dentro do JavaScript no React."
  },
  {
    question: "React é framework ou biblioteca?",
    answer: "React é uma biblioteca JavaScript focada na construção de interfaces."
  },
  {
    question: "Qual a principal vantagem do React?",
    answer: "A principal vantagem do React é o Virtual DOM, que melhora o desempenho das aplicações."
  }
];

let currentIndex = 0;
let showingAnswer = false;

// Seletores
const content = document.getElementById("content");
const position = document.getElementById("position");
const nextBtn = document.querySelector(".next-button");

function renderCard() {
  const card = flashcards[currentIndex];
  content.textContent = showingAnswer ? card.answer : card.question;
  position.textContent = `Card ${currentIndex + 1} de ${flashcards.length}`;
}

// Clicar no card para alternar pergunta/resposta
content.addEventListener("click", () => {
  showingAnswer = !showingAnswer;
  renderCard();
});

// Avançar card
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % flashcards.length;
  showingAnswer = false;
  renderCard();
});

// Inicializa com o primeiro card
renderCard();
