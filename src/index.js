import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import SVG from './components/SVG.jsx'



class App extends React.Component{
    constructor(props){
        super(props);
    }
   
       render(){
          return <div>
                <SVG />
              </div>
      }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
