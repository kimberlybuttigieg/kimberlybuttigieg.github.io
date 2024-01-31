document.getElementById('noButton').addEventListener(
  'click',
  () => {
    document.getElementById('prompt').innerHTML = 'Let me try that again';
    document.getElementById('yesButton').classList.add('large');
    document.getElementById('noButton').classList.add('small');

    document.getElementById('noButton').addEventListener(
      'click',
      () => {
        document.getElementById('prompt').innerHTML = 'What about now?';
        document.getElementById('yesButton').classList.remove('large');
        document.getElementById('noButton').classList.add('small');
        document.getElementById('noButton').classList.add('translated1');

        document.getElementById('noButton').addEventListener(
          'click',
          () => {
            document.getElementById('prompt').innerHTML = 'How about now?';
            document.getElementById('noButton').classList.remove('translated1');
            document.getElementById('noButton').classList.add('translated2');

            document.getElementById('noButton').addEventListener(
              'click',
              () => {
                document.getElementById('prompt').innerHTML = 'You know what?';
                document.getElementById('yesButton').classList.add('hidden');
                document
                  .getElementById('noButton')
                  .classList.remove('translated2');
                document.getElementById('noButton').classList.add('hidden');
                document
                  .getElementById('whatButton')
                  .classList.remove('hidden');
              },

              { once: true }
            );
          },
          { once: true }
        );
      },
      { once: true }
    );
  },
  { once: true }
);

document.getElementById('whatButton').addEventListener('click', () => {
  document.getElementById('prompt').innerHTML = "Let's try this again.";
  document.getElementById('whatButton').classList.add('hidden');
  document.getElementById('okayButton').classList.remove('hidden');
});

document.getElementById('okayButton').addEventListener('click', () => {
  document.getElementById('prompt').innerHTML = 'Will you be my valentine?';
  document.getElementById('okayButton').classList.add('hidden');
  document.getElementById('yesButton').classList.remove('hidden');
  document.getElementById('yesButton2').classList.remove('hidden');
});

var yeses = document.getElementsByClassName('yes');
for (let i = 0; i < yeses.length; i++) {
  yeses[i].addEventListener('click', () => {
    document.getElementById('prompt').innerHTML = 'Yay!!';
    document.getElementById('yesButton').classList.add('hidden');
    document.getElementById('yesButton2').classList.add('hidden');
    document.getElementById('vid').classList.remove('hidden');
    document.getElementById('vid').play();
  });
}
