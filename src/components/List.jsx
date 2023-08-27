import React from 'react';
import Card from './Card';

export default function List({ data }) {
  return (
    <div className="cards-list">
      <ul>
        {data.map(item => (
          <li key={item.id} className="card-item">
            <Card
              first_name={item.first_name}
              country={item.country}
              description={item.description}
              avatar={item.avatar}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
