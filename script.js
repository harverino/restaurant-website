const animateElement = document.querySelector('.animate__slideInLeft');

const animateCallback = () => {
  animateElement.classList.add('animate__animated', 'animate__slideInLeft');
};

const animateOptions = {
  offset: '75%'
};

const animateWaypoint = new Waypoint({
  element: animateElement,
  handler: animateCallback,
  ...animateOptions
});