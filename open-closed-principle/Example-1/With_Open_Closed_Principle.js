const balls = {
  '1': 'OneRun',
  '2': 'TwoRun',
  '3': 'ThreeRun',
  '4': 'FourRun',
  '5': 'FiveRun',
  '6': 'SixRun',
  'WB': 'OneRun',
  'NB': 'OneRun',
}
class Run {
  getRun(){};
}
class OneRun extends Run {
  getRun() {
    return 1;
  }
}
class TwoRun extends Run {
  getRun() {
    return 2;
  }
}
class ThreeRun extends Run {
  getRun(){
    return 3;
  }
}
class FourRun extends Run {
  getRun(){
    return 4;
  }
}
class FiveRun extends Run {
  getRun(){
    return 5;
  }
}
class SixRun extends Run {
  getRun(){
    return 6;
  }
}

function anOver(runs){
  return runs.reduce((total, run) => {
    let _method = balls[run];
    if(_method){
      let makeRun = eval("new "+_method);
      total = total + makeRun.getRun();
    }
    return total;
  }, 0);
}

const over_1 = [4, 0, 1, 6, 0, 2]; // it's ok for now
let runs = anOver(over_1);
console.log(`1st Over Run Taken : ${runs}`);  // Output # 1st Over Run Taken : 13

const over_2 = [2, 0, 1, "WB", "NB", 4, 1, 0];  // it's ok for now
runs = anOver(over_2);
console.log(`2nd Over Run Taken : ${runs}`); // Output # 2nd Over Run Taken : 10

const over_3 = ["WB", 1, 0, 6, 2, 0, "NB", 0];  // it's ok for now
runs = anOver(over_3);
console.log(`3rd Over Run Taken : ${runs}`); // Output # 3rd Over Run Taken : 11
