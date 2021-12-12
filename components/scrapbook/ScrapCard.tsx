import React from 'react';
import ScrapQuestions from './ScrapQuestions';
export default function ScrapCard({ scrapdata }) {
  const divStyle = {
    backgroundImage: 'url(' + scrapdata.background + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    color: scrapdata.color,
  };

  return (
    <div style={divStyle}>
      <img src={scrapdata.background} width="200" height="200" />
      <div>
        <h1>{scrapdata.Title}</h1>
        <h4>From: {scrapdata.From}</h4>
        <ScrapQuestions />
      </div>
      <div>{scrapdata.Text}</div>
    </div>
  );
}
