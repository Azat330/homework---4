//------------------------------------------------- ex 1

function flattens(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            newArr = newArr.concat(flattens(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

flattens([14, [1, [[[3, []]], 1], 0]]);
flattens([1, [3, 4, [1, 2]], 10]);

//--------------------------------------------------- ex 2

function sumDigits(n) {
  if (n < 10) {
    return n
  }
    return (n - 1) % 9 + 1;
}
sumDigits(14);
sumDigits(29);
sumDigits(999999999999);


//----------------------------------------------------- ex 3

function recursiveRotates(arr, n) {
    if ( arr > 1 ){
      return [];
    } 
    else {
  let index = -1;
    while (++index < n)
      arr.unshift(arr.pop());
      return arr;
    }
}
recursiveRotates([1, 2, 3, 4, 5], 3);


//---------------------------------------------------- ex 4

const invertObject = obj => Object.entries(obj).reduce((asd, [key, val]) => {
    if (!asd[val]) {
        asd[val] = key
    } else if (Array.isArray(asd[val])) {
        asd[val].push(key)
    } else {
        asd[val] = [asd[val], key]
    }
    return asd
}, {})
invertObject({ a: '1', b: '2', c: '2'  });
invertObject({ a: '1', b: '2', c: '2', d: '2'  });
invertObject({ a: '1', b: '2' });

//------------- ex 5 -