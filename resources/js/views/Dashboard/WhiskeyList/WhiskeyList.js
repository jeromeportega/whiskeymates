import React from 'react';

import { WhiskeyListContainer } from './styles';

const WhiskeyList = ({ whiskies }) => {
  return (
    <WhiskeyListContainer>
      <table>
        <tr>
          <th>Type</th>
          <th>Age</th>
          <th>Barrel</th>
          <th>Distillery</th>
        </tr>
        {
          whiskies.map(whiskey => (
            <tr>
              <td>{whiskey.type}</td>
              <td>{whiskey.age}</td>
              <td>{whiskey.barrel}</td>
              <td>{whiskey.distillery}</td>
            </tr>
          ))
        }
      </table>
    </WhiskeyListContainer>
  );
}

export default WhiskeyList;