import logo from './logo.svg';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore((state={}, action)=>{
    switch (action.type) {
        case 'ADD':
            return action.name;
        default:
            return state;
    }
}, {name: 'sai'}, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
));

function App() {
  return (
    <div className="App">
      <h1>{JSON.stringify(store.getState())}ggggg</h1>
    </div>
  );
}

export default App;
