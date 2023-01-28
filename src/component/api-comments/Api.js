import { useEffect, useState } from "react";

import "./Api.scss";

const Api = () => {
  const [results, setResults] = useState([]);
  const generatePerson = async () => {
    await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  };
  // const randomSixPerson = () => {
  //   for (setResults = 0; setResults.length < 6; setResults++) {
  //     console.log(setResults);
  //   }
  // };

  useEffect(() => {
    {
      generatePerson();
      
    }
  }, [generatePerson]);

  return (
    <div className="container">
      {/* <h3 className="name">{results[0].name.first}</h3>
      <img className="person-img" src={results[0].picture.large} alt="" />
      <span className="person-info">{results[0].location.country}</span> */}
    </div>
  );
};

export default Api;
