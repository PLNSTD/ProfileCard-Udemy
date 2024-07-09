import Avatar from "./Avatar.js";
import SkillList from "./SkillList.js";

export default function Card({ cardInfo }) {
  return (
    <div className="card">
      {/* <Avatar /> */}
      <h2>{cardInfo.name}</h2>
      <p>{cardInfo.description}</p>
      <SkillList skillList={cardInfo.skills} />
    </div>
  );
}
