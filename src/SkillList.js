export default function SkillList({ skillList }) {
  return (
    <div className="skill-list">
      {skillList.map((skill) => {
        return (
          <div className="skill" style={{ backgroundColor: skill.color }}>
            <p>
              {skill.name}
              <span>
                {skill.level === "high"
                  ? " 💪"
                  : skill.level === "normal"
                  ? " 👍"
                  : skill.level === "low"
                  ? " 👶"
                  : " 🚫"}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
