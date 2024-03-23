import React from 'react';
import './list.css';
export default function List({ formInfo, onDelete }) {
  return (
    <>
      <div className="list">
        {formInfo.map((data, index) => (
          <div className="lists" key={index}>
            <h2>Name: {data.username}</h2>
            <p>Email: {data.email}</p>
            <img src={data.imgUrl} />
            <p>Message: {data.message}</p>
            <button>edit</button>
            <button onClick={() => onDelete(index)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
