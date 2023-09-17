"use client";

type BusStops = {
    lineNumber : number,
    stops : string[],
    nrOfStops: number
}

export default function BusLine({lineNumber, stops, nrOfStops} : BusStops) {
    console.log(lineNumber, stops);
    return (
        <tr>
            <td>{lineNumber}</td>
            <td>{stops.join(', ')}</td>
            <td>{nrOfStops}</td>
        </tr>
    );
}