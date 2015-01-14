var next = require('amp-next');


var arr = ['a', 'b', 'c'];

next(arr, 'a'); //=> b
next(arr, 'b'); //=> c

// When the last item of the array is specified to fetch the next item from the first item of the array will be returned.
next(arr, 'c'); //=> a
