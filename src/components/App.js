import React, { useState } from "react";

const App = () => {
  // Array destructuring
  // resource => the "state variable" that holds the data
  // setResource => function to use when we want to update its value
  // useState => initial value for the resource variable
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        {/** setResource updates resource and the component is rerendered */}
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      {resource}
    </div>
  );
};

export default App;
