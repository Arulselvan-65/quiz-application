const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "John Steinbeck", "J.K. Rowling"],
        correctAnswer: "Harper Lee"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Jupiter", "Mars", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "Which element has the chemical symbol 'H'?",
        options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        correctAnswer: "Hydrogen"
    },
    {
        question: "Who invented the telephone?",
        options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marie Curie"],
        correctAnswer: "Alexander Graham Bell"
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Brazil", "Russia", "China", "Australia"],
        correctAnswer: "Brazil"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Who was the first President of the United States?",
        options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
        correctAnswer: "George Washington"
    }
];


document.addEventListener('DOMContentLoaded', (e) => {


    const parentDiv = document.getElementById("display-content");


    questions.forEach((question,ind) =>{
        const d = document.createElement('div');
        d.setAttribute('class', 'question');

        const ques = document.createElement('h3');
        ques.textContent = `${(ind+1)}. ${question.question}`;

        const optionDiv = document.createElement('div');
        

        for(let i=0;i<question.options.length;i++){
            const div = document.createElement('div');
            div.setAttribute('class', 'options');

            const bt = document.createElement('input');
            bt.setAttribute('type', 'radio');
            bt.setAttribute('id', 'option')
            bt.setAttribute('name', `ques${ind}`);
            bt.setAttribute('value', question.options[i]);
            bt.setAttribute('required', 'true');

            const lb = document.createElement('label');
            lb.textContent = question.options[i];
            div.appendChild(bt);
            div.appendChild(lb);

            optionDiv.appendChild(div);
        }

        d.appendChild(ques);
        d.appendChild(optionDiv);

        parentDiv.appendChild(d);
    });
})


function getMarks() {
    const questionsDivs = document.querySelectorAll(".question");
    const score=0;

    questionsDivs.forEach((ques,i) =>{
        const selectedOption = ques.querySelector(`input[id=option]:checked`);
        if(selectedOption == undefined){
            window.alert("Complete Question Number " + (i+1)+" .");
        }
        else{
            console.log(questions[i].correctAnswer);
            if(selectedOption.value === questions[i].correctAnswer){
                score++;
            }
        }
    });
    console.log(score);

    const m = document.getElementById("mark");
    m.textContent = `${score}`;
}