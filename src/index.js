//please get react on my modules
import React, { Component } from 'react'; //create and manage components
import ReactDOM from 'react-dom'; //to manipulate DOM
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

//components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

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

        this.state = {
            videos: [],
            selectedVideo: null
        };

        //separated function
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        //Request to grab videos
        YTSearch({key: API_KEY, term: term}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {

        let videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

// take the components generated HTML and put it on the page (in the DOM)
// ReactDOM.render(App); //return an error cuz it was passing a class
ReactDOM.render(<App />, document.querySelector('.container'));