import React from 'react'
import getDateInformation from './getDate'
import DisplayDate from './DisplayDate'

import './styles.css'

const dates = getDateInformation()
export default function ThisWeek(props) {
  console.log(getDateInformation())
  return (
    <div>
      Hello World!!
      <DisplayDate dates={dates}/>
    </div>
  )
}
