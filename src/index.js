//please get react on my modules
import React, { Component } from 'react'; //create and manage components
import ReactDOM from 'react-dom'; //to manipulate DOM
import YTSearch from 'youtube-api-search';

//components
import SearchBar from './components/search_bar';

//Api key lives here
const API_KEY = config.MY_KEY;

// Create a new component => produce some HTML
// App is a functional component
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     )
// };

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
            this.setState({ videos }) // same as => this.setState({ videos: videos })
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

// take the components generated HTML and put it on the page (in the DOM)
// ReactDOM.render(App); //return an error cuz it was passing a class
ReactDOM.render(<App />, document.querySelector('.container'));