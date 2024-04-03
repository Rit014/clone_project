import React from 'react';
import Loader from './Loader';
import { useLocation } from 'react-router-dom';

const Saved = ({ save, loader }) => {

  const location = useLocation();
  return (
    <>
      <div className="container-fluid text-center" id='top'>
        {/* <div className="flex"> */}
        {loader | save.length === 0 ? (
          <Loader />
        ) : (
          <>
            <div className="flex">
              {save.map((image) => (
                <div key={image.id} className="items">
                  <img src={image.src.medium} alt={image.photographer} />
                </div>
              ))}
            </div>
          </>
        )}
        {save.length !== 0 && (
          <a href='#top' className="btn btn-warning my-5">Back To Top </a>
        )}

      </div>
    </>
  )
}

export default Saved
