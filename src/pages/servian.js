import React from 'react';

import pic4 from '../images/pic04.jpg';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';


const SecondPage = () => (
  <Layout>
    <Header />

    <div id="wrapper">
      <section id="main" className="wrapper">
        <div className="inner">
          <h1 className="major">Servian</h1>
          <span className="image fit">
            <img src={pic4} alt="" />
          </span>
          <p>
          Data is our heritage and has always been at the core of everything we do at Servian. Our mission is to enable our customers to use their data and analytics to build competitive advantage. Our expertise in data and analytics strengthens our ability to provide data-driven solutions for our Digital and Customer Engagement services, aided by our expertise in Cloud & Technology.
          </p>
          <p>
          Artificial Intelligence is fueled by the combination of data, advanced analytics and cognitive services. Our digital capability together with our applied machine learning and deep learning experience produces synergy to your innovation success.  
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default SecondPage;
