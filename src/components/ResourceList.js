import React, { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );

    setResources(response.data);
  };

  // [] input => checks whether the value has changed (prevProps)
  // if so, updates the "state", no manual check needed
  // like in case of componentDidUpdate
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return <div>{resources.length}</div>;
};

export default ResourceList;
