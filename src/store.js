import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';

const initail = {
    text: "",
    fruits: []
}
function AppReducer(state=initail, action) {
    switch (action.type) {
        case 'SET_TEXT': {
            return {...state, text: action.payload}
        }
        case 'set_Fruits_data':
            let arr = [...state.fruits];
            arr.push(state.text);
            return {...state, fruits: arr, text: ''};
        case 'REMOVE_ITEM':
            state.fruits.splice(action.payload, 1)
            return {...state}
        default:
            return {...state};
    }

}

const rootReducer = combineReducers({App: AppReducer});

// const middlewares = [thunkMiddleware]
// const middlewareEnhancer = applyMiddleware(...middlewares)

// const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const composedEnhancers = composeWithDevTools();

export const store = createStore(rootReducer, {}, composedEnhancers);
