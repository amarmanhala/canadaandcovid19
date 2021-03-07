export default function Card(props) {
  return (
    <>
      <div className="wrapper container">
        <div className="innerWrapper">
          <span>{props.title}</span>
          <span className="number">{props.number}</span>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          background-color: #21262d;
          padding: 1.4em;
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
          flex-direction: column;
        }
        .number {
            font-size: 1.6em;
            font-weight: 700;
            letter-spacing: 0.08em;
        }
      `}</style>
    </>
  );
}
