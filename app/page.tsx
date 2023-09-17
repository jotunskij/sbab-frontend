"use client";

import { useEffect, useState } from 'react';
import BusLine from './busLine';

export default function Home() {

  const [topLines, setTopLines] = useState<any[]>([]);
  const [linesLoaded, setLinesLoaded] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:8080/top')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setTopLines(data);
          setLinesLoaded(true);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  function renderDataTable(): JSX.Element {
    return (
      <table className="nes-table is-bordered is-dark">
        <thead>
          <tr>
            <th>Busline</th>
            <th>Stops</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {
            topLines.map(tl => (
              <BusLine key={tl.LineNumber} lineNumber={tl.LineNumber} stops={tl.StopNames} nrOfStops={tl.NrOfStops}/>
            ))
          }
        </tbody>
      </table>
    );
  }

  function renderLoading(): JSX.Element {
    return (
      <section className="nes-container is-dark">
        <section className="message-list">
            <section className="message -left">
              <i className="nes-bcrikko"></i>
              <div className="nes-balloon from-left is-dark">
                <p>Loading data.. hold on</p>
              </div>
            </section>
        </section>
      </section>
    )
  }

  function RenderTableOrLoading(): JSX.Element {
    if (linesLoaded) {
      return renderDataTable();
    }
    else {
      return renderLoading();
    }
  }

  return (
    <main>
      <RenderTableOrLoading />
    </main>
  )
}
