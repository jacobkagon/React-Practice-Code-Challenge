import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.onlyFour()}>
            More sushi!
          </button>
}

export default MoreButton