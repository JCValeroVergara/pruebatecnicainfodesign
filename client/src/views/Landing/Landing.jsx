import { Carousel, Footer, HeaderLanding } from '../../components';


const Landing = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <HeaderLanding />
      <div className="flex flex-grow items-center justify-center">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;