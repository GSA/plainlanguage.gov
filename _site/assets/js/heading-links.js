var anchorForId = function (id) {
  var anchor = document.createElement("a");
  anchor.className = "header-link";
  anchor.href      = "#" + id;
  var idString = id.replace(/-/g, " ");
  anchor.innerHTML = "<span class=\"usa-sr-only\">Anchor link for: " + idString + "</span><i class=\"fa fa-link\"></i>";
  anchor.title = "Anchor link";
  return anchor;
};

var linkifyAnchors = function (level, containingElement) {
  var headers = containingElement.getElementsByTagName("h" + level);
  for (var h = 0; h < headers.length; h++) {
    var header = headers[h];

    if (typeof header.id !== "undefined" && header.id !== "") {
      header.appendChild(anchorForId(header.id));
    }
  }
};

document.onreadystatechange = function () {
  if (this.readyState === "complete") {
    var contentBlock = document.getElementsByClassName("usa-layout-docs")[0];
    if (!contentBlock) {
      return;
    }
    for (var level = 1; level <= 6; level++) {
      linkifyAnchors(level, contentBlock);
    }
  }
};