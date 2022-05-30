let input = document.querySelector('#input');
let searchButton = document.querySelector('#search');

searchButton.addEventListener('click', function (e) {
  e.preventDefault();

  // Get input data
  let word = input.value;
  // call API , get data
  if (word === '') {
    alert('Word is required');
    return;
  } else {
  }
});
