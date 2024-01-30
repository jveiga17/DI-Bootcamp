import React from 'react';

const Card = ({ id, name, image, occupation, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={name} />
      <div className="card-content">
        <p className="name">{name}</p>
      </div>
    </div>
  );
};

export default Card;
