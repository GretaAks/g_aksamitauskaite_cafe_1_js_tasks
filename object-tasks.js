console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks= [
       {name: "lemonade", price: 50},
       {name: "lime", price: 10}
      ]
      function sortDrinksByPrice(drinks) {
        return drinks.sort((a,b)=> a.price - b.price)
        
      }
      console.log(sortDrinksByPrice(drinks));  
}

console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const things = [
    {}, "Brutus", 300 ,
    { piano: 500 }, "Brutus", 400 ,
    { piano: 500, stereo: 300 }, "Caligula", 440 
    ]
    function stolenThings(things, name, value) {
        things[name] = value;
        return things.assign(things,name,value);
        
    }
    console.log(things);
}

console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    const family = {
        '-3': { m: "great grandfather", f: "great grandmother" },
        "-2": { m: "grandfather", f: "grandmother" },
        "-1": { m: "father", f: "mother" },
        0: { m: "me!", f: "me!" },
        1: { m: "son", f: "daughter" },
        2: { m: "grandson", f: "granddaughter" },
        3: { m: "great grandson", f: "great granddaughter" },
    };
    function generation(x,y) {
        if (x === 0) {
            return "me!";
        } else if (x === -3 && y == "m") {
            return "great grandfather";
        } else if (x === -2 && y == "m") {
            return "grandfather";
        } else if (x === -1 && y == "m") {
            return "father";
        } else if (x === -3 && y == "f") {
            return "great grandmother";
        } else if (x === -2 && y == "f") {
            return "grandmother";
        } else if (x === -1 && y == "f") {
            return "mother";
        } else if (x === 3 && y == "m") {
            return "great grandson";
        } else if (x === 2 && y == "m") {
            return "grandson";
        } else if (x === 1 && y == "m") {
            return "son";
        } else if (x === 3 && y == "f") {
            return "great granddaughter";
        } else if (x === 2 && y == "f") {
            return "granddaughter";
        } else if (x === 1 && y == "f") {
            return "daughter";
        }
    }
    console.log(family);
        } 
    
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
const tileHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
    ]

    function maximumScore(tileHand) {
        let sum = 0;
        tileHand.forEach(el => sum += el.score);
        return sum;
    
    }
    console.log(maximumScore(tileHand));
}

console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{
const objects= [
     { "baseball bat": 20 },5, 
     { skate: 10, painting: 20 },19, 
     { skate: 200, painting: 200, shoes: 1 },400
    ]
    function calculateDifference(obj, limit){
        return (Object.values(obj)).reduce((a, b) => a + b) - limit
    
      
      }
    console.log(calculateDifference(objects));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    const arrays = [
        { a: 1, b: 2 },
        { shrimp: 15, tots: 12 },
        {},
    ]
    
    function toArray(a) {
        return Object.entries(a);
    }
    console.log(toArray(arrays));
}

console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    const inksL=({
        "cyan": 23,
        "magenta": 12,
        "yellow": 10
    });
    ({
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    });
    ({
        "cyan": 700,
        "magenta": 700,
        "yellow": 0
    });
    

      function inkLevels(inks) {
        return Math.min(...Object.values(inks))
   }
    console.log(inkLevels(inksL));
}

console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50,
        painting: 20000
      }

    function calculateLosses(stolenItems) {
	let arr = Object.values(stolenItems);
	if(arr.length === 0) {
		return "Lucky you!"
	} else {
		return arr.reduce(function(a, b){
		return a + b;
	}, 0 )
	}
}
console.log(calculateLosses(stolenItems));
}
console.groupEnd();
