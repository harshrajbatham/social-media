// import React, { useContext, useEffect, useRef, useState } from "react";
// import leftsidetop from "../../assets/images/leftsidetop.jpg";
// import { Tooltip } from "@material-tailwind/react";
// import { Avatar } from "@material-tailwind/react";
// import avatar from "../../assets/images/avatar.jpg";
// import location from "../../assets/images/location.png";
// import job from "../../assets/images/job.png";
// import facebook from "../../assets/images/facebook.png";
// import whatsaap from "../../assets/images/whatsapp.png";
// import slide1 from "../../assets/images/slide1.jpg";
// import slide2 from "../../assets/images/slide2.jpg";
// import slide3 from "../../assets/images/slide3.jpg";
// import slide4 from "../../assets/images/slide4.jpg";
// import { AuthContext } from "../AppContext/AppContext";

// const LeftSide = () => {
//   const [data, setData] = useState([]);
//   const count = useRef(0);
//   const { user, userData } = useContext(AuthContext);

//   const handleRandom = (arr) => {
//     setData(arr[Math.floor(Math.random() * arr?.length)]);
//   };

//   useEffect(() => {
//     const imageList = [
//       {
//         id: "1",
//         image: slide1,
//       },
//       {
//         id: "2",
//         image: slide4,
//       },
//       {
//         id: "3",
//         image: slide2,
//       },
//       {
//         id: "4",
//         image: slide3,
//       },
//     ];
//     handleRandom(imageList);
//     let countAds = 0;
//     let startAds = setInterval(() => {
//       countAds++;
//       handleRandom(imageList);
//       count.current = countAds;
//       if (countAds === 5) {
//         clearInterval(startAds);
//       }
//     }, 2000);
//     return () => {
//       clearInterval(startAds);
//     };
//   }, []);

//   const progressBar = () => {
//     switch (count.current) {
//       case 1:
//         return 20;
//       case 2:
//         return 40;
//       case 3:
//         return 60;
//       case 4:
//         return 80;
//       case 5:
//         return 100;
//       default:
//         return 0;
//     }
//   };
//   return (
//     <>
//       <div className="flex flex-col  h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg ">
//         <div className="flex flex-col items-center relative ">
//           <img
//             className="h-28 w-full rounded-r-xl mb-4 object-cover"
//             src={leftsidetop}
//             alt="leftsidetop"
//           />
//           <div className="absolute -bottom-4">
//             <Tooltip content="Profile" placement="top">
//               <Avatar size="md" src={user?.photoURL || avatar} alt="avatar"></Avatar>
//             </Tooltip>
//           </div>
//         </div>
//         <div className="flex flex-col items-center pt-6">
//           <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
//           {user?.email || userData?.email}
//           </p>
//           <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">
//             access exclusive tools & features
//           </p>
//           <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2">
//             try primium for rs.20
//           </p>
//         </div>
//         <div className="flex  flex-col  pl-2">
//           <div className="flex items-center pb-4">
//             <img className="h-7" src={location} alt="location"></img>
//             <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none ml-3">
//               Indore
//             </p>
//           </div>
//           <div className="flex items-center ">
//             <img className="h-7" src={job} alt="job"></img>
//             <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none ml-2">
//               React Developer
//             </p>
//           </div>
//           <div className="flex justify-center items-center pt-4">
//             <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none">
//               Events
//             </p>
//             <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none mx-2">
//               Groups
//             </p>
//             <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none">
//               Follow
//             </p>
//             <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none mx-2">
//               More
//             </p>
//           </div>
//         </div>
//         <div className="ml-2">
//           <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
//             Social Profiles
//           </p>
//           <div className="flex items-center">
//             <img className="h-8 mb-3 mr-2" src={facebook} alt="facebook"></img>
//             <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-gray-500 no-underline tracking-normal leading-none py-2">
//               facebook
//             </p>
//           </div>
//           <div className="flex items-center">
//             <img className="h-8 mb-3 mr-2" src={whatsaap} alt="whatsaap"></img>
//             <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-gray-500 no-underline tracking-normal leading-none py-2">
//               whatsaap
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center items-center pt-4">
//           <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
//             slideslow ads
//           </p>
//           <div
//             style={{ width: `${progressBar()}%` }}
//             className="bg-red-600 rounded-xl h-1 mb-4"
//           ></div>
//           <img className="h-36 rounded-lg" src={data.image} alt="ads"></img>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LeftSide;

