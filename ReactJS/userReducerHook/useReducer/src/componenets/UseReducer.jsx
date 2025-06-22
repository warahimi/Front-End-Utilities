import React, { useReducer } from "react";

// function UseReducer() {
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       case "reset":
//         return { count: 0 };
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-center">User Reducer Example</h1>
//       <div className="flex gap-4 justify-center items-center text-5xl font-bold m-4">
//         <button
//           type="button"
//           onClick={() => {
//             dispatch({ type: "decrement" });
//           }}
//           className="border-2 h-20 w-29 bg-gray-300 pb-3"
//         >
//           -
//         </button>
//         <h1>{state.count}</h1>
//         <button
//           type="button"
//           onClick={() => {
//             dispatch({ type: "increment" });
//           }}
//           className="border-2 h-20 w-29 bg-gray-300"
//         >
//           +
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             dispatch({ type: "reset" });
//           }}
//           className="border-2 h-20 w-29 bg-gray-300 text-4xl"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UseReducer;

function UseReducer() {
  const ACTIONS = {
    DECREMENT: "decrement",
    INCREMENT: "increment",
    RESET: "reset",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 };
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 };
      case ACTIONS.RESET:
        return { count: 0 };
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">User Reducer Example</h1>
      <div className="flex gap-4 justify-center items-center text-5xl font-bold m-4">
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTIONS.DECREMENT });
          }}
          className="border-2 h-20 w-29 bg-gray-300 pb-3"
        >
          -
        </button>
        <h1>{state.count}</h1>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}
          className="border-2 h-20 w-29 bg-gray-300"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: ACTIONS.RESET });
          }}
          className="border-2 h-20 w-29 bg-gray-300 text-4xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseReducer;
