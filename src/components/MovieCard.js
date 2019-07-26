import React from 'react';
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

export default function MovieCard(props) {
  const imgUrl = 'https://image.tmdb.org/t/p/w185';

  const onView = e => {
    const url = 'https://www.themoviedb.org/movie/' + props.id;
    window.location.href = url;
  };

  const imgProvided = props.imgExtention
    ? `${imgUrl}/${props.imgExtention}`
    : '';

  return (
    <Card>
      <Img src={imgProvided} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
        <Button onClick={onView}>View</Button>
      </div>
    </Card>
  );
}
