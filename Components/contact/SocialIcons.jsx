import React from 'react'
import {BsBehance, BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=61552335848639' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              {/* <a href='https://www.behance.net/hassanalhaj1 '
              target='_blank' className='text-3xl hover:opacity-70' >
              <BsBehance/>
              </a>  */}

             {/* <a href='https://github.com/Hassanelhaj' target='_blank' className='text-3xl hover:opacity-70'>
              <BsGithub/>
              </a> */}
          
             <a target='_blank' href='milto:0965039101hiba@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons