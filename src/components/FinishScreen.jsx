export default function ({ points, maxPosiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPosiblePoints) * 100;

  let emoji;
  if (percentage == 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 40 && percentage < 80) emoji = "🥉";
  if (percentage < 40) emoji = "☠️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPosiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore"> (Highscore: {highscore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}
