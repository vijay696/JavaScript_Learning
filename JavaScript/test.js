// Javascript ptogram for the above approach

// Function to print the unique sub-string of length n
function result(s, n) {
    // Create a new Set to store the unique sub-strings
    let st = new Set();
    
    // Loop through each character in the string s
    for (let i = 0; i < s.length; i++) {
        // Initialize an empty string
        let ans = "";
    
        // Loop through each character starting from index i
        for (let j = i; j < s.length; j++) {
        // Add the current character to the string ans
        ans += s[j];
    
        // If the length of the string ans is equal to n,
        // then add it to the set and break out of the loop
        if (ans.length === n) {
            st.add(ans);
            break;
        }
        }
    }
    
    // Print the set of unique sub-strings
    for (let it of st) {
        console.log(it + " ");
    }
    }
    
    // Driver code
    let s = "abca";
    let n = 3;
    result(s, n);
    
    // This code is contributed by codebraxnzt
    

 

// Javascript program to accept an amount
// and count number of notes

	// function to count and
	// print currency notes
	function countCurrency(amount)
	{
		let notes = [ 2000, 500, 200, 100, 50, 20, 10, 5, 1 ];
		let noteCounter = Array(9).fill(0);
		
		// count notes using Greedy approach
		for (let i = 0; i < 9; i++) {
			if (amount >= notes[i]) {
				noteCounter[i] = Math.floor(amount / notes[i]);
				amount = amount % notes[i];
			}
		}
		
		// Print notes
	document.write("Currency Count ->" + "<br/>");
		for (let i = 0; i < 9; i++) {
			if (noteCounter[i] != 0) {
				document.write(notes[i] + " : "
					+ noteCounter[i] + "<br/>");
			}
		}
	}
	

// driver code

	let amount = 1200;
	countCurrency(amount);

    {
        let sayHello = "Hello"
        var greeting = "Good Morning"
        }
        console.log(greeting);
        console.log(sayHello);
