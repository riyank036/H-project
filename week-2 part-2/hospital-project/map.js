const arr = [1,6,8,68,9,5,6,3];
const oddNumber = arr.filter((n) => {
    if(n % 2 !== 0) {
        return true;
    } else {
        return false;
    }
})

console.log(oddNumber);