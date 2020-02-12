import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Roza Jiang</h1>
      <p>
      Driven by problem solving and putting fun software concepts into{' '}
        <a href="http://html5up.net">practice</a>
        <br />
        Always willing to get out of my comfort zone, chase the best solutions with {' '}
        <a href="http://html5up.net/license">new tech</a>.
      </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              Find out more
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;
