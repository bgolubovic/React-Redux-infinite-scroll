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
    // window.addEventListener('scroll', this.loadMore, false);
  }

  loadMore(){
    this.props.dispatch(loadMore(20));
  }

  render() {
    const { blocks } = this.props;
    const mappedBlocks = blocks.map(block => <li>block</li>)

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Infinitive scroll - Bojan Golubovic</h1>
        </header>
        <ul>
          {mappedBlocks}
        </ul>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
