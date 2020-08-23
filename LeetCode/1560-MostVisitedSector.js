/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
    let currentSector = rounds[0];
    let visitCount = {};
    updateVisitCount(currentSector);
  
    for (let i = 0; i < rounds.length; i++) {
      let checkPoint = rounds[i];
      while (currentSector !== checkPoint) {
        currentSector = currentSector < n ? currentSector + 1 : 1;
        updateVisitCount(currentSector);
      }
    }
  
    const maxVisit = Math.max(...Object.values(visitCount));
    const sectors = Object.keys(visitCount).filter(k => visitCount[k] === maxVisit).sort((a, b) => Number(a) - Number(b));
    return sectors;
  
    function updateVisitCount(currentSector) {
      visitCount[currentSector] = (visitCount[currentSector] || 0) + 1;
    }
  };
  
  console.log('test1', mostVisited(4, [1,3,1,2]));
  console.log('test2', mostVisited(2, [2,1,2,1,2,1,2,1,2]));
  console.log('test3', mostVisited(7, [1,2,3,4,5,6,7]));
  console.log('test4', mostVisited(10, [7, 4, 5, 3, 1, 3, 9, 3]));