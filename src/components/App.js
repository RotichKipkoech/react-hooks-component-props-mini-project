import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog"; // Import the blog data here

function App() {
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      {/* Header */}
      <Header blogName={name} />

      {/* About */}
      <About imageUrl={image} aboutText={about} />

      {/* Article List */}
      <ArticleList articles={posts} />
    </div>
  );
}

export default App;