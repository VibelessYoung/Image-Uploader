import React from "react";
import ListItem from "./ListItem";
import { div } from "framer-motion/client";

function Lists({ del, done, todos }) {
  if (todos.length <= 0) {
    return <div>da kar nadar</div>;
  }
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            done={todo.done}
            delHandler={del}
            doneHandler={done}
          />
        ))}
    </>
  );
}

export default Lists;
