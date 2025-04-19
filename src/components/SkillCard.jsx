import React from 'react';

const SkillCard = ({ skill }) => (
  <div className="SkillCard">
    <h4>{skill.name}</h4>
    <p><strong>Level:</strong> {skill.level}</p>
  </div>
);

export default SkillCard;
