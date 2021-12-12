import React, { useState, useEffect } from 'react';
import ScrapCard from './ScrapCard';
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
    <div>
      <h1>List of scrapbook</h1>
      {scraps.map((item) => {
        return (
          <div>
            <ScrapCard scrapdata={item.fields} />
          </div>
        );
      })}
    </div>
  );
}
