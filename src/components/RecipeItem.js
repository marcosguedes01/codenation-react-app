import React from 'react'

const RecipeItem = function(props) {
    function handleClick(e) {
        e.preventDefault();
        window.open(props.result.href, '_blank');
      }

    return (
        <div className="col-sm-3 mt-4">
            <div className="card" onClick={handleClick}>
                <img className="card-img-top img-fluid" src={props.result.thumbnail} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.result.title}</h5>
                    <p className="card-text">
                        <strong>Ingredients: </strong>{props.result.ingredients}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem;