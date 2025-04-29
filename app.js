let questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

let htmlques = document.getElementById("ques");
let htmlopt1 = document.getElementById("opt1");
let htmlopt2 = document.getElementById("opt2");
let htmlopt3 = document.getElementById("opt3");

let index = 0;
let score = 0;
let getBtn = document.getElementById("btn");


function showQuestion() {
    let current = questions[index];
    console.log(current);
    
    htmlques.innerText = current.question;

    document.getElementById("optAns1").value = current.option1;
    document.getElementById("optAns2").value = current.option2;
    document.getElementById("optAns3").value = current.option3;

    htmlopt1.innerText = current.option1;
    htmlopt2.innerText = current.option2;
    htmlopt3.innerText = current.option3;

    getBtn.disabled = true;
}

function nextQuestion() {
    let ansValue = document.getElementsByName("quiz");
    let userAns = "";

    for (let j = 0; j < ansValue.length; j++) {
        if (ansValue[j].checked) {
            
            userAns = ansValue[j].value;
            console.log(userAns);
            // break;
        }
    }

    if (userAns === questions[index].correctOption) {
        score++;
    }


    for (let i = 0; i < ansValue.length; i++) {
        ansValue[i].checked = false;
    }

    if (index >= questions.length - 1) {
        Swal.fire({
            title: "Quiz End! Your Score: " + score,
            text: "Restarting quiz...",
            icon: "success"
        });

        index = 0;
        score = 0;
        clearInterval(interval);
        sec.innerHTML = "00";
        min.innerHTML = "08";
        document.getElementById("btnn").disabled = false;
        showQuestion();
        return;
    }

    index++;
    showQuestion();
}


function btnWork() {
    getBtn.disabled = false;
}


let min = document.getElementById("min");
let sec = document.getElementById("sec");
let jsMin = 7;
let jsSec = 60;
let interval;

document.getElementById("optAns1").disabled = true;
document.getElementById("optAns2").disabled = true;
document.getElementById("optAns3").disabled = true;

function start() {
    interval = setInterval(function () {
        jsSec--;
        sec.innerHTML = jsSec;
        min.innerHTML = jsMin;

        if (jsSec <= 0) {
            jsSec = 59;
            jsMin--;
        }

        if (jsSec < 10) sec.innerHTML = "0" + jsSec;
        if (jsMin < 10) min.innerHTML = "0" + jsMin;

        if (jsMin === 0 && jsSec === 0) {
            clearInterval(interval);
            alert("Time's up!");
            document.getElementById("btnn").disabled = false;
        }
    }, 1000);

    document.getElementById("btnn").disabled = true;
    document.getElementById("optAns1").disabled = false;
    document.getElementById("optAns2").disabled = false;
    document.getElementById("optAns3").disabled = false;
}


showQuestion();
