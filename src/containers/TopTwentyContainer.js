import React, {Component} from 'react';
import TopTwentyDetail from '../components/TopTwentyDetail.js';

class TopTwentyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: []
    };
  }
    componentDidMount() {
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      fetch(url)
      .then(res => res.json())
      .then(musicData => this.setState({music: musicData.feed.entry}))
      .catch(err => console.error);
    }

  render() {
    return (
      <div className="music-box">
        <h2>Top Twenty</h2>
        <table>
        <TopTwentyDetail music={this.state.music}/>
        </table>
      </div>
    )
  }

}

export default TopTwentyContainer;
