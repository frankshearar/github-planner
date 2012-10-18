var labels = document.getElementsByClassName("filter-item");
var total = 0.0;
labels.forEach(function(element, index, array) {
    var n = parseFloat(labels.body);
    if (!n.isNan()) {
      total += n;
    }
  });


// the bodies of spans with class "label" that are numbers