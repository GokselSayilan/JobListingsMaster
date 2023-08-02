import React, { useEffect, useState } from "react";
import "./header.css";

function Header({ selectedTags, setSelectedTags }) {
  const [filterInput, setFilterInput] = useState("");
  const [filteredTags, setFilteredTags] = useState([]);
  const [filteredTagBoxsDisplay, setFilteredTagBoxsDisplay] = useState(false);

  const tags = [
    "Frontend",
    "Senior",
    "HTML",
    "CSS",
    "JavaScript",
    "Fullstack",
    "Midweight",
    "Python",
    "React",
    "Junior",
    "Sass",
    "Ruby",
    "Backend",
    "RoR",
    "Vue",
    "Django",
  ];

  useEffect(() => {
    const filteredTagsTemp = tags.filter((tag) =>
      tag.toLowerCase().includes(filterInput.toLowerCase())
    );

    setFilteredTags(filteredTagsTemp);
  }, [filterInput]);

  const handleFilterChange = (e) => {
    setFilterInput(e.target.value);
  };

  const handleFilterClick = (tag) => {
    if (!selectedTags.includes(tag) && selectedTags.length !== 5) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAllClear = () => {
    setSelectedTags([]);
    setFilterInput('')
  };

  const handleRemoveFilterTag = (tag) => {
    const removedIndex = selectedTags.indexOf(tag);
    const temp = [...selectedTags];
    temp.splice(removedIndex, 1);
    setSelectedTags(temp);
  };

  const handleMouseOver = () => {
    setFilteredTagBoxsDisplay(true);

  };

  const handleMouseOut = () => {
    setFilteredTagBoxsDisplay(false);
  };

  return (
    <div className="header">
      <img
        src="images/bg-header-desktop.svg"
        alt="headerSvg"
        className="headerBg"
      />
      <div className="inputBox animate__animated animate__fadeIn">
        <div
          className="inputLeft"
          onClick={() => setFilteredTagBoxsDisplay(true)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}


        >
          {filteredTagBoxsDisplay && (
            <div
              className="filteredTagBoxs"
            >
              {filteredTags.length !== tags.length &&
                filteredTags.map((tag) => (
                  <div
                    className="filteredTagBox"
                    key={tag}
                    onClick={() => handleFilterClick(tag)}
                  >
                    <p className="tag">{tag}</p>
                    {selectedTags.includes(tag) ? (
                      <p
                        className="tagPlusIcon removeBg"
                        onClick={() => handleRemoveFilterTag(tag)}
                      >
                        <span>
                          <img src="images/icon-remove.svg" alt="" />
                        </span>
                      </p>
                    ) : (
                      <p
                        className="tagPlusIcon"
                      >
                        +
                      </p>
                    )}
                  </div>
                ))}
            </div>
          )}

          <input
            type="text"
            className="inputLeftInput"
            placeholder="filter.."
            value={filterInput}
            onChange={handleFilterChange}
          />
        </div>
        <hr className="inputBoxSep" />
        <div className="inputRight">
          <div className="inputRightSelectedTags">
            {selectedTags.length>0 ? selectedTags.map((tag) => (
              <div
                className="inputRightSelectedTag"
                key={tag + "123"}
                onClick={() => handleRemoveFilterTag(tag)}
              >
                <p className=" animate__animated animate__fadeIn">{tag}</p>
                <div className="inputRightSelectedTagRemoveIcon ">
                  <img src="images/icon-remove.svg" alt="removeIcon" />
                </div>
              </div>
            )) : <p className="noFiltered">No filtered</p>}
          </div>
          <p className="clearAllTags" onClick={handleAllClear}>
            Clear
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
