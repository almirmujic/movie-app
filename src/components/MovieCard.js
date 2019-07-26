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

export default function MovieCard(props) {
  const imgUrl = 'https://image.tmdb.org/t/p/w185';

  const imgProvided = props.imgExtention
    ? `${imgUrl}/${props.imgExtention}`
    : '';

  return (
    <Card>
      <img src={imgProvided} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
        <input type="button">View</input>
      </div>
    </Card>
  );
}
