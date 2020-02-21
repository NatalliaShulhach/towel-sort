
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) return [];
  let length = matrix.length
  if( matrix && length != 0 ) {
    for( let i= 0; i < length; i++ ){
        if( i % 2 != 0 ){
            matrix[i].reverse();
        }
    }
    return matrix.reduce( function( a, b ){
        return a.concat(b);
    });
} else {
    return [];
}
}
