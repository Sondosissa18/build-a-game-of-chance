console.log("the file is loadded");
function answer() {
  console.log("answer is running!");
  let options = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes – definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don’t count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ];

  let number = Math.floor(Math.random() * options.length);
  document.getElementById("answer").innerHTML = options[number];
}
