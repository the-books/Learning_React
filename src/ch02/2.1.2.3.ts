let div;
const container = document.getElementById('container');

for (var i = 0; i < 5; i++) {
  div = document.createElement('div');
  div.onclick = function() {
    alert('#' + i);
  }
  container.appendChild(div);
}
