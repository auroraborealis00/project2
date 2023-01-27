import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans"> Growing up very closely with my family I inherited their passion for food. For me food is something you need to enjoy with your family and close friends, even more so when you are cooking together.
When creating dishes, I use the inspirations I got from my childhood, and travels around the world. Very often I can get inspired by the color of leaves on trees, or the smell of fresh bread coming out of my grandmothers oven. </p>
        </div>
        <p className="p__opensans"> For me, cooking is a journey, a journey that only I have experienced, and now I am able to share that journey with you, in the dishes that we will cook together, as every dish has its unique story.
Let us cook together, and allow me to take you to a journey, and share my culinary philosophy with you. </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;