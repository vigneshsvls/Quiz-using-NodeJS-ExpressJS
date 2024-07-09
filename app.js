const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Placeholder data for the quiz
const quiz = [
    {
        question: "What is the time complexity of binary search?",
        options: ["O(logn)","O(n)","O(n^2)","O(nlogn)"],
        answer: "O(logn)"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "JavaScript", "C#", "Java"],
        answer: "JavaScript"
    }
];

app.get('/', (req, res) => {
    res.render('index', { quiz });
});

app.post('/submit', (req, res) => {
    const userAnswers = req.body;
    let score = 0;

    quiz.forEach((q, index) => {
        if (userAnswers[`q${index}`] === q.answer) {
            score++;
        }
    });

    res.render('result', { score, total: quiz.length });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
