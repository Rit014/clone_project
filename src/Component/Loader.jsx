import React from 'react';
import spinner from './GIF/spinner (1).gif';

const Loader = () => {
    return(
        <>
          <div className="img">
            <img src={spinner} alt="" />
          </div>
        </>
    )
}

export default Loader;