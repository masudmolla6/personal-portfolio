import React, { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BallTriangle } from 'react-loader-spinner'


const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },2000)

  },[])

  return (
    <>
      {loading ? (
        <div className='bg-slate-800 h-screen flex justify-center items-center'>
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="bg-slate-900">
          <Nav></Nav>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default App;