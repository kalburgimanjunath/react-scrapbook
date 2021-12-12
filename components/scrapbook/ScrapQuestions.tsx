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
        // console.log(data.records);
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
          <div className="form-field">
            <label>{item.fields.Name.toLowerCase()}</label>
            <div classname="form-control">
              <input type="text" name="name" value={item.fields.Answer} />
            </div>
          </div>
        );
      })}
      <button type="button">Submit</button>
    </div>
  );
}
