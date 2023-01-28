import { Fragment, useEffect, useState } from "react";

import "./Api.scss";

const Api = (props) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const generatePerson = async () => {
      const response = await fetch("https://randomuser.me/api/", {
        signal,
      });

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      if (!data?.results) {
        return;
      }

      setResults(data.results);
    };

    generatePerson();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="container">
      {results.map(({ name, picture, location }) => (
        <Fragment key={`${name.first}${name.last}`}>
          <h3 className="name">{name.first}</h3>
          <div className="container-person-img">
            <img className="person-img" src={picture.large} alt="" />
          </div>
          <span className="person-info">{props.comment}</span>
        </Fragment>
      ))}
    </div>
  );
};

export default Api;
