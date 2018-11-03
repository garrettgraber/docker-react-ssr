import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import { routerReducer, routerMiddleware, push, ConnectedRouter  } from 'react-router-redux';


import '../images/icons/icons8-trinity-50.png';

import history from './history';
import HomePage from '../pages/homePage/homePage.jsx';


console.log("App is running");



function counter (currentState, action) {
  var currentState = currentState || 0; // Initial State
  var type = action.type
  
  switch (type) {
    case 'INCREMENT':
      return currentState + 1;
    case 'DECREMENT':
      return currentState - 1;
    case 'ADD_VALUE':
      var value = parseInt(action.value);
      // If is not a number return original state
      if (isNaN(value))  {
        return currentState;
      } else {
        return currentState + value;
      }
    case 'RESET':
      return 0;
    default:
      return currentState; // Must return the next state
  }
}

let store = createStore(counter);
const storeState = () => console.log("store: ", store.getState());

store.dispatch({type: 'INCREMENT'});
storeState();
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
storeState();
store.dispatch({type: 'DECREMENT'});
storeState();



const bannerColorLists = ['red', 'lime', 'teal', '#E9CCB1'];


const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const RoutedPage = () =>  {
	return (
		<BrowserRouter  history={history}>
		    <div>
		      <nav>
		        <ul>
		          <li>
		            <Link to="/">Home</Link>
		          </li>
		          <li>
		            <Link to="/about/">About</Link>
		          </li>
		          <li>
		            <Link to="/users/">Users</Link>
		          </li>
		        </ul>
		      </nav>
		      <Route path="/" exact component={HomePage} />
		      <Route path="/about/" component={About} />
		      <Route path="/users/" component={Users} />
		    </div>
		</BrowserRouter>
	)
};


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

	    return (
	    	<Provider store={store}>
	    		<HomePage/>
	  		</Provider>
	  	);
	};
};


const mapStateToProps = (state = {}) => {
  return Object.assign({}, state);
};

// export default connect(mapStateToProps)(App);
export default App;