/*Create an object called car with these properties:

    make → (like "Toyota")

    model → (like "Camry")

    year → (like 2020)

    isElectric → (true/false)

Then print the make and year to the console. */

let car = {
    make: "Toyota",
    model: "Camry",
    year: "2020",
    isElectric: "false",

    start: function () {
        console.log("Engine started");
    },

    stop() {
        console.log("Engine stopped");
    }
}
console.log(car.make)

car.start();
car.stop();