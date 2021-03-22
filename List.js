import React from 'react';

const List = ({ spices }) => {
  return (
    <>
      {spices.map((person) => {
        const { id, name, price, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{price} Rupess</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;