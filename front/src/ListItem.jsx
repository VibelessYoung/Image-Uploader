import React from "react";

function ListItem({ title, delHandler, doneHandler, id, done }) {
  return (
    <div className="flex justify-between w-1/2">
      <div className="flex gap-5">
        <button
          className={done ? "text-green-500" : ""}
          onClick={() => doneHandler(id)}
        >
          ok
        </button>
        <button onClick={() => delHandler(id)}>delete</button>
      </div>

      <p
        className={`transition-all ${done ? "line-through text-gray-400" : ""}`}
      >
        {title}
      </p>
    </div>
  );
}

export default ListItem;
