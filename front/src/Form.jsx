import React from "react";

function Form({ todo, change, submit, error }) {
  return (
    <div>
      <form
        onSubmit={submit}
        action=""
        className="flex justify-between w-full p-2 bg-gray-400 gap-3"
      >
        <input
          type="text"
          className="bg-white"
          value={todo}
          onChange={change}
        />
        <button>add</button>
        {
          error && <div>daaaaaa</div>
        }
      </form>
    </div>
  );
}

export default Form;
