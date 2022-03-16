import React from "react";

const Activities = () => {
  return (
    <div>
      <ul className="activities">
        <li>German</li>
        <input type="checkbox" value="german" />
        <li>Pull ups</li>
        <input type="checkbox" value="pull-ups" />
        <li>Read</li>
        <input type="checkbox" value="read" />
        <li htmlFor="optionals">
          <select name="optionals">
            <option value="art"> Art</option>
            <option value="code">Code</option>
            <option value="exercise">Exercise</option>
          </select>
        </li>
        <input type="checkbox" value="read" />

        <li htmlFor="optionals">
          <select name="optionals">
            <option value="art"> Art</option>
            <option value="code">Code</option>
            <option value="exercise">Exercise</option>
          </select>
        </li>
        <input type="checkbox" value="read" />

        <li htmlFor="optionals">
          <select name="optionals">
            <option value="art"> Art</option>
            <option value="code">Code</option>
            <option value="exercise">Exercise</option>
          </select>
        </li>
        <input type="checkbox" value="read" />
      </ul>
    </div>
  );
};

export default Activities;
