const questions = [
    {
        question: "1. Qual é o clube mais vitorioso do Campeonato Brasileiro?",
        answers: ["São Paulo", "Palmeiras", "Flamengo", "Santos"],
        correctAnswer: 1
    },
    {
        question: "2. Quem é o maior artilheiro da história da seleção brasileira em jogos oficiais?",
        answers: ["Ronaldo Fenômeno", "Pelé", "Romário", "Neymar"],
        correctAnswer: 3
    },
    {
        question: "3. Em que ano o Brasil conquistou seu primeiro título mundial na Copa do Mundo?",
        answers: [
            "1946",
            "1950",
            "1958",
            "1962"
        ],
        correctAnswer: 2
    },
    {
        question: "4. Qual jogador é conhecido como Imperador?",
        answers: ["Garrincha", "Zico", "Adriano", "Rivaldo"],
        correctAnswer: 2
    },
    {
        question: "5. Qual clube é conhecido como O Glorioso?",
        answers: ["Vasco da Gama", "Botafogo", "Fluminense", "Grêmio"],
        correctAnswer: 1
    },
];


function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}


function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;