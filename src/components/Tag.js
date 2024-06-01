import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useHooks from '../hooks/useHooks';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
 
  const[tag,setTag]=useState("");
  const{gif,loader,fetchData}=useHooks(tag)

//   const[loader,setLoader]=useState(false)

//   useEffect(() => {
//     fetchData()
//   }, []);

//   async function fetchData(tag) {
//     try {
//         setLoader(true)
//       const {data }= await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`);
//       console.log(data)
//       const imageSource = data.data.images.downsized_large.url;
//       console.log(imageSource);
//       setGif(imageSource)
//       setLoader(false)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

  return (
    <div className='bg-blue-500 mt-[40px] w-1/2 h-[450px] rounded-md border flex justify-center flex-col items-center space-y-3 mb-8 border-black'>
      <p className=' underline text-2xl font-bold '>A RANDOM GIF</p>
      {loader?<Spinner></Spinner>:<img src={gif} alt="Random GIF" className='w-[450px] h-[250px]'/>}
      <input onChange={(event)=>{setTag(event.target.value)}} className='w-11/12 py-2 text-[20px] rounded-md text-center '></input>
      <button onClick={()=>{fetchData(tag)}} className='bg-yellow-500 w-11/12 py-2 rounded-md mx-auto font-bold'>Generate </button>
    </div>
  );
}

export default Tag;