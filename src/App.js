import React, { Component } from 'react';
import './Components/NavigationBar'
import './Components/Content'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Content} from "./Components/Content";
import {NavigationBar} from "./Components/NavigationBar";
import {CircleOne, CircleTwo} from "./Components/Decorations";

library.add(faPlus);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <CircleOne/>
        <CircleTwo/>
        <Content/>
      </div>
    )
  }
}

export default App;
