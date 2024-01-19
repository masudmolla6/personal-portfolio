import { useEffect } from 'react';
import img1 from '../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import img2 from '../assets/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg'
import img3 from '../assets/ian-schneider-TamMbr4okv4-unsplash.jpg'
import img4 from '../assets/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import Aos from 'aos';

const Projects = () => {
    useEffect(() => {
      Aos.init({
        easing: "ease-out-quart",
        delay: 0,
        duration: 750,
      });
    }, [1000]);
    return (
      <div id='Projects' className="p-20 flex flex-col items-center justify-center ">
        <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
          Projects
        </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          <img data-aos='fade-up' height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img1} alt="" />
          <img data-aos='fade-down' height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img2} alt="" />
          <img data-aos='fade-up' height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img3} alt="" />
          <img data-aos='fade-down' height={250} width={250} className="flex items-center justify-center rounded-3xl p-1 border-2 border-fuchsia-800 b_glow" src={img4} alt="" />
        </div>
      </div>
    );
};

export default Projects;