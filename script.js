//  Earth has been attacked by aliens. You are the captain on a mission to destory every alien ship. 
// There are 6 aliens. They attack one at a time. You can only attack the aliens in order. After you destroyed a ship, you have the option to retreat 

// You attack the first ship. If the ship survives then it can attack you. If you destory the ship you have the option to attack the next ship or to retreat.
//  You win if all alients are destoryed. You lose the game if you are destroyed.  

// Ship Properties
// hull is the same as hitpoints. If hull reaches 0or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target
// Your spaceship, the USS Assembly should have the following properties:

// hull - 20
// firepower - 5
// accuracy - .7
// The alien ships should each have the following ranged properties determined randomly:

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8
// You could be battling six alien ships each with unique values.

const ussAssembly=(
    hull:20; 
    firepower:5;
    accuracy:.7;
    isAlive:true;
)

// const alien={

// }

this.hull=Math.floor(Math.random()*4)+3;
this.firepower=Math.floor(Math.random()*3)+2;
this.accuracy= (Math.floor(Math.random()*3)+6)/10;

class ship{
    constructor(name,hull,firepower,accuracy){
        this.name= name; 
        this.hull= hull;
        this.firepower= firepower;
        this.accuracy=accuracy;
    }
}
const ussAssembly= ussAssembly