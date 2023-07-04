/**
 * SOLID : Open-closed Principle
 * Example : 1
 * Details: Here we added modules (%) operator, which is violates the Open-Closed Principle
 **/
const actions = {
  '+': 'add',
  '-': 'minus',
  '*': 'multi',
  '/': 'divided',
  '%': 'modulus'
}

function add(num1, num2){
  return num1 + num2;
}
function minus(num1, num2){
  return num1 - num2;
}
function multi(num1, num2){
  return num1 * num2;
}
function divided(num1, num2){
  return num1 / num2;
}
function modulus(num1, num2){
  return num1 % num2;
}

function mathCalculation(num1, num2, operator){
  const opt = actions[operator];
  return eval(opt + `(${num1}, ${num2})`);
}

const math = mathCalculation(50, 2,'+');  // 52
// const math = mathCalculation(50, 2,'-');  // 48
// const math = mathCalculation(50, 2,'*');  // 100
// const math = mathCalculation(50, 2,'/');  // 25
// const math = mathCalculation(50, 2,'%');  // 0
console.log(math);
