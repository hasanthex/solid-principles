class Calculate {
  getCalculation(){}
}

class MeterToInches extends Calculate{
  constructor(meter){
    super();
    this.meter = meter;
  }

  getCalculation(){
    return this.meter * 39.3701;
  }
}

class CentimeterToInches extends Calculate{
  constructor(centemeter){
    super();
    this.centemeter = centemeter;
  }

  getCalculation(){
    return this.centemeter * 0.393701;
  }
}

class KilometerToInches extends Calculate{
  constructor(kilometer){
    super();
    this.kilometer = kilometer;
  }

  getCalculation(){
    return this.kilometer * 39370.1;
  }
}

function getTotalInches(data_list){
  return data_list.reduce((total, item) => {
    total += item.getCalculation();
    return total;
  }, 0);
}

console.log(getTotalInches([
  new MeterToInches(10),
  new CentimeterToInches(10),
  new KilometerToInches(2)
]));
