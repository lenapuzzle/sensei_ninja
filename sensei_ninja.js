class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        return `Ninja's name is: ${this.name}!`;
    }
    showStats(){
        return `The ninja's stats are: \nName - ${this.name}, \nStrength - ${this.strength}, \nSpeed - ${this.speed}, \nHealth - ${this.health}`;
    }
    drinkSake(){
        this.health += 10;
        return `Ninja's Health after drinking sake is: ${this.health}`;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }

    speakWisdom() {
        const message = super.drinkSake();
        console.log(message + " and he is getting healthier and wiser!");
    }
}

const wiseSensei = new Sensei("Master");
console.log(wiseSensei.speakWisdom());
console.log(wiseSensei.showStats());