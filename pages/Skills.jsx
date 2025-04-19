import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('https://express-api-app.onrender.com/api/skills')
      .then(res => setSkills(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
