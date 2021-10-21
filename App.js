import React, { Component } from "react";
import "./App.css";


// ./components/MyForm     ( comkponents is not in the dir )
import MyForm from "./MyForm";

class App extends Component {
    state= {
        visible: true
    };

    render() {
        return (
           <div className="App">
              <MyForm />
           </div>
        );
    }
}

export default App;
