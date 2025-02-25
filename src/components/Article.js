import React from 'react';
const Article = ({ title, date = "January 1, 1970", preview, minutes }) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>Read Time: {minutes ='5'} minutes</p>
    </article>
  );
};

export default Article;
