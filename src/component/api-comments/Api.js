import { useEffect, useState } from "react";

import "./Api.scss";

const Api = (props) => {
  const [results, setResults] = useState([]);
  const generatePerson = async () => {
    await fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setResults(data.results));
  };


  useEffect(() => {
    {
      generatePerson();
    }
  }, [generatePerson]);

  return (
    <div className="container">
      
      {/* tutaj mam dac warunek ?  */}
    <h3 className="name">{results[0].name.first}</h3>
    <img className="person-img" src={results[0].picture.large} alt="" />
    <span className="person-info">{results[0].location.country}</span>
    </div>
  );
};

export default Api;
