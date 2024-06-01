import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useHooks() {
  const [gif, setGif] = useState("");
  const[loader,setLoader]=useState(false)
  const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

  useEffect(() => {
    fetchData()
  }, []);

  async function fetchData(tag) {
    try {
        setLoader(true)
      const {data }= await axios.get(tag?`${url}&tag=${tag}`:url);
      console.log(data)
      const imageSource = data.data.images.downsized_large.url;
      console.log(imageSource);
      
      setGif(imageSource);
      setLoader(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return {gif,loader,fetchData}

 
}

export default useHooks;