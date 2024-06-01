import logo from './logo.svg';
import './App.css';
import Generate from './components/Generate';
import Tag from './components/Tag';
import Spinner from './components/Spinner';

function App() {
  return (
    <div className='background min-w-screen min-h-screen flex flex-col items-center justify-centre overflow-hidden'>
    <div className='bg-white  w-11/12 rounded-md  text-4xl text-center py-2 mt-[40px]  font-bold '>RANDOM GIFS</div>
    
    <Generate></Generate>
    <Tag></Tag>
    
    
     
    
    </div>
  );
}

export default App;
