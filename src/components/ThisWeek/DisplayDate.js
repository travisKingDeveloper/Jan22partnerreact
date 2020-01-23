import React from 'react'

export default function DisplayDates({ dates }) {
  const mappedDates = dates.map((d, i) => <div key={i} className="date-field">{d.toString()}</div>)
  return <div className="date-boxes">
      {mappedDates}
  </div>
}