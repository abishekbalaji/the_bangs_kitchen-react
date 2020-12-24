const pageHeight = () => {
  var pageHeight = 0;

  function findHighestNode(nodesList) {
    for (var i = nodesList.length - 1; i >= 0; i--) {
      if (nodesList[i].scrollHeight && nodesList[i].clientHeight) {
        var elHeight = Math.max(
          nodesList[i].scrollHeight,
          nodesList[i].clientHeight
        );
        pageHeight = Math.max(elHeight, pageHeight);
      }
      if (nodesList[i].childNodes.length)
        findHighestNode(nodesList[i].childNodes);
    }
  }

  findHighestNode(document.documentElement.childNodes);

  // The entire page height is found
  return pageHeight;
};

export default pageHeight;
