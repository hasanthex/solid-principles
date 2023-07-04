

function mathCalculation(num1, num2, operator){
  if(operator === '+'){
    return num1 + num2;
  }
  else if(operator === '-'){
    return num1 - num2;
  }
  else if(operator === '/'){
    return num1 / num2;
  }
  else if(operator === '*'){
    return num1 * num2;
  }
  else if(operator === '%'){
    return num1 % num2;
  }
  else {
    throw new Error("Invalid Operator Select");
  }
}


// const math = mathCalculation(50, 2,'+');  // 52
// const math = mathCalculation(50, 2,'-');  // 48
// const math = mathCalculation(50, 2,'*');    // 100
// const math = mathCalculation(50, 2,'/');    // 25
// const math = mathCalculation(50, 3,'%');    // 2

console.log(math);
