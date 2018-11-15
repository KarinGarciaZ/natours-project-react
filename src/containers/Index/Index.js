import React, { Component } from 'react';
import Header from '../../components/Layouts/Header/Header';
import About from '../../components/Sections/About';
import Features from '../../components/Sections/Features';
import Tours from '../../components/Sections/Tours';
import Stories from '../../components/Sections/Stories';

class Index extends Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <About />
          <Features />
          <Tours />
          <Stories />
        </main>
      </div>
    );
  }
}

export default Index;
