import React, { Component } from 'react'

export default class CurrentPets extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="imgContainer">
        <div className="imgRow">
          <div className="imgDisplay">
            <img className="imgShow" src="http://images.media-allrecipes.com/images/55688.jpg" alt=""/>
          </div>
          <div className="txtDisplay">
            <p>Stir fried Shih Tzu is a culinary delight. This breed is so tender you can cut it with a fork. Order now while supply lasts.</p>
          </div>
        </div> 
        <div className="imgRow">
          <div className="imgDisplay">
            <img className="imgShow" src="http://images.media-allrecipes.com/images/55688.jpg" alt=""/>
          </div>
          <div className="txtDisplay">
            <p>Stir fried Shih Tzu is a culinary delight. This breed is so tender you can cut it with a fork. Order now while supply lasts.</p>
          </div>
        </div> 
         <div className="imgRow">
          <div className="imgDisplay">
            <img className="imgShow" src="http://images.media-allrecipes.com/images/55688.jpg" alt=""/>
          </div>
          <div className="txtDisplay">
            <p>Stir fried Shih Tzu is a culinary delight. This breed is so tender you can cut it with a fork. Order now while supply lasts.</p>
          </div>
        </div> 
      </div>
    )
  }
}
