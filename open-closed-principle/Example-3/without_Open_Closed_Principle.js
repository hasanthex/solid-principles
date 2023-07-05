class MeterToInches{
  constructor(meter){
    this.type = 'M';
    this.meter = meter;
  }
}

class CentimeterToInches{
  constructor(centemeter){
    this.type = 'CM';
    this.centemeter = centemeter;
  }
}

class KilometerToInches{
  constructor(kilometer){
    this.type = 'KM';
    this.kilometer = kilometer;
  }
}

function getTotalInches(data_list){
  return data_list.reduce((total, item) => {
    if(item.type === 'M'){
      total += item.meter * 39.3701;
    } else if(item.type === 'CM'){
      total += item.centemeter * 0.393701;
    } else if(item.type === 'KM'){
      total += item.kilometer * 39370.1;
    }
    return total;
  }, 0);
}

console.log(getTotalInches([
  new MeterToInches(10),
  new CentimeterToInches(10),
  new KilometerToInches(2)
]));
