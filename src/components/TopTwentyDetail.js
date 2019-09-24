import React from 'react';

const TopTwentyDetail = (props) => {
  const body = props.music.map((song, index) => {
    return (
      <div>
      <p>Title:</p><p>{song["im:name"].label}</p>
      <p>Artist:</p><p> {song["im:artist"].label}</p>
      <p>Chart position:</p><p>{index + 1}</p>
      </div>
    );
  })

  return (
    <tbody>
    {body}
    </tbody>
  );
}

export default TopTwentyDetail;
