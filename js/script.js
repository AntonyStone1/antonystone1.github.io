'use strict'



firstFor: for (let num = 0;num < 2 ; num++) {
  for (let size = 0; size < 3; size++) {
    if (size === 2) {
      break firstFor;
    }
    console.log(size);
  }
} 