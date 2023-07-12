
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

// Ship Class 

class spaceShip{
    constructor(hull,firepower,accuracy){
        this.hull= hull;
        this.firepower= firepower;
        this.accuracy=accuracy;
    }
}

attack(target){
    if (Math.random()<= this.accuracy){
        target.hull -=this.firepower;
        console.log ("Ship Hit!", target.hull);
    }else{
    console.log ("You missed the target!");
    }
}

shipDestroyed(){
    return this.hull <=0;
}
// My ship
const ussAssemble=(20,5,0.7)

// Alien Ships
const alienShips[]; for (let i=0; i<6, i++)

//  Alien Ship ranged properties 
this.hull=Math.floor(Math.random()*4)+3;
this.firepower=Math.floor(Math.random()*3)+2;
this.accuracy= (Math.floor(Math.random()*3)+6)/10;

const ussAssembly= ussAssembly