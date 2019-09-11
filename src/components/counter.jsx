import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,

    tags: ["tag1", "tag2", "tag3"]

    
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.fromatCount()}</span>

        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Click me
        </button>

        {this.renderTags()}
      </div>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = (product) => {
    //console.log("button clicked", this);
    // this.state.count++;
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}{" "}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  fromatCount() {
    const { count } = this.state;

    return count === 0 ? <h1 style={{ fontSize: 10 }}>ZERO</h1> : count;
  }
}

export default Counter;
