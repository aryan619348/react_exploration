import React, { useState } from 'react'
import axios from 'axios'

function Picture() {
    const [Images, setImage] = useState([])  
    const getImages = async() => {
        console.log("image call")

        try{
            const response= await axios.get("https://picsum.photos/id/237/info")
            
            setImage(response.data)
            console.log(Images)
        }
        catch(error){
            console.error("no image load")
        }
 }
  return (
    <div>
    <button className='image-bttn' onClick={getImages}> Show Images</button>
    <div className='api-call'>
        <img className="dogo"
        src={Images.download_url} 
        alt="click for surprise" />
    </div>
    </div>  
  )
}

export default Picture