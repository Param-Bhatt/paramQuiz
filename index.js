var readlineSync = require('readline-sync');
var chalk = require('chalk');
const log = console.log;

var questions = [
  {
    q :"Who killed the Mad King ?",
    ans : "Jaime Lannistor"
  },
  {
  q : "Who killed Eddard Stark ?",
  ans : "Joffrey Baratheon "
  },
  {
  q : "Who killed Robert Baratheon ?",
  ans : "Circe Lannister "
  },
  {
  q : "Who killed Rob Stark ?",
  ans : "Roose Bolton "
  },
  {
  q : "Who killed Catelyn Stark ?",
  ans : "Black Walder Rivers "
  },
  {
  q : "Who killed Joffrey Baratheon ?",
  ans : "Olenna Tyrrel "
  },
  {
  q : "Who killed Lysa Arryn ?",
  ans : "Peter Baelish "
  },
  {
  q : "Who killed Oberyn Martel ?",
  ans : "Sir Gregor Clegane "
  },
  {
  q : "Who killed Ygritte ?",
  ans : "Unnamed soldier "
  },
  {
  q : "Who killed Tywinn Lannister ?",
  ans : "Tyrion Lannister "
  },
  {
  q : "Who killed Mance Raider ?",
  ans : "Jon Snow "
  },
  {
  q : "Who killed Daenerys Targerian ?",
  ans : "Jon Snow "
  },
  ];
var score = 0;
  
function compute(no){
  log(chalk.blue(no.q));
  answer = readlineSync.question("Your answer : ");
  if(answer === no.ans){
    log(chalk.bold.green("Correct!!"))
    score += 1;
  }
  else{
    log(chalk.bold.red("Wrong :("));
  }
  log(chalk.bgYellow("Score : "+score));
}
users = [];
function quiz(){
  name = readlineSync.question(chalk.white("Please enter your name : "));
  for(var i = 0; i < questions.length; i++){
    compute(questions[i]);
  }
  user = {
    uname : name,
    correct : score
  }
  users.push(user);
  log(chalk.bold.bgGreen("*******************************"));
  log(chalk.bold.bgGreen("You scored total "+score+" points"));
}

function attempt(){
  quiz();
}

attempt();
 