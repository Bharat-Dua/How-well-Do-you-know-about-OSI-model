// How well do you know about OSI model.

var readlinesync = require("readline-sync");
var userName = readlinesync.question("May i have your name? ");
console.log();
console.log("Hi " + "" + userName + ", welcome in the quiz");
console.log();
console.log();
console.log("In this quiz, there will be few questions about of OSI model: ");
console.log();
 console.log("HOW WELL DO YOU KNOW ABOUT OF OSI MODEL OF COMPUTER NETWORK");
 console.log();
 console.log("Let's start the quiz..");
 console.log("-------------------------");
 var score = 0;

function quiz(askquestion,questionanswer)
{
  var userQuestion = readlinesync.question(askquestion);
  if(userQuestion.toUpperCase()===questionanswer.toUpperCase())
  {
    console.log("You are right.");
    score = score + 1;
    
  }else
  {
    console.log("You are wrong.");
    console.log("The right answer is: " + questionanswer);
    score = score-1;
  }
  console.log("Your score is: " + score);
  console.log("-----------------");
  }

var questions = [
{
  askquestion: `Acc. to OSI model,at which of the following layers internet protocels(IP) addresses are assigned? 
  a) Session layer
  b) Data link layer
  c) Presentation layer
  d) Network layer 
  `,
  questionanswer: "d"
},
  {
    askquestion: `What's my full form of OSI model? 
   a) open source Integration
   b) open source Interconnection
   c) open source Interexchange
   d) open source Interface
   `, 
    questionanswer : "b"
  },


  {
    askquestion: `Acc. to the OSI which layer Performs parity checking and Error Detection?
    a) Session
    b) Data Link 
    c) Presentation
    d) Physical
     `,      
     
    questionanswer : "b"
  },


  {
    askquestion: `How many total layers are there in OSI model?
    a) 4
    b) 5
    c) 7
    d) 6 
    `,
    questionanswer : "c"
  },


  {
    askquestion: `Which of the following is the correct sequence of layers in the OSI Model(From lowest layers to highest ?
    a) Physical,Network,Data link,Session,Transport,Presentation,Application.
    b) Physical,Data link,Network,Transport,Session,Presentation,Application
    c) Transport,Session,Data link,Application,Presentation,Network,Physical
    d) Physical,Data link,Network,Transport,Presentation,Session,Application
     `,
    questionanswer : "b"
  },


  {
    askquestion: `Which of the Following Layers of OSI Model Does Ethernet Operate?
    a) Physical
    b) Data Link
    c) Network
    d) Transport
    e) Both Physical and Data link layer
    f) Both Physical and Network layers 
    `,
    questionanswer : "e"
  },

{
  askquestion: `According to the OSI Model which layer is responsible for Routing?
  a) Session
  b) Data link
  c) Presentation
  d) Network
  `,
  questionanswer: "d"
},

{
  askquestion:`According to the OSI model which layer handles the LAN switching?
  a) Session
  b) Data link
  c) Presentation
  d) Network
  `,
  questionanswer: "b"
},

{
  askquestion: `At which layer of OSI Model Does a Network Bridge and Switches operate?
  a) Network
  b) Physical
  c) Session
  d) Data link
  `,
   questionanswer: "d"
},

{
  askquestion: ` According to the OSI model,which layer is responsible for sending Acknowledgementsof Successful data transfer?
  a) Session
  b) Transport
  c) Data link
  d) Presentation
  `,
  questionanswer: "b"
},

{
  askquestion: `According to the OSI model,which layer organizes data bits into small data units called frames?
  a) Network
  b) Data link
  c) Transport
  d) Physical
  `, 
   questionanswer: "b"
},

{
  askquestion: `When Compared to OSI model,The functionality of which of the two sub layer is inccorporated in the application layer of TCP/IP model?
  a) Session and Presentation
  b) Transport and Session
  c) Session and Physical
  d) Presentation and Data link
  `,
   questionanswer: "a"
},

{
  askquestion: `Which Layer is Broken Down into MAC and LLC sub layers?
  a) Network
  b) Data link
  c) Session
  d) Physical
  `,
   questionanswer : "b"
},

{
  askquestion : `According to the OSI model, which layer provides services such as file transfer, data base access and email,remote ligin to hosts?
  a) Application
  b) Presentation
  c) Session
  d) Data link
  `,
   questionanswer: "a"
},

{
  askquestion: `At which Layer of OSI Model does HUB operate?
  a) Network
  b) Physical
  c) Session
  d) Data link
  `,
   questionanswer: "b"
},

{
  askquestion: `Which layer of OSI model Corresponds to TCP?
  a) Network
  b) Transport
  c) Session
  d) Data link
  `,
   questionanswer: "b"
},

]
for(i=0;i<questions.length;i++){
  var answer = questions[i];
  
  quiz(answer.askquestion,answer.questionanswer)
};
console.log("Your high score is: " + score);
console.log("Thanks for play.");



