//please get react on my modules
import React from 'react'; //create and manage components
import ReactDOM from 'react-dom'; //to manipulate DOM

//components
import SearchBar from './components/search_bar';

//Api key lives here
const API_KEY = config.MY_KEY;

// Create a new component => produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

// take the components generated HTML and put it on the page (in the DOM)
// ReactDOM.render(App); //return an error cuz it was passing a class
ReactDOM.render(<App />, document.querySelector('.container'));