function totalFilterItems() {
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
  return total;
}

function createHangPoint(rootElement) {
  var fakeInfo = document.createElement('div');
  fakeInfo.className = 'info-secondary';
  progBar.appendChild(fakeInfo);
  hangPoint = fakeInfo;
  return fakeInfo;
}

function createDisplay(description) {
  var display = document.createElement('span');
  display.innerHTML = totalDescription;
  display.className = 'footer-text';
  return display;
}

var hangPoint = document.querySelector('.list-browser-footer');
var totalDescription = "Total estimate: " + totalFilterItems().toString();

if (!hangPoint) {
  var progBar = document.querySelector('.list-browser-footer');
  hangPoint = progBar;
  hangPoint.appendChild(createHangPoint(progBar));
} else {
  totalDescription =  totalDescription;
}

hangPoint.appendChild(createDisplay(totalDescription));