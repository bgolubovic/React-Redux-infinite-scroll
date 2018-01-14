import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadMore } from './actions'
import './App.css';

let mapStateToProps = (store) => {
  return{
    blocks: store.blocks
  }
};

class App extends Component {
  componentDidMount(){
    window.addEventListener('scroll', this.loadMore, false);
  }

  loadMore(){
    this.props.dispatch(loadMore(20));
  }
  render() {
    console.log(this);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Infinitive scroll - Bojan Golubovic</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
