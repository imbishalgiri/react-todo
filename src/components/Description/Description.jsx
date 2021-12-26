import React, { Component } from "react";
import BudgetContext from "../../context/BudgetContext";

import "./description.styles.css";

class Description extends Component {
  static contextType = BudgetContext;

  handleChange = (event) => {
    this.context.setDescription(event.target.value);
  };

  render() {
    return (
      <div className="description">
        <input
          className="description__text"
          value={this.context.description}
          type="text"
          placeholder="description"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Description;
