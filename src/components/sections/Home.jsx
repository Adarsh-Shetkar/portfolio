import { RevealOnScroll } from "../RevealOnScroll";
import profileImg3 from "../../assets/p3.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto px-6 md:px-12">
          
          {/* 2. TEXT CONTENT (Wider to prevent "squeezing") */}
          <div className="text-left flex-[1.5] w-full">
            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Adarsh <br /> Shetkar
            </h1>

            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              I’m a Software Engineer at JPMorgan Chase, where I design and build
              scalable, high-performance applications. I care deeply about clean
              engineering practices and creating solutions that are both robust
              and user-centered.
            </p>

            <div className="flex flex-wrap gap-4 justify-start">
              <a
                href="#projects"
                className="bg-blue-600 text-white py-3.5 px-8 rounded-lg font-semibold transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-500/40 text-blue-400 py-3.5 px-8 rounded-lg font-semibold transition-all hover:bg-blue-500/10 hover:-translate-y-1"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* 3. THE CIRCULAR PROFILE IMAGE */}
          <div className="flex-1 flex justify-center items-center">
             <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
                {/* Blue Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[80px] animate-pulse"></div>
                
                {/* The Circular Frame */}
                <div className="relative w-full h-full rounded-full border-2 border-blue-500/20 overflow-hidden shadow-2xl">
                    <img 
                        src={profileImg3}
                        alt="Adarsh Shetkar Profile"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
             </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};