// import React from 'react';
// import { cardData } from '../../assets/CardData';
// import Card from "../Main/Card";


// const CardSection = () => {
//     return (
//       <>
//         <div className="grid grid-cols-5 gap-2 pt-8 mb-10">
//           {cardData.map((card) => {
//             return (
//               <div key={card.id}>
//                 <Card
//                   id={card.id}
//                   name={card.name}
//                   img={card.image}
//                   status={card.status}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </>
//     );
//   };
  
//   export default CardSection;

//==========================================================================
import React, { useState } from 'react';
import { cardData } from '../../assets/CardData';
import Card from "../Main/Card";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const CardSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-5 gap-2 pt-8 mb-10">
        {cardData.map((card, index) => (
          <div key={card.id} onClick={() => openLightbox(index)}>
            <Card
              id={card.id}
              name={card.name}
              img={card.image}
              status={card.status}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={cardData[photoIndex].image}
          nextSrc={cardData[(photoIndex + 1) % cardData.length].image}
          prevSrc={cardData[(photoIndex + cardData.length - 1) % cardData.length].image}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + cardData.length - 1) % cardData.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % cardData.length)}
        />
      )}
    </>
  );
};

export default CardSection;
