let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
const glideMixin = (obj) => {
    obj.glide = function () {
        console.log('Test!!!');
    }
};

// declaring a glideMixin variable that is a function.


glideMixin(bird);
glideMixin(boat);

//using the glideMixin on the bird and boat object to give it the glide method.


bird.glide();
boat.glide();
// running the code
