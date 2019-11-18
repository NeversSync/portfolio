import React from 'react';
import { useSpring } from 'react-spring';
import { ImgWrapper, AnimatedImage } from './styles/About.style';
const profileImg =
  'https://res.cloudinary.com/nicky-cloudinary/image/upload/c_scale,w_1221/v1526599568/6-8.jpg';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AboutImage() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <ImgWrapper>
      <AnimatedImage
        style={{transform: props.xys.interpolate(trans)}}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        src={profileImg}
        alt=''
      />
    </ImgWrapper>
  );
}

export default AboutImage;
