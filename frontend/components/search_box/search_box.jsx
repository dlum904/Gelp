import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            searchField: ""
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchAllBusinesses();
    //     debugger
    // }

    handleChange(e) {
        e.preventDefault();
        this.setState({searchField: e.target.value})
        console.log(this.props)
    }
    
    render() {
        return (
            <div>
            <form >
                <input className="search-box"
                    type="search"
                    placeholder="pizza, coffee, sushi..."
                    onChange={this.handleChange}>
                </input>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
            </div>
        )
    }

}

export default SearchBox;