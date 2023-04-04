import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  console.log(friend);
  return (
    <Link
      to={`../friend/${friend.id}`}
      className="border border-purple-500 p-4 "
    >
      <h2>{friend.name}</h2>
      <p>email: {friend.email}</p>
    </Link>
  );
};

export default Friend;
