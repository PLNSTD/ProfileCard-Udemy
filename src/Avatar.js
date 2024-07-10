export default function Avatar({ avatar }) {
  return (
    <>
      <img src={avatar.src} alt={avatar.title} className="avatar" />
    </>
  );
}
