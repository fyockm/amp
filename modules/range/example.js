var range = require('amp-range');


range(10); //=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
range(1, 11); //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
range(0, 30, 5); //=> [0, 5, 10, 15, 20, 25]
range(0, -10, -1); //=> [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
range(0); //=> []
