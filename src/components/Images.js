import { Component } from 'react';

class Images extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    showImage(event) {
        var ol = document.getElementById("overlay");
        var img = document.getElementById("in_overlay");
        ol.style.display = "block";
        img.src = event.target.src;
    }

    hideImage() {
        var ol = document.getElementById("overlay");
        ol.style.display = "none";
    }

    render() {
        return (<>
            <div className="pageinfo">
              <h1>Images</h1>
              <div className="grid">
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i1.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i2.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i3.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i4.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i5.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i6.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i7.jpg'}/>
                </div>
                <div className="in_grid">
                    <img onClick={this.showImage} src={process.env.PUBLIC_URL + '/i8.jpg'}/>
                </div>
              </div>
            </div>
            <div id="overlay" className="overlay" onClick={this.hideImage}>
                <img id="in_overlay" className="in_overlay" onClick={this.onClickHandler}/>
            </div>
        </>);
    }
}

export default Images;