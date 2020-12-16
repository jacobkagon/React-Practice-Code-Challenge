import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
 
  return (
    <Fragment>
      <div className="belt">
      { props.sushiData.map(sushi => {
        return <Sushi sushi={sushi} 
        handleClick={props.handleSushiClick} 
        key={sushi.id} 
        plates={props.plates}/>
      })}
        <MoreButton onlyFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer