window.onload = init;

function bubbleSortRandomFN(){
	var data = [];
	var arrayMax = 40;
	var limit = arrayMax + 1;
	for (var i = 0; i < arrayMax; i++) {
	  //data.push(Math.floor(Math.random()*limit));
		data[i] = Math.floor((Math.random() * 100) + 1);
	}
	
	bubbleSortFN(data)
}


function bubbleSortFN(data){
	
	if(data.constructor != Array){
		var data = document.getElementById("bubleSortNumbers").value;
		data = data.trim().split(/[  ,]+/).map(Number);
	}
	
	document.getElementById("printRandHere").innerHTML = 
		"Random Numbers are: " + data;
	var len = data.length;
	
	var temp = 0;
	len = data.length
	for (var i = 0; i < len; i++) {	
		for (var j = 0; j < (len - 1); j++) {			
			var swapmade = false;
			if(data[j] > data[j+1]) {
				temp = data[j];
				data[j] = data[j+1];
				data[j+1] = temp;
			};
		}
	}

	document.getElementById("printSortHere").innerHTML = "<br>" + "Sorted Numbers are: " + data;
}


function mergeSortRandomFN(){
	var data = [];
	var arrayMax = 40;
	var limit = arrayMax + 1;
	for (var i = 0; i < arrayMax; i++) {
	  //data.push(Math.floor(Math.random()*limit));
		data[i] = Math.floor((Math.random() * 100) + 1);
	}

	mergeSortFN(data)
}

function mergeSortFN(data){
	
	if(data.constructor != Array){
		var data = document.getElementById("mergeSortNumbers").value;
		data = data.trim().split(/[  ,]+/).map(Number);
	}
	document.getElementById("printRandHere").innerHTML = 
		"Random Numbers are: " + data;
	data = mergeSortGuts(data);
	document.getElementById("printSortHere").innerHTML = "<br>" + "Sorted Numbers are: "  + data; 
}

function mergeSortGuts(data){
	var len = data.length;

  if (data.length < 2)
         return data;
	
	var middle = len / 2;
	var left = data.slice(0, middle);
	var right = data.slice(middle, len);
	
	return merge(mergeSortGuts(left), mergeSortGuts(right));
	
}

function merge (left, right){

	var result = [];

	while (left.length && right.length) {
	     if (left[0] <= right[0]) {
	         result.push(left.shift());
	     } else {
	        result.push(right.shift());
	     }
	}
	
	while (left.length)
	    result.push(left.shift());
	
	while (right.length)
	    result.push(right.shift());

    return result;

}


//QUICK SORT FUNCTION 
function quickSortRandomFN(){
	var data = [];
	var arrayMax = 40;
	var limit = arrayMax + 1;
	for (var i = 0; i < arrayMax; i++) {
	  //data.push(Math.floor(Math.random()*limit));
		data[i] = Math.floor((Math.random() * 100) + 1);
	}
	document.getElementById("printRandHere").innerHTML = 
		"Random Numbers are: " + data;
	data = quickSortFN(data)
	document.getElementById("printSortHere").innerHTML = "<br>" + "Sorted Numbers are: "  + data; 
}

function quickSortNonRandom(data){
	if(data.constructor != Array){
		var data = document.getElementById("quickSortNumbers").value;
		data = data.trim().split(/[  ,]+/).map(Number);
	}	
	document.getElementById("printRandHere").innerHTML = 
		"Random Numbers are: " + data;
	data = quickSortFN(data)
	document.getElementById("printSortHere").innerHTML = "<br>" + "Sorted Numbers are: "  + data; 
}

function quickSortFN(data){

	
	if (data.length == 0) return [];

    var left = [], right = [], pivot = data[0];

    for (var i = 1; i < data.length; i++) {
    	data[i] < pivot ? left.push(data[i]) : right.push(data[i]);
    }

    return quickSortFN(left).concat(pivot, quickSortFN(right));
}



function init() {
	var holder;
	if(holder = document.getElementById("calcBubble"))
		holder.onclick = bubbleSortFN;
	if(holder = document.getElementById("calcBubble"))
		document.getElementById("random").onclick = bubbleSortRandomFN;
	
	if (holder = document.getElementById("calcMerge"))
		holder.onclick = mergeSortFN;
	if (holder = document.getElementById("calcMerge"))
		document.getElementById("random").onclick = mergeSortRandomFN;
	
	if (holder = document.getElementById("calcQuick"))
		holder.onclick = quickSortNonRandom;	
	if (holder = document.getElementById("calcQuick"))
		document.getElementById("random").onclick = quickSortRandomFN;
	
}




















