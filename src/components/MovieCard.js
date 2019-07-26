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
    max-width: 400px;
    align-self: center;
  }
`;

export default function MovieCard(props) {
  const imgUrl = 'https://image.tmdb.org/t/p/w185';

  return (
    <Card>
      <img src={`${imgUrl}/${props.imgExtention}`} alt={props.title} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </Card>
  );
}
