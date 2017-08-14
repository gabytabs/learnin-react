import React, { Component } from 'react'; //for jsx

//functional component
// const SearchBar = () => {
//   return <input />
// };

//class based component
//class SearchBar extends React.Component {
class SearchBar extends Component {

    //constructor is to initialize variables and states. It is used to set things up
    constructor(props) {
        //Component has a constructor function also.
        //When defining method that is already defined on the parent Class which is "Component"
        //The parent method on the parent class(Component) can be called by super();
        super(props);

        //To initialize state, make an object and assign it to "this.state"
        this.state = { term: '' };
    }

    render() {
        //onChange is a react property
        return (
            <div>
                <input
                // onChange={this.onInputChange}
                //this.setState is to change the state that we initialize
                onChange={ event => this.setState({ term: event.target.value }) } />
            </div>
        );
    }

    // onInputChange(event){
    //     //event.target.value is the value you input in the Input DOM
    //      console.log(event.target.value)
    // }
}

export default SearchBar;