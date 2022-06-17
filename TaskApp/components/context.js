import React, {createContext, useState} from 'react';

FlatListData = [
  {
    id: 1,
    title: 'Shoes',
    photo:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'The shoes are in multicolor and its unisex.',
  },
  {
    id: 2,
    title: 'BagPack',
    photo:
      'https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description:
      'The Bag is for tracking with sleeping-bag and contains two days equipment within it and its unisex.',
  },
  {
    id: 3,
    title: 'Dress',
    photo:
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description: 'Cute pretty red dress.',
  },
  {
    id: 4,
    title: 'Formal outfit for men',
    photo:
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
    description:
      'Its formal outfit dress code for formal lovers with watch , wallet , shirt and jeans.',
  },
  {
    id: 5,
    title: 'Formal outfit for women',
    photo:
      'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
    description:
      'Its formal outfit dress code for formal lovers with women shirt, jeans and belly-shoes.',
  },
  {
    id: 6,
    title: 'Watch',
    photo:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    description: 'Its wrist watch with analog functionality.',
  },
];

export const Context = React.createContext();

export default ContextProvider = ({children}) => {
  //Initial State
  const [liked, setLiked] = useState([]);

  return (
    <Context.Provider
      value={{
        liked: liked,
        setLiked: data => {
          console.log('data-liked:', data);
        },
        FlatListData,
      }}>
      {children}
    </Context.Provider>
  );
};

// const likeReducer = (state, action) => {
//   switch (action.type) {
//     case 'LIKE':
//       return [
//         ...state,
//         {
//           if(liked.length > 0 liked.) {},
//         },
//       ];
//     case 'UNLIKE':
//       return state.filter(id => id !== action.payload);
//     default:
//       return state;
//   }
// };
