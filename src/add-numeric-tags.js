// Find all the labels
var labels = document.getElementsByClassName('filter-item');
var total = 0.0;
for (var i = 0; i < labels.length; i++) {
  var element = labels[i];
  var scale = element.querySelector('.name');
  var count = element.querySelector('.count');
  if (scale && count) {
    scale = parseFloat(scale.innerHTML);
    count = parseInt(count.innerHTML);
    // Filter out any non-numeric labels.
    // Also, protect against with non-numeric counts (which shouldn't
    // happen, but...).
    if (!isNaN(scale) && !isNaN(count)) {
      total += scale * count;
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