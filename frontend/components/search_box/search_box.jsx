import React from 'react';
import { withRouter } from 'react-router-dom'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            category: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({category: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        let words = this.state.category.split(" ");
        let newWords = []
        for (let i = 0; i < words.length; i++) {
           newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
        }
        this.props.fetchAllBusinesses({ category: newWords.join(" ") });
        this.props.history.push("/businesses/index");
    }
    
    categorySearch(word) {
        return () => {
            this.props.fetchAllBusinesses( { category: word });
            this.props.history.push("/businesses/index");
        }
    }
    
    render() {
        if (this.props.type === "nav") {
            return (
                <div className="nav-search">
                    <form onSubmit={this.handleSubmit}>
                        <input className="nav-search-box"
                            type="search"
                            placeholder="pizza, coffee, sushi..."
                            onChange={this.handleChange}
                            name="search">
                        </input>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
                
            )
        }

        else if (this.props.type === "main") {
            return (
                <div className="main-search">
                    <form onSubmit={this.handleSubmit}>
                        <input className="main-search-box"
                            type="search"
                            placeholder="pizza, coffee, sushi..."
                            onChange={this.handleChange}
                            name="search">
                        </input>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                    <div className="sample-categories">
                        <p onClick={this.categorySearch("Pizza")}>Pizza</p>
                        <p onClick={this.categorySearch("Diner")}>Diner</p>
                        <p onClick={this.categorySearch("Burgers")}>Burgers</p>
                        <p onClick={this.categorySearch("Sushi")}>Sushi</p>
    
                    </div>
                </div>
            )
        }
    }

}

export default withRouter (SearchBox);