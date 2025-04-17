export default function Song({ video }) {
  return (
    <video width="640" height="360" loop="false" controls>
      <source src={video} />
    </video>
  );
}
