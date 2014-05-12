// 1. I want to calculate the sum of a list of numbers. The function is called sum.

/* 1. Create a function and name it the sum. Don't forget to set it equal to a variable. 
2. Give it parameters - perhaps (x,y)
3. Tell it to return the sum of the parameters */

// var sum = function(x,y){
// 	return x+y
// };

var sum = function(array){
     sum = 0 
     for (var i in array){
     	sum = sum + array[i] 

     }
     return sum
};
var array = [1,2,3]
console.log(sum(array))

// 2. I want to calculate the average of a list of numbers. The function is called mean.

/* 1. Create a function and name it mean.
2. Give it parameters
3 Tell it to return the sum of the parameters
4. Set this sum equal to another variable - perhaps var total = x+y+z
5. Within the original function you created, create another function - call it whatever you wish.
6. Within this function, have the the new variable (i.e., total) divided by the length of the parameters
*/

/*This is what I interpreted from above*/

// var mean = function(x,y,z){
// 	return x+y+z
// 	var total = x+y+z
// 	var ave = function(){
// 		total/3
// 	};

// };
// /* or much more simplified*/
// var mean = function(x,y,z){
// 	return x+y+z/3
// }
var mean = function(array) {
	total= 0;
	for (var i in array){
		total = total + array[i];
	}
	return total/array.length;
}
var array= [1,2,3]; 
console.log(mean(array));

// (IK) I wrote out the function for sum in this example, but it would have been better to call the method for sum 
// that we already defined above.
//  Like this:  
 var mean= function(array){
 	return sum(array)/array.length;
 }

var array= [1,2,3]; 
console.log(mean(array));

// 3. I want to calculate the median of a list of numbers. The function is called median.

/* 1. Create a function and name it the median with parameters.
2. Sort those parameters by length and rename it something like numlength
3. Create an if/else statement that says if the length of the array divided by 2 is 0, then take the average of the two middle numbers.
	if numlength % 2 ==== 0
		console.log(((numlength/2) - 1)) + ((numlength.length/2)) / 2)
4. Create the else statement which returns the middle number if the list has an odd number of parameters.
	else numlength % 2 != 0


		console.log((numlength - 1) / 2)

*/

// var median=function(numbers) {
    
//     numlength = numbers.length;
//     numbers.sort();
//     if (numlength % 2 === 0) { 
//         console.log((numlength/2)-1) + ((numlength.length/2))/2;
//     } 
//     else { 
    	
// 		console.log((numlength - 1) / 2);

//     }

// };
var median=function(array) {
    
    numlength = array.length;
    //(IK) we want the length of the array so we can access the positioning or the index
    var	middle_index=((numlength - 1) / 2);
    // here we defined the middle position or index
    array.sort();
    // this is an already defined function that sorts the array
    if (numlength % 2 === 0) {
    // this verifies that the array has an even number of numbers in it 
     middle_index=Math.floor(middle_index);
     // this is an already defined function that rounds the index if needed
     var total=array[middle_index]+array[middle_index+1];
     //here we defined the var total to add one index to our new middle index so that we could......
     return console.log(total/2);
     // divide that sum by two to get the median....Whew....
    } 
    else { 
   
   return console.log(array[middle_index]);
   // this returns our middle index if the number of indexes is odd. 
    }

};
    var array= [1,2,3,4]; 
console.log(median(array));


// (IK) Ok, so for my reflection, this one was a doozy. I couldn't have done it without a whole lot of help from the pairs 
// that I meet up with every Saturday. I saw where everyone was going with their code, and it pushed me in the direction we went.
// The toughest one was the median code. I put in some comments, so check those out if it's confusing. Ultimately, we had to 
// figure out code for if the number of indexes, or places, in the array was even or if the number was odd. So we use an if /else 
// statement. We also had to use a couple of predefined methods in order to get it to act right, like array.sort, and Math.floor. 
// The first one sorts the array, and the second one rounds the number we get back from the division. It took a minute to figure
// that one out. 