import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';


console.log("Node Environment: ", process.env.NODE_ENV);
// export default createMemoryHistory();
export default (process.env.BROWSER && process.env.NODE_ENV !== 'production') ? createBrowserHistory() : createMemoryHistory();