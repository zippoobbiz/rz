import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic3 from '../../images/pic03.jpg';
import servian from '../../images/servian.jpeg';
import taylortutoring from '../../images/taylortutoring.jpeg';
import tektindustries from '../../images/tektindustries.jpeg';
import telstra from '../../images/telstra.jpeg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: servian,
      heading: 'Servian Full-time',
      description: 'Frontend Developer',
      to: {
        href: '/servian',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: telstra,
      heading: 'Telstra Full-time',
      description: 'Graduate Engineer.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: taylortutoring,
      heading: 'Tutor Taylor Tutoring Part-time',
      description: 'Provided weekly physics tutoring to a group of 3 students. Reviewed materials assigned by the students’ teachers and helped students complete their homework.Two of the year 12 students had very poor academic performance and I helped them to improve their final grade in order to get into University.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
    {
      href: '/#',
      image: tektindustries,
      heading: 'Tekt Industries Pty. Ltd Intern Contract',
      description: 'Internship Project: ’Cricket Timer’ Jan 2017–Sept 2017 This practical project was a part of my internship with Tekt Industries, a Melbourne based technology design and product company. The system goal was to design a visible and sturdy time display that blinked and played an alarm every 30 minutes. Four Arduino units with Ethernet was used to control the sixteen 7 segment displays, the Arduinos all communicate with the Raspberry Pi to get the correct timing information. A real time clock (RTC) was also integrated into the whole system so the device can act as a stand alone unit with no internet connection.',
      to: {
        href: '/generic',
        label: 'Learn more',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="one" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
