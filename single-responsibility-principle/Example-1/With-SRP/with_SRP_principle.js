class ErrorLogged{

  static logged(message){
    console.log(message);
    return true;
  }

}

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
      ErrorLogged.logged("Missing");
    }
    return true;
  }

}

const device = new Device("Samsung", "Mobile", "A30");
device.rining(); // Mobile Ringing & model is Samsung - A30