//=====================================responsive now----------------------

import React, { useContext, useEffect, useRef, useState } from "react";
import leftsidetop from "../../assets/images/leftsidetop.jpg";
import { Tooltip } from "@material-tailwind/react";
import { Avatar } from "@material-tailwind/react";
import avatar from "../../assets/images/avatar.jpg";
import location from "../../assets/images/location.png";
import job from "../../assets/images/job.png";
import facebook from "../../assets/images/facebook.png";
import whatsaap from "../../assets/images/whatsapp.png";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import { AuthContext } from "../AppContext/AppContext";

const LeftSide = () => {
  const [data, setData] = useState([]);
  const count = useRef(0);
  const { user, userData } = useContext(AuthContext);

  const handleRandom = (arr) => {
    setData(arr[Math.floor(Math.random() * arr?.length)]);
  };

  useEffect(() => {
    const imageList = [
      {
        id: "1",
        image: slide1,
      },
      {
        id: "2",
        image: slide4,
      },
      {
        id: "3",
        image: slide2,
      },
      {
        id: "4",
        image: slide3,
      },
    ];
    handleRandom(imageList);
    let countAds = 0;
    let startAds = setInterval(() => {
      countAds++;
      handleRandom(imageList);
      count.current = countAds;
      if (countAds === 5) {
        clearInterval(startAds);
      }
    }, 2000);
    return () => {
      clearInterval(startAds);
    };
  }, []);

  const progressBar = () => {
    switch (count.current) {
      case 1:
        return 20;
      case 2:
        return 40;
      case 3:
        return 60;
      case 4:
        return 80;
      case 5:
        return 100;
      default:
        return 0;
    }
  };

  return (

    <>
   <div className="hidden md:flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">

    
      <div className="flex flex-col h-screen bg-white pb-4 border-2 rounded-r-xl shadow-lg">
        <div className="flex items-center relative">
          <img
            className="h-28 w-full rounded-r-xl mb-4 object-cover"
            src={leftsidetop}
            alt="leftsidetop"
          />
          <div className="absolute -bottom-4">
            <Tooltip content="Profile" placement="top">
              <Avatar size="md" src={user?.photoURL || avatar} alt="avatar" />
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col items-center pt-6">
          <p className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">
            {user?.email || userData?.email}
          </p>
          <p className="font-roboto font-medium text-xs text-gray-700 no-underline tracking-normal leading-none">
            access exclusive tools & features
          </p>
          <p className="font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none py-2">
            try premium for Rs. 20
          </p>
        </div>
        <div className="flex flex-col pl-2">
          <div className="flex items-center pb-4">
            <img className="h-7" src={location} alt="location"></img>
            <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none ml-3">
              Indore
            </p>
          </div>
          <div className="flex items-center ">
            <img className="h-7" src={job} alt="job"></img>
            <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none ml-2">
              React Developer
            </p>
          </div>
          <div className="flex justify-center items-center pt-4">
            <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none">
              Events
            </p>
            <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none mx-2">
              Groups
            </p>
            <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none">
              Follow
            </p>
            <p className="font-roboto font-bold text-md text-[#fc3939] no-underline tracking-normal leading-none mx-2">
              More
            </p>
          </div>
        </div>
        <div className="ml-2">
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
            Social Profiles
          </p>
          <div className="flex items-center">
            <img className="h-8 mb-3 mr-2" src={facebook} alt="facebook"></img>
            <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-gray-500 no-underline tracking-normal leading-none py-2">
              Facebook
            </p>
          </div>
          <div className="flex items-center">
            <img className="h-8 mb-3 mr-2" src={whatsaap} alt="whatsapp"></img>
            <p className="font-roboto font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-gray-500 no-underline tracking-normal leading-none py-2">
              WhatsApp
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-4">
          <p className="font-roboto font-bold text-lg no-underline tracking-normal leading-none py-2">
            Slideshow Ads
          </p>
          <div
            style={{ width: `${progressBar()}%` }}
            className="bg-red-600 rounded-xl h-1 mb-4"
          ></div>
          <img className="h-36 rounded-lg" src={data.image} alt="ads"></img>
        </div>
      </div>
      </div>
    </>
  );
};

export default LeftSide;



