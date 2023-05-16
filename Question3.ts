let user_value: any = 30;

function fib(value: any) {
  if (value == 0 || value == 1) {
    return value;
  } else {
    let temp: any = [0, 1];
    for (let i = 0; i < value - 2; i++) {
      let x = temp[temp.length - 1] + temp[temp.length - 2];
      temp.push(x);
    }
    console.log(temp);
    return temp[temp.length - 1];
  }
}

console.log(fib(user_value));
