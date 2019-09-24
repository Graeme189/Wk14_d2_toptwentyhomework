import React from 'react';

const TopTwentyDetail = (props) => {
  const body = props.music.map((song, index) => {
    return (
      <tr key={index}>
      <td>{index + 1}</td>
      <td>{song["im:name"].label}</td>
      <td>{song["im:artist"].label}</td>
      <td><img src={song["im:image"][0].label} alt="N/A"/></td>
      </tr>
    );
  })

  return (
    <tbody>
    {body}
    </tbody>
  );
}

export default TopTwentyDetail;
