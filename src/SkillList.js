export default function SkillList({ skillList }) {
  return (
    <div>
      {skillList.map((skill) => {
        return (
          <div>
            <p>
              {skill.skillName}
              <span></span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
