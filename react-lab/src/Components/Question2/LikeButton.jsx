import React, { Component } from "react";

export default class LikeButton extends Component {
  state = {
    likes: 0,
    isLiked: false,
  };
  toggleLike = () => {
    this.setState({
      likes: this.state.isLiked ? this.state.likes - 1 : this.state.likes + 1,
      isLiked: !this.state.isLiked,
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            height: "300px",
            width: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "10px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "#f0f8ff",
          }}
        >
          <h3>Count : {this.state.likes}</h3>
          <button
            onClick={this.toggleLike}
            style={{
              backgroundColor: this.state.isLiked ? "red" : "blue",
              color: "#fff",
              height: "40px",
              width: "100px",
              borderRadius: "10px",
            }}
          >
            {this.state.isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    );
  }
}
