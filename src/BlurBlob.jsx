import React from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({position, size}) => {
  // Destructuring props
    const {top , left} = position
    const {width , height} = size  
  return (
    <div className='absolute'
    style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: "translate(-55%, -55%)",
    }}>
        <div className='h-full w-full bg-purple-500 rounded-full opacity-25 blur-3xl animate-blob'>

        </div>
    </div>
  )
}

// Define prop types
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob
