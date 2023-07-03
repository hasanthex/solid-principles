class Bird {
    fly(){
        console.log("I can fly")
    }
}

class Duck extends Bird {
    quack(){
        console.log("I can quack")
    }
}

class Penguin extends Bird {
    fly(){
        console.log("I can't fly")
    }

    swim(){
        console.log("I can swim")
    }
}

function makeBirdFly(bird){
    bird.fly()
    bird.swim()
}


const duck = new Duck()
const peguin = new Penguin()

makeBirdFly(duck)
makeBirdFly(peguin)