import React, { useState } from "react";

const Header = (props) => {
  // const [username, setUsername] = useState("");
  // if (!props.data) {
  //   setUsername("Admin");
  // } else {
  //   setUsername(props.data.firstName);
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex flex-col sm:flex-row items-end sm:items-end justify-between p-1 sm:p-4">
      <h1 className="text-xl sm:text-2xl font-medium text-center sm:text-left">
        Hello <br />{" "}
        <span className="text-3xl sm:text-3xl font-semibold">User</span>
      </h1>
      <button
        onClick={logOutUser}
        className="mt-4 bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log out
      </button>
    </div>
  );
};

export default Header;
