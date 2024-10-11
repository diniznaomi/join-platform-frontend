import React from 'react';
import './RankingComponent.css';

const RankingComponent = ({ rankings }) => {
  return (
    <div className="ranking">
      <h3>Employee of the Month</h3>
      <ul className="ranking-list">
        {rankings.map((employee, index) => (
          <li key={index}>
            {index + 1}. {employee.name} - {employee.rewards} rewards
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RankingComponent;