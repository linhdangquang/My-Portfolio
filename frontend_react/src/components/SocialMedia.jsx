import React from 'react';
import { BsFacebook, BsLinkedin, BsGithub } from 'react-icons/bs';
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://github.com/linhdangquang'
          target='_blank'
          rel='noreferrer'
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/never.love.again.its.so.pain/'
          target='_blank'
          rel='noreferrer'
        >
          <BsFacebook />
        </a>
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/dangquanglinh/'
          target='_blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
