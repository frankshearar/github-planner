function totalFilterItems() {
  // Find all the labels
  var labels = document.getElementsByClassName('filter-item');
  var total = 0.0;
  for (var i = 0; i < labels.length; i++) {
    var element = labels[i];
    var scale = element.querySelector('.name');
    var count = element.querySelector('.count');
    if (scale && count) {
      // The regex ensures that scale contains _only_ a number. In particular,
      // this filter will reject Huboard style labels like "2 - Working".
      isNumber = /^[0-9]+(\.[0-9]+)?$/.test(scale.innerHTML);
      scale = parseFloat(scale.innerHTML);
      count = parseInt(count.innerHTML);
      // Filter out any non-numeric labels.
      // Also, protect against with non-numeric counts (which shouldn't
      // happen, but...).
      if (isNumber && !isNaN(scale) && !isNaN(count)) {
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
    // The regex ensures that scale contains _only_ a number. In particular,
    // this filter will reject Huboard style labels like "2 - Working".
    var element = costs[i];
    var label = element.getAttribute('data-name')
    var cost = parseFloat(label);
    isNumber = /^[0-9]+(\.[0-9]+)?$/.test(label);
    if (isNumber && !isNaN(cost)) {
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

function createIssueHangPoint(rootElement) {
  var fakeInfo = document.createElement('div');
  fakeInfo.className = 'list-browser-footer';
  return fakeInfo;
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
  var progBar = document.querySelector('.issue-list-group');
  issueHangPoint = createIssueHangPoint(progBar)
  progBar.appendChild(issueHangPoint);
}

summaryHangPoint.appendChild(createSummaryDisplay(summaryTotalDescription));
issueHangPoint.appendChild(createIssueDisplay(issueTotalDescription));