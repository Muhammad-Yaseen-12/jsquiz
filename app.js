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





var htmlques = document.getElementById('ques')
var htmlopt1 = document.getElementById('opt1')
var htmlopt2 = document.getElementById('opt2')
var htmlopt3 = document.getElementById('opt3')
var index = 0
var getBtn = document.getElementById('btn')
var score = 0


function nextQuestion() {
    console.log("code chal raha hai");

    var getInputs = document.getElementsByTagName('input')
    for (var i = 0; i < getInputs.length; i++) {
        getInputs[i].checked = false
    }

    console.log("code chal raha hai");

    let ansValue = document.getElementsByName("quiz")
    let userAns = "";
    console.log("code chal raha hai");


    // yaha se check kar lai


    for (let j = 0; j < ansValue.length; j++) {
        console.log("code chal raha hai");
        // if(ansValue[j].checked){
        userAns = ansValue[j].value;
        console.log(userAns);
        
        console.log("code chal raha hai");
        // }


        // document.getElementById("optAns1").value = "";

        // console.log(userAns);



        // console.log(userAns);

        if (userAns === questions[index].correctOption) {
            score++;

            console.log(score);
            console.log("code chal raha hai");
        }

    }
// thanks bro




    console.log("code chal raha hai");

    if (index > questions.length - 1) {
        Swal.fire({
            title: "Quiz End!" + score,
            text: "Restart Quiz",
            icon: "success"
        });
        index = 0;
        score = 0;
        clearInterval(interval)
        sec.innerHTML = "00";
        min.innerHTML = "08";
        document.getElementById("btnn").disabled = false
        nextQuestion()

    }
    else {
        htmlques.innerText = questions[index].question
        htmlopt1.innerText = questions[index].option1
        htmlopt2.innerText = questions[index].option2
        htmlopt3.innerText = questions[index].option3
        index++
    }

    getBtn.disabled = true


}

nextQuestion()


function btnWork() {

    getBtn.disabled = false
}




let min = document.getElementById("min");
let sec = document.getElementById("sec");

let jsMin = 7;
let jsSec = 60;

let interval;
let quizOptionss;

document.getElementById("optAns1").disabled = true;
document.getElementById("optAns2").disabled = true;
document.getElementById("optAns3").disabled = true;

function start() {
    interval = setInterval(function () {

        jsSec--;
        sec.innerHTML = jsSec;
        min.innerHTML = jsMin

        if (jsSec <= 0) {
            jsSec = 59;
            jsMin--;
            min.innerHTML = jsMin
        }

        if (jsSec < 10) {
            sec.innerHTML = "0" + jsSec;
        }

        if (jsMin < 10) {
            min.innerHTML = "0" + jsMin;
        }

        if (jsMin === 0) {
            clearInterval(interval);

            jsMin = 7;
            jsSec = 60;

            sec.innerHTML = "00";
            min.innerHTML = "08";

            // quizOptionss.disabled = false

            alert("times up")
            document.getElementById("btnn").disabled = false
        }

    }, 1000)
    document.getElementById("btnn").disabled = true

    document.getElementById("optAns1").disabled = false;
    document.getElementById("optAns2").disabled = false;
    document.getElementById("optAns3").disabled = false;


}
