import './App.css';
import Body from './components/Body.js';
import TabList from './components/TabList';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {active: 1};

    this.changeTab = (id) => {
      this.setState({active: id});
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.scrollButtonCtrl = this.scrollButtonCtrl.bind(this);
    this.goToTop = this.goToTop.bind(this);
  }

  render() {
    const tabs = [{id: 1, title: "Text"}, {id: 2, title: "Images"}, {id: 3, title: "Videos"}, {id: 4, title: "Table"}, {id: 5, title: "Email"}];

    return (<>
      <div className="tabbar">
        <TabList tabs={tabs} active={this.state.active} ctab={this.changeTab}/>
      </div>
      <Body active={this.state.active}/>
      <button id="scroll" onClick={this.goToTop}>Top</button>
    </>);
  }

  /* online sources for scroll: 
  Scroll to top: www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
  Update scroll style: stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js */

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    this.scrollButtonCtrl();
  }

  scrollButtonCtrl() {
    var scrollButton = document.getElementById("scroll");
    var limit = window.innerHeight / 4;

    if(document.body.scrollTop > limit || document.documentElement.scrollTop > limit) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.scrollButtonCtrl();
  }
}

export default App;