import { RevealOnScroll } from "../RevealOnScroll";

export const Research = () => {
  return (
    <section
      id="research"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">A Novel DCGAN-Based Approach for
                High-Quality Cartoon Avatar Generation</h3>
              <p className="text-gray-400 mb-4">
                Designed an enhanced DCGAN architecture to generate realistic, animation-ready cartoon avatars with 
                improved training stability. By introducing strided convolutions, 
                fractional-strided upsampling, and optimized activation/normalization 
                choices, the model produced high-fidelity outputs with significantly 
                lower generator and discriminator losses.
              </p>
              <div className="flex justify-between items-center">
                  Publisher: Institute of Electrical and Electronics Engineers (IEEE)
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ieeexplore.ieee.org/document/11234802"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Paper →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">A Review on Brain-Computer Interface</h3>
              <p className="text-gray-400 mb-4">
                Reviewed state-of-the-art BCI systems across invasive and non-invasive 
                methods, including EEG and fNIRS-based interfaces. The paper analyzes 
                major neural decoding techniques, compares system capabilities, and 
                outlines real-world challenges in usability, accuracy, and deployment. 
                It serves as a practical guide for researchers and clinicians 
                advancing human–machine interaction technologies.
               </p>
              <div className="flex justify-between items-center">
                  Publisher: Institute of Electrical and Electronics Engineers (IEEE)
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://ieeexplore.ieee.org/document/11007402"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Paper →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};