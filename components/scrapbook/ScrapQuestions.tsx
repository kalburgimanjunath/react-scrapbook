import React, { useState, useEffect } from 'react';
export default function ScrapQuestions() {
  const [questions, setScrapQuestions] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/appEwio0Q3yWiUCth/Questions?api_key=keyeNXyxxuuYJY19w'
    )
      .then((resp) => resp.json())
      .then((data) => {
        setScrapQuestions(data.records);
        console.log(data.records);
      })
      .catch((err) => {
        // Error :(
        console.log(err);
      });
  });
  // console.log(questions);

  return (
    <div>
      {questions.map((item) => {
        return (
          <div>
            <div>{item.fields.Name}</div>
            <div>
              <input type="text" name="name" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
