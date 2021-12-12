// import ScrapQuestions from './ScrapQuestions';
import React, { Suspense, lazy, useState, useEffect } from 'react';
const ScrapQuest = React.lazy(() => import('./ScrapQuestions'));
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
    <div style={divStyle} className="row">
      <div className="col-md-6">
        <h1>{scrapdata.Title}</h1>
        {/* <ScrapQuest /> */}
        <Suspense fallback={<div>Loading...</div>}>
          <ScrapQuest />
        </Suspense>
      </div>
      <div className="col-md-6">
        <h4>From: {scrapdata.From}</h4>
        {scrapdata.Text}
      </div>
    </div>
  );
}
