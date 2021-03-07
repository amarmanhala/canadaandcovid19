import Card from "./Card";

export default function Stats() {
  return (
    <>
      <div className="container">
        <Card color="#0366D6" title="Cases" number="10,000,00">
          1
        </Card>
        <Card color="#28A745" title="Recovered">
          2
        </Card>
        <Card color="#D73A49" title="Deaths">
          3
        </Card>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(3, 20%);
          justify-content: center;
          grid-column-gap: 0.6em;
          margin: 2em 0;
        }
      `}</style>
    </>
  );
}
