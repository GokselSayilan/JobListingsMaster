import React, { useState } from "react";
import "./jobList.css";
import "animate.css";
import PostComponent from "../PostComponent/PostComponent";
import Data from "../../data.json";
import Header from "../Header/Header";

function JobList() {
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className="jobList">
      <Header selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      <div className="jobListPosts">
        {Data.map((post) => {
          if (
            selectedTags.includes(post.role) ||
            selectedTags.includes(post.level) ||
            selectedTags.some(
              (tag) =>
                post.languages.includes(tag)) ||
                selectedTags.some((toolTag) => post.tools.includes(toolTag)) ||
                (selectedTags.length===0)
            
          ) {
            return (
              <PostComponent
                data={post}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                key={post.id}
              />
            );
          }

        })}
      </div>
    </div>
  );
}

export default JobList;
