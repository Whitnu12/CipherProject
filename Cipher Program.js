var number = document.getElementById('number');

function cipher(str, num) {
  num = num % 26;
  var lowerString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerString.length; i++) {
    var currentLetter = lowerString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
}

var encryptButton = document.getElementById('startEncrypt');
encryptButton.addEventListener('click', function (event) {
  event.preventDefault();
  var input = document.getElementById('name').value;
  var number = document.getElementById('number').value;
  var result = cipher(input, number);
  document.getElementById('result').innerHTML = result;
});
