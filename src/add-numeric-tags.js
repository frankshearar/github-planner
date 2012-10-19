var labels = document.getElementsByClassName('filter-item');
var total = 0.0;
for (var i = 0; i < labels.length; i++) {
    element = labels[i];
    var scale = element.querySelector('.name');
    if (scale) {
      scale = scale.innerHTML;

      var count = element.querySelector('.count');

      if (count) {
        count = count.innerHTML;

        scale = parseFloat(scale);
        count = parseInt(count);
        if (!isNaN(scale) && !isNaN(count)) {
          total += scale * count;
        }
      }
    }
}

var display = document.createElement('span')
display.innerHTML = "| Total estimate: " + total.toString();
display.className = 'open';
console.log("1");
document.querySelector('.info-secondary').appendChild(display);
console.log("2");