import React ,{useRef} from 'react';
import cardswipingvideo from '../../public/videos/Payment.mp4';
import exchangeRateficon from '../../public/images/exchange-rate.png';



export default function Signin() {

  const videoRef = useRef(null);

  // const handlePlay = () =>{
  //   videoRef.current.play();
  //   videoRef.current.muted = false;
  // }


  return (
  <>
       <div className='bg-indigo-950 w-screen h-screen flex flex-col space-y-8 justify-center items-center'>
         <h3 className='text-white-600 text-4xl font-bold italic'>EasySwipe</h3>
         <div className='flex  justify-between bg-slate-700 rounded-md'>
         <video  src={cardswipingvideo} className="h-96 rounded-l-md " autoPlay loop muted />
 
 
 
           <div className=' w-96 h-96 rounded-md p-8 opacity-80'>
             <h1 className='text-center   text-white opacity-100 text-2xl font-semibold'>Sign In</h1>
 
             <div className='inputelements flex flex-col space-y-4'>
 
               <div>
                 <label className="text-white font-semibold">Email/Phone</label>
                 <input type="text" id="success" class="bg-green-50 border border-white    text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 " placeholder="Success input" />
               </div>
 
 
               <div>
                 <label className='text-white font-semibold'>Password</label>
                 <input type="text" id="success" class="bg-green-50 border border-white    text-sm rounded-lg focus:ring-white block w-full p-2.5 dark:bg-gray-700 " placeholder="Success input" />
                 <button className='bg-blue-600 p-2 w-full mt-4 text-white font-semibold rounded-md cursor-pointer'>Sign In</button>
                 <div className='flex items-center justify-center mt-2'>
                   <div className='flex flex-col'>
                     <h3>Don't have An Account ? <a href='selectAccounttype' className='text-white'>Signup</a></h3>
                     <div className='flex  justify-center items-center space-x-4'>
                       <h3 className='text-center mt-2'>FX Rates</h3>
                       <img src={exchangeRateficon} className='h-8 w-9 bg-cover' />
                     </div>
                   </div>
                 </div>
               </div>
 
             </div>

           
           </div>
         </div>
       </div>
     </>
  )
}
