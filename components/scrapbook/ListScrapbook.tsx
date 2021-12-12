import React, { Suspense, lazy, useState, useEffect } from 'react';
// import ScrapCard from './ScrapCard';
// import { Suspense, lazy } from 'react';
const ScrapCard = React.lazy(() => import('./ScrapCard'));
export default function ListScrapbook() {
  const [scraps, setScrapBooks] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appEwio0Q3yWiUCth/MainTable?api_key=keyeNXyxxuuYJY19w'
    )
      .then((resp) => resp.json())
      .then((data) => {
        setScrapBooks(data.records);
        // console.log(data.records);
      })
      .catch((err) => {
        // Error :(
        console.log(err);
      });
  });
  // console.log(scraps);

  return (
    <div className="row">
      {scraps &&
        scraps.map((item) => {
          return (
            <div className="col-md-12">
              <Suspense fallback={<div>Loading...</div>}>
                <ScrapCard scrapdata={item.fields} />
              </Suspense>
            </div>
          );
        })}
    </div>
  );
}
