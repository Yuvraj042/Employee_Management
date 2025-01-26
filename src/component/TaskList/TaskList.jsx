import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto  gap-5 flex items-center justify-start flex-nowrap h-[55%] w-full py-5  mt-10"
    >
      {data.tasks.map((e, idx) => {
        if (e.active) {
          return <AcceptTask key={idx} data={e} />;
        }
        if (e.newTask) {
          return <NewTask key={idx} data={e} />;
        }
        if (e.completed) {
          return <CompleteTask key={idx} data={e} />;
        }
        if (e.failed) {
          return <FailedTask key={idx} data={e} />;
        }
      })}

      {/* <AcceptTask />
      <NewTask />
      <CompleteTask />
      <FailedTask /> */}
    </div>
  );
};

export default TaskList;
