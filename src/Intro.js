export default function Intro({ userInfo }) {
  return (
    <>
      <h2>{userInfo.name}</h2>
      <p>{userInfo.description}</p>
    </>
  );
}
