import React from 'react'
import "./css/gallery.css"
import Folders from './Folders';
import Gphoto from './Gphoto'


const Gallery = () => {

  let rows = [];
  for (let i = 1; i < 153; i++) {

    rows.push(i);
  }
  return (<>
    <div className="position-relative min-vh-100 Gallery_main">
      <Folders />
      <div className=' Gallery_images'>
        {
          rows.map((i, ind) => {
            return (
              <Gphoto t={i} key={ind} />
            )
          })
        }
      </div>
    </div>
  </>
  )


}

export default Gallery