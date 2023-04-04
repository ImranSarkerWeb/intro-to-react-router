import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h3>{details.name}</h3>
      <p>{details.username}</p>
      <p>{details.email}</p>
    </div>
  );
};

export default FriendDetails;
