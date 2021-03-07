export default function Card(props) {
  return (
    <>
      <div className="wrapper container">
        <div className="innerWrapper">
          <span>{props.title}</span>
          <span>{props.number}</span>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          background-color: #21262d;
          padding: 2em;
          border-radius: 0.6em;
        }
        .container {
        }
        span {
          font: inherit;
          font-size: 1.4em;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: ${props.color};
        }
        .innerWrapper {
          display: flex;
        }
      `}</style>
    </>
  );
}
