// Acá definimos todas las preguntas y sus opciones
const questions = [
    {
        id: 'plataforma',
        text: '¿Dónde tenés pensado jugar?',
        options: ['PC', 'Consola', 'Móvil']
    },
    {
        id: 'hardware',
        text: '¿Qué potencia tiene tu equipo?',
        options: ['Gama Baja / Integrada', 'Gama Media', 'Gama Alta']
    },
    {
        id: 'estilo',
        text: '¿Qué ritmo de juego buscás?',
        options: ['Acción y Aventura', 'Deportes', 'Mundo Abierto', 'Estrategia']
    }
];

let currentQuestionIndex = 0;
let userAnswers = {};

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.text;
    optionsContainer.innerHTML = ''; // Limpia los botones anteriores

    // Crea un botón por cada opción de la pregunta actual
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => handleAnswer(currentQuestion.id, option);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(questionId, answer) {
    // Guarda la respuesta
    userAnswers[questionId] = answer;
    currentQuestionIndex++;

    // Revisa si hay más preguntas o si ya terminamos
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = '¡Análisis completado!';
    
    // Pantalla de resultado temporal
    optionsContainer.innerHTML = `
        <p style="font-size: 1.2rem; line-height: 1.6; color: #cccccc;">
            Elegiste jugar en <strong>${userAnswers.plataforma}</strong>, con un equipo de <strong>${userAnswers.hardware}</strong>, buscando un título de <strong>${userAnswers.estilo}</strong>.
        </p>
        <p style="font-size: 1.1rem; color: #888888; margin-top: 20px;">
            (Acá más adelante conectaremos la base de datos para recomendarte, por ejemplo, un God of War Ragnarök o un buen simulador de ciudades).
        </p>
    `;
}

// Arranca la aplicación mostrando la primera pregunta
renderQuestion();