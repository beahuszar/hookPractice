import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  // [] input => checks whether the value has changed (prevProps)
  // if so, updates the "state", no manual check needed
  // like in case of componentDidUpdate
  // if no value in [] === componentDidMount
  // SYNTAX
  // (input) => console.log(input) -- definition only, not called immediately
  // ((input) => console.log(input))('hello world') -- will be called immediately with 'hello world'
  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(response.data);
    })(resource);
  }, [resource]);

  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
