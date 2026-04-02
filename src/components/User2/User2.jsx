import React, { use } from "react";

const User2 = ({ userPromise }) => {
  const user = use(userPromise);
  console.log("user from user2", user);

  return (
    <div className="user2">
      <h1>This is user2</h1>
    </div>
  );
};

export default User2;
