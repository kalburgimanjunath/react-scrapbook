import { useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
export default function AddScrapbook() {
  const [scraps, setScrapBooks] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appEwio0Q3yWiUCth/MainTable?api_key=keyeNXyxxuuYJY19w'
    )
      .then((resp) => resp.json())
      .then((data) => {
        // this.setScrapBooks({ scraps: data.records });
        console.log(data.records);
      })
      .catch((err) => {
        // Error :(
      });
  });
  return (
    <div>
      <h1>AddScrapbook</h1>
    </div>
  );
}
