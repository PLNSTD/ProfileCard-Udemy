import Skill from "./Skill.js";

export default function SkillList({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((skill) => {
        return (
          <div className="skill" style={{ backgroundColor: skill.color }}>
            <Skill skillInfo={skill}></Skill>
          </div>
        );
      })}
    </div>
  );
}
