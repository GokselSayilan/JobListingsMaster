import React from "react";
import "./postComponent.css";

function PostComponent({ data,selectedTags,setSelectedTags }) {

  const handleFilterClick = (className,content) => {
    if(className==='postRightTag' && !selectedTags.includes(content) && selectedTags.length!==5) {
      setSelectedTags((prevTags) => [...prevTags, content]);
    }
  }
  
  return (
    <div className="post">
      {data.featured && <div className="postFeatured"></div>}
      <div className="postLeft">
        <img src={data.logo} alt="companyLogo" className="postLeftLogo" />
        <div className="postLeftInfo">
          <div className="postLeftInfoTop">
            <p className="postLeftInfoTopTitle">{data.company}</p>
            {data.new && <p className="postLeftInfoTopNewTag">NEW!</p>}
            {data.featured && (
              <p className="postLeftInfoTopFeaturedTag">FEATURED</p>
            )}
          </div>
          <div className="postLeftInfoMiddle">
            <h3 className="postLeftInfoMiddlePosition">{data.position}</h3>
          </div>
          <div className="postLeftInfoBottom">
            <p className="postLeftInfoBottomPostedAt">{data.postedAt}</p>
            <div className="postLeftInfoBottomDot"></div>
            <p className="postLeftInfoBottomContract">{data.contract}</p>
            <div className="postLeftInfoBottomDot"></div>
            <p className="postLeftInfoBottomLocation">{data.location}</p>
          </div>
        </div>
      </div>
      <hr className="mobileSep"/>
      <div className="postRight" onClick={(e) => handleFilterClick(e.target.className,e.target.textContent)}>
        <p className={selectedTags.includes(data.role) ? 'selectedTag postRightTag' : 'postRightTag'}>{data.role}</p>
        <p className={selectedTags.includes(data.level) ? 'selectedTag postRightTag' : 'postRightTag'}>{data.level}</p>
        {data.languages !== [] &&
          data.languages.map((language) => (
            <p className={selectedTags.includes(language) ? 'selectedTag postRightTag' : 'postRightTag'} key={data.id + language}>{language}</p>
          ))}

        {data.tools !== [] &&
          data.tools.map((tool) => <p className={selectedTags.includes(tool) ? 'selectedTag postRightTag' : 'postRightTag'} key={data.id + tool}>{tool}</p>)}
      </div>
    </div>
  );
}

export default PostComponent;
