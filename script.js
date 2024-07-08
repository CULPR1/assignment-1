function checkAnswers() {
  const answers = {
    question1: 'anemo',
    question2: 'albedo',
  };
  let score = 0;
  for (let question in answers) {
    const userAnswer = document.getElementById(question).value.toLowerCase();
    if (userAnswer === answers[question]) {
      score++;
    }
  }
  document.getElementById('result').innerText = 'You scored ' + score + '/' + Object.keys(answers).length;
