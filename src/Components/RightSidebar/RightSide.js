// import React, { useState } from "react";
// import rightsidetop from "../../assets/images/rightsidetop.jpg";

// const RightSide = () => {
//   const [input, setInput] = useState("");
//   return (
//     <>
//       <div className="flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl">
//         <div className="flex flex-col items-center relative pt-10">
//           <img
//             className="h-48 rounded-md"
//             src={rightsidetop}
//             alt="nature"
//           ></img>
//         </div>
//         <p className="font-roboto font-normal text-sm text-gray-700 max-w-fit no-underline tracking-normal leading-tight py-2 mx-2">
//           This is an Unofficial Project which is not Harm your Privacy & Personal
//           Data!
//         </p>
//         <div className="mx-2 mt-10">
//           <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
//             Friends:{" "}
//           </p>
//           <input
//             className="border-0 outline-none mt-4"
//             name="input"
//             value={input}
//             type="text"
//             placeholder="Search friends"
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default RightSide;

//=======================================
import React, { useState } from "react";
import rightsidetop from "../../assets/images/rightsidetop.jpg";

const RightSide = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen bg-white shadow-lg border-2 rounded-l-xl">
        <div className="lg:w-1/2 flex flex-col items-center relative pt-10">
          <img
            className="h-48 rounded-md lg:w-full lg:h-auto"
            src={rightsidetop}
            alt="nature"
          ></img>
        </div>
        <div className="lg:w-1/2 mx-2 mt-10">
          <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none">
            Friends:{" "}
          </p>
          <input
            className="border-0 outline-none mt-4 w-full lg:w-auto"
            name="input"
            value={input}
            type="text"
            placeholder="Search friends"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default RightSide;
