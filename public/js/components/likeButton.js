import React from "react";


export default class LikeButton extends React.Component {

    constructor() {
        super();
        this.state = {isLiked: false}
    }

    changeLikeText() {
        const likeText = document.getElementById("like-text")
        this.state.isLiked = !this.state.isLiked;
        likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    }

    render() {
        return <button id='like-button' onClick={this.changeLikeText()}>
            <span id='like-text'>点赞</span>
            <span>👍</span>
        </button>
    }

}
