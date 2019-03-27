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
      <RecipeItem key={i} thumbnail={result.thumbnail} 
        title={this.getHighlightedText(result.title, this.state.searchString)} 
        ingredients={this.getHighlightedText(result.ingredients, this.state.searchString)} />
    );
  }

  getHighlightedText(text, higlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === higlight.toLowerCase() ? <mark>{part}</mark> : part)}</span>;
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
