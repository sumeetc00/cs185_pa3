import { Component } from 'react';

class Videos extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    showVideo(event) {
        var ol = document.getElementById("overlay");
        var video = document.getElementById("in_overlay");
        ol.style.display = "block";
        video.src = event.target.src;
        video.type = event.target.type;
    }

    hideVideo() {
        var ol = document.getElementById("overlay");
        ol.style.display = "none";
    }

    render() {
        return (<>
            <div className="pageinfo">
              <h1>Videos</h1>
              <div className="grid">
                <div className="in_grid">
                  <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v1.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v2.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v3.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v4.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v5.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v6.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v7.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
                <div className="in_grid">
                    <video onClick={this.showVideo} src={process.env.PUBLIC_URL + '/v8.mp4'} type="video/mp4" autoPlay loop muted></video>
                </div>
              </div>
            </div>
            <div id="overlay" className="overlay" onClick={this.hideVideo}>
                <video id="in_overlay" className="in_overlay" onClick={this.onClickHandler} controls></video>
            </div>
        </>);
    }
}

export default Videos;