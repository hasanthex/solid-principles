class Device {

  constructor(name='', type='', model=''){
    this.name = name;
    this.type = type;
    this.model = model;
  }

  rining(){
    if(this.name && this.type && this.model){
      console.log(`${this.type} Ringing & model is ${this.name} - ${this.model}`);
    } else {
      this.errorLogged("Missing");
    }
    return true;
  }

  errorLogged(message){
    console.log(message);
    return true;
  }

}

const device = new Device("Nokia", "Mobile", "2600");
device.rining();  // Mobile Ringing & model is Nokia - 2600
