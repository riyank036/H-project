function sum (n) {
    return n + n;
}

function sub (n) {
    return n - n;
}

function mul (n) {
    return n * n;
}

function div (n){
    return n / n;
}

function calculate (a, b, fun){
    let value1 = fun(a);
    let value2 = fun(b);
    return value1 && value2
}

let ans = calculate(5,15,mul);
console.log(ans);

