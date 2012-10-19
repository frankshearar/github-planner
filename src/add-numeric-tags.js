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

var hangPoint = document.querySelector('.info-secondary');
var totalDescription = "Total estimate: " + total.toString();

if (!hangPoint) {
  var progBar = document.querySelector('.sidebar-milestone-widget');
  var fakeInfo = document.createElement('div');
  progBar.appendChild(fakeInfo);
  hangPoint = fakeInfo;
} else {
  totalDescription = "| " + totalDescription;
}

var display = document.createElement('span');
display.innerHTML = totalDescription;
display.className = 'open';
hangPoint.appendChild(display);