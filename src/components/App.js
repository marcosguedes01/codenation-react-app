import React, { Component } from 'react';
import Navbar from './Navbar'
import RecipeItem from './RecipeItem'
import recipes from '../sample_data/recipes.json'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.getData();
  }

  getData(){
    let searchString = this.state.searchString || "";
    
    this.recipes = recipes.results.filter((recipe) => {
      let propertiesFilter = recipe.title.toLowerCase() + recipe.ingredients.toLowerCase()
      return propertiesFilter.indexOf(
        searchString.toLowerCase()
      ) !== -1
    }).map((result, i) =>
      <RecipeItem key={i} result={result} />
    );
  }

  handleChange(event) {
    this.setState({searchString: event.target.value});

    this.getData();
  }

  render() { 
    return (
      <div className="App">
        <Navbar state={this.state} handleChange={this.handleChange} />
        <div className="container mt-10">
          <div className="row">
            {this.recipes}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
