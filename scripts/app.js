console.log("Grootagatchi!")
 
/* MVP
Brief overview
-Goal is to evolve groot through some stages 
-Grow seedling Groot by watering him consistently for a specific amount of time.
-After specific time groot will sprout to baby groot 
-if groot doesn't get watered he will die
-after groot sprouts into baby groot, he needs to be cared for a little more 
-feed (water/fertilizer) 
-attention (spend time?)
-sleep (for rest)

-When user clicks start, the first meter appears, and seedling needs to be watered
-When user clicks the start (button) at the top of the body's page, the meter will begin
-to water the seedling press a button/icon that waters the seedling
-water about 30s, if button is nt pressed when meter goes down, the game is over
-if consisitently watered seedling changes into a baby groot
-after change, 3 other similar meters pop up 
- along with meters 3 other buttons pop up
-all 3 meters are the same but have about 20s or 15s to be press,
- if one meter goes down game over, groot dies,
-all buttons have to be managed consistently for the game to keep going
-goal is just to keep groot alive as long as possible
*/


// Create a repo for your tomagotchi pet ~
// make a commit after you finish each one of the following ~
// Instatiate your Tomagotchi ~
// Display a character of your choice on the screen to represent your pet ~
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age (timer?)
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes ~
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


// 1. Step One 
// build pet in object class
// when pet name is added in submit input, the name will be created into this object class
// stub it up

const groot = {
name: "",
age: 0,
}



// eliminated class object, too confusing for me still!
const grootagotchi = {
   // for metrics make sure to change back to 0 the limit is 10
        hunger: 10, 
        play: 10,
        sleep: 10,
        timer: null,
        time: 30,
    

    // 2. Step Two
    // display metrics of pet
    // -age
    // -hunger
    // -attention 
    // -sleep
    
    // build a timer for age as time goes down, groot's age grows by the second.
    startTime(){
        grootagotchi.timer = setInterval(grootagotchi.reduceTime, 1000);
    },

    reduceTime(){
        grootagotchi.time--; 
        if(grootagotchi.time <= 0) {
            groot.age++;
        }
    },


}
grootagotchi.startTime();
// create a start button that will function startTime

// have no clue what I'm doing but I'm trying to create a prompt for user to input a name 
// tried reading jquery docs on .html() and .confirm()

// const createName = $("Name your Grootagotchi:", "").confirm();
//     $("#user-name").html() = createName;
//     if (createName == null || createName.replace(/\s/g, '') == "") {
//         createName = "Groot";
//         $("#user-name").html() = createName;
//     }

// source I used https://api.jquery.com/ready/
// not working still need help 
$(document).ready(function(){
    const createName = function(seedling){

            const seedling = $("#input-name").val();
            seedling = "Hello Groot seedling," + " " + seedling;
            console.log("Hello Groot seedling," + "" + seedling);
            $("#output-name").text(seedling);
        };

    $("#submit-name").click(function() {
        createName();
    });
    
});



// Step 3.
// make buttons for metrics, lets sanity check first, maybe make a create method later?

// click water button functionality

const clickWater = function clickWater(event){
    console.log("clicked a water buttton")
}
$('#water').on('click', clickWater);


const clickPlay = function clickPlay(event){
    console.log("clicked a play buttton")
}
$('#play').on('click', clickPlay);

// click sleep button, not working

const clickSleep = function clickSleep(event){
    console.log("clicked a sleep buttton")
}
$('#sleep').on('click sleep', clickSleep);




