import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import useHooks from '../hooks/useHooks';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Generate() {
//   const [gif, setGif] = useState("");
//   const[loader,setLoader]=useState(false)

//   useEffect(() => {
//     fetchData()
//   }, []);

//   async function fetchData() {
//     try {
//         setLoader(true)
//       const {data }= await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
//       console.log(data)
//       const imageSource = data.data.images.downsized_large.url;
//       console.log(imageSource);
      
//       setGif(imageSource);
//       setLoader(false)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
const{gif,loader,fetchData}=useHooks()

  return (
    <div className='bg-green-500 mt-[40px] w-1/2 h-[450px] rounded-md border flex justify-center flex-col items-center space-y-8 border-black'>
      <p className=' underline text-2xl font-bold '>A RANDOM GIF</p>
      {loader?<Spinner></Spinner>:<img src={gif} alt="Random GIF" className='w-[450px] h-[250px]'/>}
      <button onClick={()=>{fetchData()}} className='bg-yellow-500 w-11/12 py-2 rounded-md mx-auto font-bold'>Generate </button>
    </div>
  );
}

export default Generate;