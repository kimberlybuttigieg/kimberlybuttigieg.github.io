// Rating focus
var ratingButtons = document.getElementsByClassName('rating');
var active = 0;
for (var i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener('click', changeRating);
  ratingButtons[i].addEventListener('focus', changeRating);
}

function changeRating(e) {
  if (active > 0) {
    document.getElementById('rating' + active).classList.remove('focus');
  }

  switch (e.target.id) {
    case 'rating1':
      active = 1;
      break;
    case 'rating2':
      active = 2;
      break;
    case 'rating3':
      active = 3;
      break;
    case 'rating4':
      active = 4;
      break;
    case 'rating5':
      active = 5;
      break;
    default:
      active = 0;
  }

  document.getElementById('rating' + active).classList.add('focus');
  document.getElementById('final').innerHTML = active;
}

// Submit
var submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  if (active > 0) {
    document.getElementById('pane-rating').style.display = 'none';
    document.getElementById('pane-success').style.display = 'flex';
  }
});
