import React from "react";

function Demo() {
  return (
    <div className="container ">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="text-8xl">Hello world</h1>
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>
      <button className="bg-blue-500 w-24 h-10 text-white rounded hover:bg-yellow-500">
        Press Me
      </button>
    </div>
  );
}

export default Demo;
