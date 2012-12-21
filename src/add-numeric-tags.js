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

function totalIssueItems() {
  // Find all the data
  var costs = document.getElementsByClassName('issues')[0].getElementsByClassName('label');
  var total = 0;
  for (var i = 0; i < costs.length; i++) {
    var element = costs[i];
    var cost = parseFloat(element.getAttribute('data-name'));
    if (!isNaN(cost)) {
      total += cost
    }
  }
  return total;
}

function createSummaryHangPoint(rootElement) {
  var fakeInfo = document.createElement('div');
  fakeInfo.className = 'info-secondary';
  progBar.appendChild(fakeInfo);
  hangPoint = fakeInfo;
  return fakeInfo;
}

function createSummaryDisplay(description) {
  var display = document.createElement('span');
  display.innerHTML = description;
  display.className = 'open';
  return display;
}

function createIssueDisplay(description) {
  var display = document.createElement('span');
  display.innerHTML = description;
  display.className = 'footer-text';
  return display;
}

var summaryHangPoint = document.querySelector('.info-secondary');
var issueHangPoint = document.querySelector('.list-browser-footer');
var summaryTotalDescription = "Total estimate: " + totalFilterItems().toString();
var issueTotalDescription = "Total estimate: " + totalIssueItems().toString();

if (!summaryHangPoint) {
  var progBar = document.querySelector('.sidebar-milestone-widget');
  summaryHangPoint = progBar;
  summaryHangPoint.appendChild(createSummaryHangPoint(progBar));
} else {
  summaryTotalDescription = "| " + summaryTotalDescription;
}

if (!issueHangPoint) {
  var progBar = document.querySelector('.list-browser-footer');
  issueHangPoint = progBar;
  issueHangPoint.appendChild(createIssueHangPoint(progBar));
}

summaryHangPoint.appendChild(createSummaryDisplay(summaryTotalDescription));
issueHangPoint.appendChild(createIssueDisplay(issueTotalDescription));