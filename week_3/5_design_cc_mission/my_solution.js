// I worked [by myself, with:] on this challenge

// Your mission description:
// Grab the treasure
// leave dungeon

// Pseudocode
// move up two times
//  move right five times
// move down two times
// grab treasure
// leave dungeon (move right one time)

// Initial Code
var indy= {
	locationXY: (x: 0, y: 0);

     moveUp: function() {this.locationXY.y += 1};
     moveRight: function() {this.locationXY.x += 1};
     moveDown: function() {this.locationXY.y -= 1};
     grabTreasure: function() {};
     exitDungeon: function() {this.locationXY.x += 1};

}

var treasure= {
	locationXY: (x: 6, y: 0);
	grabbedBy: function() this.locationXY.x += 1};

}

indy.moveUp();
indy.moveUp();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveDown();
indy.moveDown();
indy.grabTreasure();
treasure.grabbedBy();
indy.moveRight();
indy.exitDungeon();

// Refactored Code

// I realized that I added one too many moveRight commands, at the end, because the 
// exitDungeon command was in itself a moveRight command. So I took it out.

var indy= {
	locationXY: (x: 0, y: 0);

     moveUp: function() {this.locationXY.y += 1};
     moveRight: function() {this.locationXY.x += 1};
     moveDown: function() {this.locationXY.y -= 1};
     grabTreasure: function() {};
     exitDungeon: function() {this.locationXY.x += 1};

}

var treasure= {
	locationXY: (x: 6, y: 0);
	grabbedBy: function() this.locationXY.x += 1};

}

indy.moveUp();
indy.moveUp();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveRight();
indy.moveDown();
indy.moveDown();
indy.grabTreasure();
treasure.grabbedBy();
indy.exitDungeon();

// Reflection
// I wanted to make this thing much more complicated, but I soon realized that I 
// didn't know how to define the code for them.  I originally wanted to make him say 
// "Sayonara, Suckers!" or make him reach back to grab his hat under a closing door,
// but I didn't know how. So I went with grabbing the treasure, and making it move 
// one space to the right when grabbed. I don't think this code will work, however, because I didn't
// because I don't think it will get past the grabTreasure command.  I didn't know how to 
// define that function.  But other than that, I am confident this would work.
