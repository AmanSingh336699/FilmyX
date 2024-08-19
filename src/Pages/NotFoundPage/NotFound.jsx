import React from 'react';

const TVNotFound = () => {
  return (
    <div className="flex items-center ml-50 justify-center w-[30em] h-[30em]">
      <div className="flex flex-col items-center justify-center mt-[5em]">
        {/* Antenna */}
        <div className="relative w-[5em] h-[5em] rounded-full border-2 border-black bg-[#f27405] mb-[-6em] z-[-1]">
          <div className="absolute bg-transparent w-[50px] h-[56px] ml-[1.68em] rounded-[45%] rotate-[140deg] border-4 border-transparent shadow-[inset_0px_16px_#a85103,inset_0px_16px_1px_1px#a85103]"></div>
          <div className="absolute mt-[-9.4em] ml-[0.4em] rotate-[-25deg] w-[1em] h-[0.5em] rounded-full bg-[#f69e50]"></div>
          <div className="absolute mt-[0.2em] ml-[1.25em] rotate-[-20deg] w-[1.5em] h-[0.8em] rounded-full bg-[#f69e50]"></div>
          <div className="relative top-[-102%] left-[-130%] w-[12em] h-[5.5em] rounded-[50px] bg-gradient-to-b from-[#171717] to-[#353535] rotate-[-29deg] clip-path-[polygon(50%_0%,_49%_100%,_52%_100%)]"></div>
          <div className="relative top-[-211%] left-[-35%] rotate-[45deg] w-[0.5em] h-[0.5em] rounded-full border-2 border-black bg-[#979797] z-[99]"></div>
          <div className="relative top-[-210%] left-[-10%] w-[12em] h-[4em] rounded-[50px] bg-gradient-to-b from-[#171717] to-[#353535] rotate-[-8deg] clip-path-[polygon(47%_0,_47%_0,_34%_34%,_54%_25%,_32%_100%,_29%_96%,_49%_32%,_30%_38%)]"></div>
          <div className="relative top-[-294%] left-[94%] w-[0.5em] h-[0.5em] rounded-full border-2 border-black bg-[#979797] z-[99]"></div>
        </div>

        {/* TV */}
        <div className="relative w-[17em] h-[9em] mt-[3em] rounded-[15px] bg-[#d36604] flex justify-center border-2 border-[#1d0e01] shadow-[inset_0.2em_0.2em_#e69635]">
          <svg
            className="absolute mt-[0.25em] ml-[-0.25em] h-[12px] w-[12px]"
            viewBox="0 0 189.929 189.929"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13 C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"></path>
          </svg>

          <div className="flex items-center justify-center rounded-[15px] shadow-[3.5px_3.5px_0px_#e69635]">
            <div className="w-auto h-auto rounded-[10px]">
              <div className="w-[11em] h-[7.75em] flex items-center justify-center rounded-[10px]">
                <div className="w-[13em] h-[7.85em] font-bold text-center flex items-center justify-center border-2 border-[#1d0e01] bg-[#000] bg-blend-difference animation-b rounded-[10px] z-[99] text-[0.75em] text-white px-[0.3em]">
                  NOT FOUND
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full h-auto flex items-center justify-center space-x-[8.7em]">
          <div className="h-[1em] w-[2em] border-2 border-[#171717] bg-[#4d4d4d] mt-[-0.15em] z-[-1]"></div>
          <div className="h-[1em] w-[2em] border-2 border-[#171717] bg-[#4d4d4d] mt-[-0.15em] z-[-1]"></div>
          <div className="absolute h-[0.15em] w-[17.5em] bg-[#171717] mt-[0.8em]"></div>
        </div>
      </div>

      {/* 404 Text */}
      <div className="absolute flex flex-row space-x-[6em] z-[-5] mb-[2em] items-center justify-center opacity-50 font-montserrat">
        <div className="transform scale-y-[24.5] scale-x-[9]">4</div>
        <div className="transform scale-y-[24.5] scale-x-[9]">0</div>
        <div className="transform scale-y-[24.5] scale-x-[9]">4</div>
      </div>
    </div>
  );
};

export default TVNotFound;