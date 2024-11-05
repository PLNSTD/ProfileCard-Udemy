export default function Skill({ skillInfo }) {
  return (
    <p>
      {skillInfo.name}
      <span>
        {skillInfo.level === "high"
          ? " 💪"
          : skillInfo.level === "normal"
          ? " 👍"
          : skillInfo.level === "low"
          ? " 👶"
          : " 🚫"}
      </span>
    </p>
  );
}
