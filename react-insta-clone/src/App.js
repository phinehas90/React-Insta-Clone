import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      postInfo: []
    }
  }

  componentDidMount() {
    this.setState({ postInfo: dummyData });
}

filterPosts = str => {
  const filteredPosts = dummyData.filter(post => post.username.includes(str));
  this.setState({postInfo: filteredPosts })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar
            filterPosts={this.filterPosts} />
          {console.log(`This is happening after SearchBar is rendered ${dummyData}`)}
        </header>
        <div className="post">
          <PostContainer 
            posts={this.state.postInfo}/>
        </div>
      </div>
    );
  }
}

export default App;
