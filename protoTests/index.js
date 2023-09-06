let Animal = {
    eats: true,
    func: function () {
        this.runs = false;
    }
};

function Rabbit (name,color) {
    this.name = name;
    this.runs = true;
    this.color = color;
    this.full = () => {
        return this.name + " is " + this.color;
    }
}

Rabbit.prototype = Animal;

let rabbit = new Rabbit("napo","white");
console.log(rabbit.full());