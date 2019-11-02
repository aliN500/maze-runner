webpackHotUpdate("static/development/pages/index.js",{

/***/ "./algorithms/BFS.js":
/*!***************************!*\
  !*** ./algorithms/BFS.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-continue */

/* eslint-disable indent */


function getNeighbors(currentNode, grid) {
  var array = [];
  var row = currentNode.row,
      col = currentNode.col;
  if (row > 0) array.push(grid[row - 1][col]);
  if (col > 0) array.push(grid[row][col - 1]);
  if (row < grid.length - 1) array.push(grid[row + 1][col]);
  if (col < grid[0].length - 1) array.push(grid[row][col + 1]);
  return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, function (node) {
    return !node.isVisited && !node.isWall;
  });
}

function updateNeighbors(neighbors) {
  return lodash__WEBPACK_IMPORTED_MODULE_0__["map"](neighbors, function (neighbor) {
    neighbor.isVisited = true;
    return neighbor;
  });
}

function BFS(grid, startNode, endNode) {
  var queue = [];
  var visitedNodes = [];
  queue.push(startNode);
  var i = 0;

  while (queue.length) {
    var currentNode = queue.shift();
    currentNode.isVisited = true;
    visitedNodes.push(currentNode);
    if (currentNode === endNode) return visitedNodes;
    var neighbors = getNeighbors(currentNode, grid);
    queue = lodash__WEBPACK_IMPORTED_MODULE_0__["concat"](queue, neighbors);

    if (++i > 100) {
      console.log('OVERFLOEW BREAK');
      break;
    }
  }

  return visitedNodes;
}

/* harmony default export */ __webpack_exports__["default"] = (BFS);

/***/ })

})
//# sourceMappingURL=index.js.b300265f3561702ecc52.hot-update.js.map