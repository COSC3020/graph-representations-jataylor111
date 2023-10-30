function convertToAdjList(adjMatrix) {
    var adjList = [];
        for(var i = 0; i < adjMatrix.length; i++) {
            adjList[i] = [];
            for(var j = 0; j < adjMatrix[i].length; j++) {
                if(adjMatrix[i][j] === 1) {
                    adjList[i].push(j);
                }
            }
        }
    return adjList;
}
