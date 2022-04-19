import React from 'react';

const NavigationDots = ({ active }) => {
  // 'testimonials'
  return (
    <div className='app__navigation'>
      {['home', 'about',  'work', 'skills', 'contact'].map(
        (item, idx) => (
          <a key={item + idx} href={`#${item}`} className="app__navigation-dot" style={active === item ? {backgroundColor: '#313BAC'} : {}}>
            {''}
          </a>
        )
      )}
    </div>
  );
};

export default NavigationDots;
