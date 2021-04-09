console.log("Welcome to Grootagatchi!")
 
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
// Hunger (1-10 scale)~
// Sleepiness (1-10 scale)~
// Boredom (1-10 scale)~
// Age (timer?) ~
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet. ~
// Style the page.~ (somewhat)
// Increase your pet's age every x minutes ~
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. ~
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.


// 1. Step One 
// build pet obj w/ props, build obj that consist of game logic
// stub it up

// REMINDER SET METRICS TO ZERO THEN ADJUST METHODS TO INCREASE TO 10
const groot = {
    name: "",
    age: 0,
    hunger: 10, 
    entertained: 10,
    rest: 10,
}
console.log(groot);


// eliminated class object, too confusing for me 
// grootagotchi game logic
const grootagotchi = {
    timer: null,
    time: 10,
    hungertime: 10,
    entertainedtime: 10,
    resttime: 10,

    
    // 2. Step Two TIMERS & METRICS
    // display metrics of pet
    // -age
    // -hunger
    // -attention 
    // -sleep
    // create methods for metrics of groot
    // built a timer for age as time goes down, groot's age grows by the second.
    // need to make this timer visible on screen

    
    increaseAge(){
        grootagotchi.time--; 
        if(grootagotchi.time === 0) {
            groot.age++;
            grootagotchi.evolveSeed(); //calling evolve
            grootagotchi.evolveBaby();
            grootagotchi.evolveKid();
            grootagotchi.gameWon();
            grootagotchi.time = 10; //10 seconds?
            $("#age").text(`Age: ${groot.age} days old`);
        }
    },
    
    ageTimer(){
       setInterval(grootagotchi.increaseAge, 400);
    },

    //  create methods (connect to grow btn) that will minus the obj groot's props,
    // use loops or creat interval timers for them to decrease bar when time increases

    //create a method for hunger/timer that minuses the hunger bar 
    decreaseHunger(){
        grootagotchi.hungertime--; 
        if(grootagotchi.hungertime === 0) {
            groot.hunger--;
            grootagotchi.endGame();
            grootagotchi.hungertime = 10; //10 seconds?
            $("#hunger").text(`Hunger: ${groot.hunger}/10`);
        }
    },
    
    hungerTimer(){
        setInterval(grootagotchi.decreaseHunger, 500);
    },


    // create method/timer that decreases the entertained bar
    decreaseEntertained(){
        grootagotchi.entertainedtime--; 
        if(grootagotchi.entertainedtime === 0) {
            groot.entertained--;
            grootagotchi.endGame();
            grootagotchi.entertainedtime = 10; //10 seconds?
            $("#entertained").text(`Entertained: ${groot.entertained}/10`);
        }
    },
    
    entertainedTimer(){
        setInterval(grootagotchi.decreaseEntertained, 500);
    },


    //create a method that decreases the rest bar
    decreaseRest(){
        grootagotchi.resttime--; 
        if(grootagotchi.resttime === 0) {
            groot.rest--;
            grootagotchi.endGame();
            grootagotchi.resttime = 10; //10 seconds?
            $("#rest").text(`Rest: ${groot.rest}/10`);
        }
    },
    
    restTimer(){
        setInterval(grootagotchi.decreaseRest, 500);
    },

    //Step 4 MORPH PET
    // create a method that will evolve seedling groot to baby groot 
    // once groot's age hits 10 days then he will become baby groot
    // Maiki helped me call the evolve groot within all metric timers 
    
    evolveSeed(){
        if(groot.age > 9) {
            $("img").attr("src", "https://easydrawingguides.com/wp-content/uploads/2019/03/Baby-Groot-10.png");
            $("h2").text("Baby Groot");
         } 
    },
    // originally created a "else if" statement but it didn't work so i'm guessing it exits the code block after first "if".
    // created a 2nd morph
    evolveBaby(){
        if(groot.age > 14) {
            $("img").attr("src", "https://w7.pngwing.com/pngs/952/535/png-transparent-of-groot-illustration-baby-groot-guardians-of-the-galaxy-vol-2-rocket-raccoon-sideshow-collectibles-groot-guardians-of-the-galaxy-fictional-character-action-toy-figures-toy-thumbnail.png");
            $("h2").text("Kid Groot");
        }  
    },
    // 3rd morph
    evolveKid(){
        if(groot.age > 20) {
            $("img").attr("src", "https://static.wikia.nocookie.net/avengers-assemble/images/f/fd/Groot_Animated_Render_02.png/revision/latest?cb=20180324115724");
            $("h2").text("I AM GROOT");
        }  
    },

    // end the game with a prompt
    // currently needs work 
    endGame(){
        if(groot.hunger === 0 || groot.entertained === 0 || groot.rest === 0){
            $("section").text("YOUR GROOT DIED! refresh page to restart!");
        }
    },
    //end game when player reaches certain age 
    gameWon(){
        if(groot.age === 30){
            $("section").text("You won! refresh page to restart!");
        }
    },
    


    //create warning prompts for pet, when metric are low
    // sayPrompts(){}

}
// when clicked start timer for age growth and submit pet's name
$("#submit-name").click(function (){
    grootagotchi.ageTimer();
});
// click hunger bar 
 $("#submit-name").click(function (){
    grootagotchi.hungerTimer();
});
// click entertained bar
$("#submit-name").click(function (){
    grootagotchi.entertainedTimer();
});
// click rest bar
$("#submit-name").click(function (){
    grootagotchi.restTimer();
});


// Step 1 1/2
// create a start button that will function startTime
// Created a function that logs the name of the grootagotchi
// Thanks to Maiki she helped me get rid of the form tag that caused me to refresh page when I would submit a name

const createName = function(){  //realized that it kept logging [object, object] when I would log 
    let seedling = $("#input-name").val();  // .val pulls the value in the input, ref https://api.jquery.com/val/
    seedling = "Hello," + " " + seedling + " Groot";
    console.log("Hello," + "" + seedling + " Groot");
    $("#output-name").text(seedling); // .text() logs the text like prompt on the html
};

$("#submit-name").click(function() {
createName();
});
    




// Step 3. BUTTONS FOR METRICS
// make buttons for metrics, lets sanity check first, maybe make a create method later?
// buttons to increase by one in metrics 

// water button
const clickWater = function clickWater(event){
     console.log("clicked a water buttton");
     if(groot.hunger <= 9){
         groot.hunger++;  //adds 1 hunger to the hunger metric
         $("#hunger").text(`Hunger: ${groot.hunger}/10`); //updates the current hunger bar, cuts out lag time
     }
}
$('#water').on('click', clickWater);

// play button 
const clickPlay = function clickPlay(event){
    console.log("clicked a play buttton");
    if(groot.entertained <= 9){
        groot.entertained++; //adds 1 entertained to the entertained metric
        $("#entertained").text(`Entertained: ${groot.entertained}/10`);
    }
}
$('#play').on('click', clickPlay);

// sleep button
// button should also turn off lights (change color of background?)
const clickSleep = function clickSleep(event){
    console.log("clicked a sleep buttton");
    if(groot.rest <= 9){
        groot.rest++; //adds 1 rest to rest metric
        $("#rest").text(`Rest: ${groot.rest}/10`);
    }
}
$('#sleep').on('click sleep', clickSleep);



