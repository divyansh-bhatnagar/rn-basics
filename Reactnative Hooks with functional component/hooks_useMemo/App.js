
// The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but
//  it returns the memoized value returned by the passed function. It recalculated the value 
//  only when one of its dependencies change.
//  It is useful to avoid expensive calculations on every render when the returned value is not going to change.


import React, {useState, useMemo} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

function App() {
const [number, setNumber] = useState(0)

// function to square the value
function squareNum(number){
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
  }

// Using useMemo
const squaredNum = useMemo(()=> {
	return squareNum(number);
}, [number])
const [counter, setCounter] = useState(0);

// Change the state to the input
const onChangeHandler = (value) => {
  setNumber(value);
}
// Increases the counter by 1
const counterHandler = () => {
	setCounter(counter + 1);
}
return (
<View>	
  <Text>Welcome to the Memo World</Text>
	<TextInput placeholder="Enter a number"
    onChangeText={onChangeHandler}
    value={number}
    />
		 
		
	<Text>OUTPUT: {squaredNum}</Text>
	<Button onClick= {counterHandler} title= 'Counter ++' />
	<Text>Counter : {counter}</Text>
	</View>
);
}



export default App;



// Output: Now in the above example, we have used the user memo hook, here the function that returns the value 
// i.e squareNum is passed inside the useMemo and inside the array dependencies, 
// we have used the number as the squareNum will run only when the number changes.
//  If we increase the counter and the number remains the same in the input field the squareNum doesn’t run again.