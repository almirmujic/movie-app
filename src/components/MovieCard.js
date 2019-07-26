import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  padding: 1rem;
  img {
    width: auto;
    height: 100%;
    align-self: center;
  }
  div {
    padding: 1rem;
    align-self: center;
  }
`;

const Img = styled.img`
  border-radius: 15px;
  border: 5px solid #01d277;
  max-height: 278px;
`;

const Button = styled.button`
  background-color: #01d277;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 15px;
  padding: 4px 12px 4px 12px;
  transition: .3s
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export default function MovieCard({
  id,
  imgExtention,
  bgColor,
  title,
  overview
}) {
  const imgUrl = 'https://image.tmdb.org/t/p/w185';

  const onView = e => {
    const url = 'https://www.themoviedb.org/movie/' + id;
    window.location.href = url;
  };

  const imgProvided = imgExtention ? `${imgUrl}/${imgExtention}` : '';

  return (
    <Card style={{ backgroundColor: `${bgColor}` }}>
      <Img src={imgProvided} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{overview}</p>
        <Button onClick={onView}>View</Button>
      </div>
    </Card>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  overview: PropTypes.string,
  imgExtention: PropTypes.string,
  bgColor: PropTypes.string
};
