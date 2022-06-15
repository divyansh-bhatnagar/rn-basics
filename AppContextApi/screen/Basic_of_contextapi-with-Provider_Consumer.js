//app.js

import React, {useContext, createContext} from 'react';
//import ClassA from './screen/ClassA';

export const FirstName = createContext();

export default const app = () => {
  return (
    <>
    <FirstName.Provider value="John Mac">
      <ClassA />
    </FirstName.Provider>
    </>
  );
};


//classA

import React, {useContext} from 'react';
//import classB from './screen/ClassB';

export default const ClassA = () => {
    return (
        <View>
         <classB />
        </View>
    );
};


//classB

import React, {useContext} from 'react';
//import classC from './screen/ClassC';

export default const ClassB = () => {
    return (
        <View>
         <classC />
        </View>
    );
};


//classC

import React, {useContext} from 'react';
//import FirstName from './screen/app';

export default const ClassC = () => {
    return (
        //whenever we write Consumer that expect a function and we cant directly write it like a component. 
        <>
        <FirstName.Consumer>
         {(fname) => {
            return (
                <View>
                 <Text>{fname}</Text>
                </View>
            );
         }}
        </FirstName.Consumer>
        </>
    );
};
