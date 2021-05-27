import React from "react";
import { Link } from "react-router-dom";

function HomeCategory(props) {
  const { image, title, description, routeName, name } = props;
  return (
    <div className="col-6 mb-3">
      <Link to={`/category/${routeName}`}>
        <div className="w-100">
          <img className="w-100" src={image} alt={name} />
        </div>
        <h2 className="h4 my-1">
          <strong>{name}</strong>
        </h2>
        <p className="m-0">{description}</p>
      </Link>
    </div>
  );
}

export default HomeCategory;
