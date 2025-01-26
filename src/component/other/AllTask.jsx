import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(authData);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5  ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-full sm:w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-full sm:w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-full sm:w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-full sm:w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-full sm:w-1/5 ">Failed</h5>
      </div>
      <div>
        {userData.map(function (e, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium w-1/5">{e.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {e.taskCounts.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {e.taskCounts.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {e.taskCounts.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600 ">
                {e.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
