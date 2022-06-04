import React, { useState } from "react";
import Data from "./Data.js"
const App = () => {

  const [data, setdata] = useState(Data);
  const [fic, setFic] = useState(false);
  const [edu, setEdu] = useState(false);
  const [tech, setTech] = useState(false);
  const [nov, setNov] = useState(false);

  const handleFiction = (category) => {
    let filtered = Data.filter((elem) => {
      return elem.categories === category.target.innerHTML;
    });
    setdata(filtered)
    setFic(true);
  }
  const handleEducational = (category) => {
    let filtered = Data.filter((elem) => {
      return elem.categories === category.target.innerHTML;
    });
    setdata(filtered);
    setEdu(true);
  }
  const handleTechnology = (category) => {
    let filtered = Data.filter((elem) => {
      return elem.categories === category.target.innerHTML;
    });
    setdata(filtered);
    setTech(true);
  }
  const handleNovel = (category) => {
    let filtered = Data.filter((elem) => {
      return elem.categories === category.target.innerHTML;
    });
    setdata(filtered);
    setNov(true);
  }
  const handleAll = () => {
    const all = Data.map((elem) => {
      return elem;
    })
    setdata(all);
    setFic(false);
    setEdu(false);
    setTech(false);
    setNov(false);

    // if (fic) {
    //   setFic(false);
    // }
    // else if (edu) {
    //   setEdu(false);
    // }
    // else if (tech) {
    //   setTech(false);
    // }
    // else if (nov) {
    //   setNov(false);
    // }
  }
  return (
    <>
      <div className='main-container'>Data</div>
      <navbar className="buttons">
        <button className='btn' onClick={!fic ? handleFiction : handleAll}>Fiction</button>
        <button className='btn' onClick={!edu ? handleEducational : handleAll}>Educational</button>
        <button className='btn' onClick={!tech ? handleTechnology : handleAll}>Technology</button>
        <button className='btn' onClick={!nov ? handleNovel : handleAll}>Novel</button>
      </navbar>
      <div className='mydiv'>
        {
          data.map((elem) => {
            const { title, categories, author } = elem;
            return (
              <div className="card">
                <div className="container">
                  <h4>
                    <b>{categories}</b>
                  </h4>
                  <p>Title: {title}</p>
                  <p>Author: {author}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default App;
