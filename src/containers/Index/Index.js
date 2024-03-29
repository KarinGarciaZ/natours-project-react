import React, { Component } from 'react';
import Header from '../../components/Layouts/Header/Header';
import About from '../../components/Sections/About';
import Features from '../../components/Sections/Features';
import Tours from '../../components/Sections/Tours';
import Stories from '../../components/Sections/Stories';
import Book from '../../components/Sections/Book';
import Footer from '../../components/Layouts/Footer/Footer';

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
          <Book />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Index;
