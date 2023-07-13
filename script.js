
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

class Game{
    constructor(){
        this.ussAssembly= new spaceShip(20,5,0.7);
        this.aliens=[];
        this.generateAliens();   
    }
}

// Alien Ships
generateAliens(){
for (let i=0; i<6, i++){
    const hull=Math.floor(Math.random()*4)+3;
    const firepower= Math.floor(Math.random()*3)+2;
    const accuracy= (Math.floor(Math.random()*3)+6)/10;
    const alienship= new spaceShip(hull, firepower, accuracy)
    this.aliens.push(alienShip);
    }
}

startGame(){
    console.log("Who will win? The aliens or you?")
    this.playRound(0)
}

playRound(index){
    if (index>= this.aliens.length){
        console.log("Congratulations! You won!");
        return;
    }
}

const currentAlien= this.aliens[index];

console.log (`/nRound ${index+1}: USS Assembly attacks Alien Ship ${index+1}`);
this.ussAssembly.attack(currentAlien);

if (currentAlien.isDestroyed()){
    console.log(`Alien ship ${index+1} destroyed!`);
    const choice =prompt(" Do you want to attack the next ship(a) or retreat (r)?");
    if (choice==="a"){
        this.playRound(index+1);
    } else if (choice==="r"){
        console.log(" You retreated. Game Over!");
    }else{
        console.log ("Invalid choice. Game Over!")
    }
}else{
    console.log(`Alien Ship ${index+1} attacks USS Assembly`);
    currentAlien.attack(this.ussAssembly);

    if(this.ussAssembly.isDestroyed()){
        console.log ("Game over! USS Assembly destroyed by alien ship.");
    }else{ 
        this.playRound(index);
    }   
}

const game= new Game();
game.startGame();

