import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import TabButton from "../components/TabButton";
import { provinces } from "../provinces";

function Stats(props) {
  const [data, setData] = useState();
  
  useEffect(() => {
    console.log("clicked all")
    const fetchData = async () => {
      const result = await fetch("https://api.opencovid.ca/summary?loc=canada");
      const finalResult = await result.json();
      setData(finalResult.summary);
    };

    fetchData();
  }, []);
   function render() {
     console.log("again")
   }
  return (
    <>
      <div>
        <TabButton label="All" action={() => render()}></TabButton>
        {provinces.map((province) => {
          return <TabButton label={province.name}></TabButton>;
        })}
      </div>
      <div className="container">
        {data &&
          data.map((d) => {
            return (
              <>
                <Card color="#0366D6" title="Cases" number={d.cumulative_cases}>
                  1
                </Card>
                <Card
                  color="#28A745"
                  title="Recovered"
                  number={d.cumulative_recovered}
                >
                  2
                </Card>
                <Card
                  color="#D73A49"
                  title="Deaths"
                  number={d.cumulative_deaths}
                >
                  3
                </Card>
              </>
            );
          })}
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

export default Stats;
