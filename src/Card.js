import Avatar from "./Avatar.js";
import SkillList from "./SkillList.js";
import Intro from "./Intro.js";

export default function Card({ cardInfo }) {
  return (
    <div className="card">
      <Avatar avatar={{ src: cardInfo.imagePath, title: cardInfo.name }} />
      <div className="data">
        <Intro
          userInfo={{
            name: cardInfo.name,
            description: cardInfo.description,
          }}
        />
        <SkillList skillList={cardInfo.skills} />
      </div>
    </div>
  );
}
