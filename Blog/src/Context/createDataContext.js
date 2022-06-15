import React, {useReducer, createContext} from 'react';

//if we ever want to create another resource.
//we can create a new data context.(customise)
//reducer function , different helper func that contains dispatch (actions), initial state that we call useReducer with.
//actions are the objects, that has all this different callback functions we want to make available to our child components.--
//-- so they can dispatch these actions and change our states.
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  //children are used to pass data to the provider. we're passing our reducer and initial state.
  //value is an object that contain state and dispatch.
  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //actions === {addBlogPost: (dispatch) => {return () => {}}}
    const boundActions = {};
    for (let key in actions) {
      //key === 'addBlogPost'
      boundActions[key] = actions[key](dispatch);
    }
    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };
  return {Context, Provider};
};
