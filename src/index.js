/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
//===============================

// STATE
import { createStore, combineReducers } from 'redux';
import initialCards from './base.json';
import { bigIntLiteral } from '@babel/types';
// console.log(initialState);
const VISIBILITY_ALL = 'all';
const VISIBILITY_CAUGHT = 'caught';
const VISIBILITY_UNCAUGHT='uncaught';

const initialState = {
    // spreads the "cards": [...] into this spot in initialState
    // it is the equivalent of ...initialCards
    ...initialCards, 
    visibilityFilter: VISIBILITY_ALL
};

// the state is an object
// cards property is an array of objects
// { cards : [ {},{},{} ]}
//===============================

// ACTIONS + ACTION CREATORS
const ACTION_CATCH ='catch';


function catchCard(id){
    return {
        type: ACTION_CATCH,
        payload: {
            id,
        }
    }
}
window.catchCard = catchCard

const ACTION_VISIBILITY_CAUGHT = VISIBILITY_CAUGHT;
const ACTION_VISIBILITY_ALL= VISIBILITY_ALL;
const ACTION_VISIBILITY_UNCAUGHT = VISIBILITY_UNCAUGHT;

function setVisibilityAll(){
    return {
        type: ACTION_VISIBILITY_ALL
    };
}
function setVisibilityCaught(){
    return {
        type: ACTION_VISIBILITY_CAUGHT
    };
}
function setVisibilityUncaught(){
    return {
        type: ACTION_VISIBILITY_UNCAUGHT
    };
}

window.setVisibilityAll = setVisibilityAll
window.setVisibilityCaught = setVisibilityCaught
window.setVisibilityUncaught = setVisibilityUncaught

//===============================
// REDUCER
// initialState.cards is an array,
// cards reducer manages an array
function cards(state=initialState.cards,action={type:''}){
    console.log(`card called with ${action.payload}`);
    switch(action.type){
        case ACTION_CATCH:
        console.log(`card called with ${action.payload.id}`);
        const newState=state.map(card=>{
                if (card.id === action.payload.id){
                    return{
                    ...card,
                    isCaught: true
                }
                }else{
                    return card;
                }
            })
        // Whatever is returned by the reducer
        // is automatically used by the store as
        // the new version of state
        return newState;
        //find the card, set to caught
        break;
        default:
        return state
        break;
    }
}

// visibility reducer manages a string
function visbility(state=initialState.visibilityFilter,action={type:''}){
    switch(action.type){
        case ACTION_VISIBILITY_ALL:
            return VISIBILITY_ALL;
        break;
        case ACTION_VISIBILITY_CAUGHT:
            return VISIBILITY_CAUGHT;
            break;
        case ACTION_VISIBILITY_UNCAUGHT:
            return VISIBILITY_UNCAUGHT;
        break;
        default:
            return state;
        break;
    }
}

// Assigns responcibility of one piece of state to one reducer
const rootReducer = combineReducers({
    cards: cards,
    visibilityFilter: visbility,
})

//===============================
// STORE 
const store = createStore(rootReducer);
window.store=store;


//no need to import redux store becuause ReactDom is wrapped by `Provider`

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
