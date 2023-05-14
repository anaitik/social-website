import React from 'react'


const Gphoto = ({t,key}) => {
  return (
    <figure className="G_photo">
        <a href={"https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20("+t+").webp"} target='blank' >
          <img alt="picture2" src={"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20("+t+").webp" }className="img-fluid"/>
        </a>
    </figure>
  )
}

export default Gphoto