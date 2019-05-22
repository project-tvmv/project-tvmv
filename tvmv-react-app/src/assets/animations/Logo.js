import React from 'react';

const Logo = () => {
  return <div id='logoContainer' />;
};

export default Logo;

var logoContainer = document.getElementById('logoContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: logoContainer,
  animType: 'svg',
  loop: true,
  path: ''
});
