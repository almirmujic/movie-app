import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  background-color: #081c24;
  display: block;
  color: #fff;
  padding-top: 8px;
  padding-bottom: 4px;
  img {
    padding-left: 16px;
  }
  h1 {
    padding-left: 10px;
  }
`;

export default function Header() {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              width="81"
              height="72"
              alt="The Movie Database"
            />
          </td>
          <td>
            <h1>MoviesDB Search</h1>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}
