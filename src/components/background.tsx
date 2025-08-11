import React, { useEffect, useRef, useState } from "react";

const BgLightGrid1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
  );
};

const BgLightGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const BgLightGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </div>
  );
};

const BgLightGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]" />
    </div>
  );
};

const BgLightGrid3 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};

const BgLightGridGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
    </div>
  );
};

const BgDarkGradient1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  );
};

const BgLightGrid4 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
  );
};

const BgLightGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]" />
  );
};

const BgDarkGradient2 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient3 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />
  );
};

const BgLightGradient4 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
};

const BgLightGradient5 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
  );
};

const BgLightGradient6 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
  );
};

const BgDarkGrid1 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
  );
};

const BgDarkGradient3 = () => {
  return (
    <div className="relative h-full w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
    </div>
  );
};

const BgLightGridGradient2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
    </div>
  );
};

const BgDarkGradient4 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
    </div>
  );
};

const BgDarkGradient5 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
    </div>
  );
};

const BgDarkGrid2 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
    </div>
  );
};

const BgDarkGridGradient1 = () => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
    </div>
  );
};

const BgDarkGrid3 = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const BgDarkGrid4 = () => {
  return (
    <div className="relative h-full w-full bg-sky-200">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
const BgDarkGrid5 = () => {
  return (
    <div className="relative h-full w-full bg-red-300">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};

const BgDarkGrid7 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e293b] bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[#0f172a] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#475569] opacity-50" />
    </div>
  );
};
const BgLightGridD1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:14px_24px]" />
  );
};
const BgLightGridD2 = () => {
  return (
    <div className="relative h-full w-full bg-[rgb(255,200,200)]">
      <div className="absolute h-full w-full bg-[radial-gradient(rgb(229,231,235)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(0,0,0)_70%,transparent_100%)]" />
    </div>
  );
};
const BgColorGrids = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-blue-100 bg-pattern">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-radial bg-blue-100"></div>
    </div>
  );
};
const BgColorGridsA1 = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-pink-200 to-white"></div>
      <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-pink-200 to-white"></div>
      <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-pink-200 to-white"></div>
      <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-pink-200 to-white"></div>
    </div>
  );
};
const BgColorGridsA2 = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute top-0 left-0 z-[-2] h-full w-full bg-gradient-to-r from-red-200 to-yellow-200"></div>
      <div className="absolute top-0 right-0 z-[-2] h-full w-full bg-gradient-to-l from-blue-200 to-white"></div>
      <div className="absolute bottom-0 left-0 z-[-2] h-full w-full bg-gradient-to-t from-yellow-200 to-black"></div>
      <div className="absolute bottom-0 right-0 z-[-2] h-full w-full bg-gradient-to-b from-blue-200 to-white"></div>
    </div>
  );
};
const BgColorGridsA3 = () => {
  return (
    <div className="absolute top-0 -z-10 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(109,244,173,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};
const BgColorGridsA4 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff,transparent)]"></div>
    </div>
  );
};
const BgColorGridsA5 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,0.8)_0%,rgba(255,342,203,0.5)_50%,rgba(0,0,0,0)_100%)]"></div>
  );
};
const BgColorGridsA6 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black animate-focus-move"
        style={{
          background:
            "radial-gradient(25% 125% at 50% 10%, #ffffff 40%, #6a0dad 100%)",
          backgroundSize: "200% 200%",
          animation: "focusMove 10s ease-in-out infinite",
        }}
      ></div>
      <style>{`
        @keyframes focusMove {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
};
const BgColorGridsA7 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_125%_at_50%_10%,#ffffff_0%,#ffffff_40%,#000000_100%)]"></div>
  );
};
const BgColorGridsA8 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_40%,#add8e6_100%)]"></div>
  );
};
const BgColorGridsA9 = () => {
  return (
    <div className="relative h-full w-full bg-black overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(25%_25%_at_10%_10%,#ffffff_0%,#ffffff_40%,#1a1a1a_100%)]"></div>

      {/* Particles */}
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `particleMove ${Math.random() * 5 + 2}s infinite linear`,
            opacity: Math.random(),
          }}
        ></div>
      ))}

      <style jsx>{`
        @keyframes particleMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

const BgColorGridsA10: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient"></div>
      <style>
        {`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        .animate-gradient {
          background: linear-gradient(45deg, #ff6f61, #d0e1f9, #6b5b95);
          background-size: 300% 300%;
          animation: gradientAnimation 10s ease infinite;
        }
      `}
      </style>
    </div>
  );
};
export default BgColorGrids;
const CrazyAnimatedBackground: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-[-2] bg-black animate-crazy-background"></div>
      <style>
        {`
          @keyframes crazyBackground {
            0% {
              background: radial-gradient(#ffffff33 1px, #00091d 1px);
              background-size: 20px 20px;
              transform: scale(1) rotate(0deg);
            }
            25% {
              background: radial-gradient(#ff0000 1px, #000000 1px);
              background-size: 50px 50px;
              transform: scale(1.2) rotate(45deg);
            }
            50% {
              background: radial-gradient(#00ff00 1px, #000000 1px);
              background-size: 100px 100px;
              transform: scale(1) rotate(90deg);
            }
            75% {
              background: radial-gradient(#0000ff 1px, #000000 1px);
              background-size: 150px 150px;
              transform: scale(1.2) rotate(135deg);
            }
            100% {
              background: radial-gradient(#ffffff33 1px, #00091d 1px);
              background-size: 20px 20px;
              transform: scale(1) rotate(180deg);
            }
          }
          .animate-crazy-background {
            animation: crazyBackground 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};
const WaterBloomBackground: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="water-blooms">
          {Array.from({ length: 50 }).map((_, index) => (
            <div
              key={index}
              className="water-bloom"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <style>
        {`
          .water-blooms {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .water-bloom {
            position: absolute;
            background-color: rgba(0, 150, 255, 0.6);
            border-radius: 50%;
            opacity: 0.6;
            animation: floatUp 10s ease-in-out infinite;
          }
          @keyframes floatUp {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-100vh) scale(1.5);
              opacity: 0.4;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 0.6;
            }
          }
        `}
      </style>
    </div>
  );
};
const CartoonCloudsBackground: React.FC = () => {
  return (
    <div className="relative h-full w-screen overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="background">
          <div className="clouds">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="cloud"
                style={{
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                  width: `${Math.random() * 150 + 100}px`,
                  height: `${Math.random() * 60 + 60}px`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${20 + Math.random() * 10}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          .background {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #829eeb; /* Light sky blue */
          }
          .clouds {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .cloud {
            position: absolute;
            background: #334dash;
            border-radius: 100%;
            box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
            opacity: 0.9;
            animation: floatClouds linear infinite;
          }
          @keyframes floatClouds {
            0% {
              transform: translateX(-160vw);
            }
            100% {
              transform: translateX(130vw);
            }
          }
        `}
      </style>
    </div>
  );
};
const Darkbg1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full 1e1e] bg-[linear-gradient(to_right,#2d2d6d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:190px_196px]" />
  );
};
const Darkbg2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#1e1e1e] bg-[linear-gradient(to_right,#2d2d2d_1px,transparent_1px),linear-gradient(to_bottom,#2d2d2d_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_100px,#C9EBFF,transparent)]"></div>
    </div>
  );
};
const Lightbg1 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#e0f7fa_40%,#dcf235_100%)]"></div>
  );
};
const Lightbg2 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffebee_40%,#ff9800_100%)]"></div>
  );
};
const Lightbg3 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#000000_100%)]"></div>
  );
};
const Lightbg4 = () => {
  return (
    <div className="relative h-full w-full bg-slate-50">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,87,34,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,87,34,.15),rgba(255,255,255,0))]"></div>
    </div>
  );
};
const Lightbg5 = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full bg-[linear-gradient(to_right,#2d2d2d_20px,transparent_20px),linear-gradient(to_bottom,#2d2d2d_20px,transparent_20px),linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:0px_10px,100px_100px,50px_50px,50px_50px] bg-[position:0_0,0_0,0_0,0_0]"></div>
  );
};
const Lightbg6 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-yellow-400 to-green-300 animate-gradient"></div>
      <style>
        {`     @keyframes gradientAnimation {
      0% {
        background-position: 0% 0%;
      }
      50% {
        background-position: 100% 100%;
      }
      100% {
        background-position: 0% 0%;
      }
    }
    .animate-gradient {
      background: linear-gradient(45deg, rgba(22, 255, 102, 0.6), rgba(255, 255, 255, 0.3), rgba(222, 255, 102, 0.6));
      background-size: 300% 300%;
      animation: gradientAnimation 10s ease infinite;
    }`}
      </style>
    </div>
  );
};
const Lightbg7 = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#FF7757,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_20%_80px,#FF63B9,transparent)]"></div>
    </div>
  );
};
const Lightbg8 = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#8FFFB0,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#EAFF45,transparent)]"></div>
    </div>
  );
};
const Lightbg9 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF7112,transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFF991,transparent)]"></div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FFF991,transparent)] opacity-60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#FF7112,transparent)] opacity-30 mix-blend-multiply"></div>
      </div>
    </div>
  );
};
const Lightbg10 = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,#FF4D00_0,#FF4D00_50%,transparent_100%)]"></div>
  );
};
// Retro 80s Neon BG
const BgRetroNeon = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-black via-fuchsia-900 to-blue-900">
    <div className="absolute left-0 right-0 bottom-0 h-1/2 w-full bg-gradient-to-t from-fuchsia-500/60 to-transparent blur-2xl" />
    <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/40 blur-2xl" />
    <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-fuchsia-400/40 blur-2xl" />
  </div>
);

// Organic Blob BG
const BgOrganicBlob = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-green-50 via-blue-50 to-purple-100">
    <svg
      className="absolute left-1/4 top-1/4 opacity-30"
      width="300"
      height="300"
      viewBox="0 0 300 300"
    >
      <path
        d="M60,150 Q90,60 150,90 Q210,120 180,210 Q120,270 60,150 Z"
        fill="#a7f3d0"
      />
    </svg>
    <svg
      className="absolute right-1/4 bottom-1/4 opacity-20"
      width="200"
      height="200"
      viewBox="0 0 200 200"
    >
      <ellipse cx="100" cy="100" rx="80" ry="50" fill="#818cf8" />
    </svg>
  </div>
);

// Minimal Lines BG
const BgMinimalLines = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-white">
    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#e5e7eb_0_1px,transparent_1px_40px)] opacity-60" />
    <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,#e5e7eb_0_1px,transparent_1px_40px)] opacity-60" />
  </div>
);

// Geometric Shapes BG
const BgGeometricShapes = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50">
    <svg
      className="absolute left-10 top-10 opacity-20"
      width="120"
      height="120"
    >
      <polygon points="60,10 110,110 10,110" fill="#fbbf24" />
    </svg>
    <svg
      className="absolute right-10 bottom-10 opacity-20"
      width="100"
      height="100"
    >
      <rect width="100" height="100" rx="20" fill="#60a5fa" />
    </svg>
  </div>
);

// Aurora Gradient BG
const BgAurora = () => (
  <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-indigo-900 via-green-400/30 to-fuchsia-600/40">
    <div className="absolute left-1/3 top-1/4 h-80 w-80 rounded-full bg-green-300/30 blur-3xl" />
    <div className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-fuchsia-400/30 blur-2xl" />
  </div>
);
// Modern Glassmorphism Light BG
const BgGlassmorphismLight = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-white via-blue-100 to-purple-100">
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-3xl bg-white/40 shadow-2xl backdrop-blur-2xl border border-white/30" />
      <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-purple-200/40 blur-2xl" />
    </div>
  );
};

// Abstract Shapes Light BG
const BgAbstractShapesLight = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-pink-50 via-blue-50 to-yellow-50">
      <svg
        className="absolute left-10 top-10 opacity-30"
        width="200"
        height="200"
      >
        <circle cx="100" cy="100" r="80" fill="#a5b4fc" />
      </svg>
      <svg
        className="absolute right-10 bottom-10 opacity-20"
        width="180"
        height="180"
      >
        <rect width="180" height="180" rx="40" fill="#fbcfe8" />
      </svg>
    </div>
  );
};

// Modern Glassmorphism Dark BG
const BgGlassmorphismDark = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-neutral-900 via-indigo-950 to-fuchsia-950">
      <div className="absolute left-1/4 top-1/4 h-80 w-80 rounded-3xl bg-white/10 shadow-2xl backdrop-blur-2xl border border-white/10" />
      <div className="absolute right-1/4 bottom-1/4 h-60 w-60 rounded-full bg-fuchsia-900/40 blur-2xl" />
    </div>
  );
};

// Abstract Shapes Dark BG
const BgAbstractShapesDark = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-tr from-neutral-900 via-indigo-950 to-fuchsia-950">
      <svg
        className="absolute left-10 top-10 opacity-20"
        width="200"
        height="200"
      >
        <circle cx="100" cy="100" r="80" fill="#818cf8" />
      </svg>
      <svg
        className="absolute right-10 bottom-10 opacity-10"
        width="180"
        height="180"
      >
        <rect width="180" height="180" rx="40" fill="#f472b6" />
      </svg>
    </div>
  );
};

// New background components
const BgAnimatedGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent" />
    </div>
  );
};

const BgHexagonPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-slate-50">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

const BgFloatingOrbs = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="absolute top-[10%] left-[10%] h-64 w-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 blur-3xl animate-pulse" />
      <div className="absolute top-[60%] right-[15%] h-48 w-48 rounded-full bg-gradient-to-br from-pink-400 to-red-600 opacity-25 blur-2xl animate-pulse [animation-delay:2s]" />
      <div className="absolute bottom-[20%] left-[20%] h-32 w-32 rounded-full bg-gradient-to-br from-green-400 to-teal-600 opacity-30 blur-xl animate-pulse [animation-delay:4s]" />
    </div>
  );
};

const BgGhibliDream = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-sky-200 via-emerald-50 to-green-100">
      {/* Soft clouds */}
      <div className="absolute top-[5%] left-[10%] h-16 w-32 rounded-full bg-white/70 blur-sm" />
      <div className="absolute top-[8%] left-[15%] h-12 w-24 rounded-full bg-white/50 blur-sm" />
      <div className="absolute top-[12%] right-[20%] h-20 w-40 rounded-full bg-white/60 blur-md" />
      <div className="absolute top-[15%] right-[25%] h-14 w-28 rounded-full bg-white/40 blur-sm" />
      <div className="absolute top-[20%] left-[60%] h-18 w-36 rounded-full bg-white/55 blur-md" />

      {/* Rolling hills */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-300/40 to-transparent rounded-t-full transform scale-x-150" />
      <div className="absolute bottom-0 left-[20%] right-0 h-24 bg-gradient-to-t from-emerald-200/30 to-transparent rounded-t-full transform scale-x-125" />

      {/* Floating dandelion seeds */}
      <div className="absolute top-[30%] left-[15%] h-1 w-1 bg-yellow-200 rounded-full animate-pulse" />
      <div className="absolute top-[45%] left-[25%] h-0.5 w-0.5 bg-white rounded-full animate-pulse [animation-delay:1s]" />
      <div className="absolute top-[55%] right-[30%] h-1 w-1 bg-yellow-100 rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[35%] right-[20%] h-0.5 w-0.5 bg-green-100 rounded-full animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-[65%] left-[40%] h-1 w-1 bg-yellow-200 rounded-full animate-pulse [animation-delay:3s]" />

      {/* Magical sparkles */}
      <div className="absolute top-[25%] left-[70%] h-2 w-2 bg-yellow-300/60 rounded-full blur-sm animate-pulse [animation-delay:0.5s]" />
      <div className="absolute top-[40%] right-[15%] h-1.5 w-1.5 bg-pink-200/70 rounded-full blur-sm animate-pulse [animation-delay:2.5s]" />
      <div className="absolute top-[60%] left-[20%] h-2 w-2 bg-blue-200/50 rounded-full blur-sm animate-pulse [animation-delay:1.8s]" />

      {/* Soft overlay for dreamy effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-green-50/30" />
    </div>
  );
};

const BgLiquidGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-200/40 via-pink-200/40 to-cyan-200/40" />
      <div className="absolute top-[20%] left-[10%] h-96 w-96 rounded-full bg-gradient-to-br from-blue-300/30 to-purple-400/30 blur-3xl animate-pulse" />
      <div className="absolute bottom-[10%] right-[15%] h-80 w-80 rounded-full bg-gradient-to-br from-pink-300/30 to-orange-400/30 blur-3xl animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[50%] left-[50%] h-72 w-72 rounded-full bg-gradient-to-br from-cyan-300/25 to-teal-400/25 blur-2xl animate-pulse [animation-delay:4s]" />
    </div>
  );
};

const BgDarkNeon = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.3)_0%,transparent_50%)] opacity-50" />
      <div className="absolute top-[20%] left-[20%] h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      <div className="absolute top-[60%] right-[30%] h-px w-48 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse [animation-delay:1s]" />
      <div className="absolute bottom-[30%] left-[40%] h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse [animation-delay:2s]" />
    </div>
  );
};

const BgMeshGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-blue-200/50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-green-200/30 via-transparent to-yellow-200/30" />
    </div>
  );
};

const BgDarkParticles = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950">
      <div className="absolute top-[10%] left-[5%] h-1 w-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-[25%] left-[15%] h-0.5 w-0.5 bg-blue-400 rounded-full animate-pulse [animation-delay:1s]" />
      <div className="absolute top-[45%] left-[8%] h-1 w-1 bg-purple-400 rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[65%] left-[12%] h-0.5 w-0.5 bg-pink-400 rounded-full animate-pulse [animation-delay:3s]" />
      <div className="absolute top-[80%] left-[6%] h-1 w-1 bg-cyan-400 rounded-full animate-pulse [animation-delay:4s]" />

      <div className="absolute top-[15%] right-[10%] h-0.5 w-0.5 bg-white rounded-full animate-pulse [animation-delay:0.5s]" />
      <div className="absolute top-[35%] right-[20%] h-1 w-1 bg-green-400 rounded-full animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-[55%] right-[15%] h-0.5 w-0.5 bg-yellow-400 rounded-full animate-pulse [animation-delay:2.5s]" />
      <div className="absolute top-[75%] right-[8%] h-1 w-1 bg-red-400 rounded-full animate-pulse [animation-delay:3.5s]" />

      <div className="absolute top-[30%] left-[50%] h-0.5 w-0.5 bg-indigo-400 rounded-full animate-pulse [animation-delay:1.2s]" />
      <div className="absolute top-[70%] left-[45%] h-1 w-1 bg-teal-400 rounded-full animate-pulse [animation-delay:2.8s]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
    </div>
  );
};

const BgDottedPattern = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-rose-50 to-teal-50">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ec4899 1.5px, transparent 1.5px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #06b6d4 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          backgroundPosition: "25px 25px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
    </div>
  );
};

const BgBokehLights = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="absolute top-[15%] left-[10%] h-24 w-24 rounded-full bg-yellow-300/30 blur-xl animate-pulse" />
      <div className="absolute top-[45%] right-[15%] h-32 w-32 rounded-full bg-pink-300/25 blur-2xl animate-pulse [animation-delay:1s]" />
      <div className="absolute bottom-[30%] left-[25%] h-16 w-16 rounded-full bg-blue-300/35 blur-lg animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[25%] left-[60%] h-20 w-20 rounded-full bg-green-300/30 blur-xl animate-pulse [animation-delay:1.5s]" />
      <div className="absolute bottom-[15%] right-[30%] h-28 w-28 rounded-full bg-purple-300/25 blur-2xl animate-pulse [animation-delay:2.5s]" />
      <div className="absolute top-[70%] left-[70%] h-12 w-12 rounded-full bg-orange-300/40 blur-lg animate-pulse [animation-delay:3s]" />
      <div className="absolute top-[80%] right-[50%] h-18 w-18 rounded-full bg-cyan-300/30 blur-xl animate-pulse [animation-delay:0.5s]" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
};

const BgGhibliNight = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-indigo-950 via-purple-900 to-indigo-800">
      {/* Moon */}
      <div className="absolute top-[15%] right-[20%] h-16 w-16 rounded-full bg-yellow-100/90 blur-sm" />
      <div className="absolute top-[15%] right-[20%] h-14 w-14 rounded-full bg-white/70" />

      {/* Stars */}
      <div className="absolute top-[10%] left-[15%] h-1 w-1 bg-white rounded-full animate-pulse" />
      <div className="absolute top-[25%] left-[8%] h-0.5 w-0.5 bg-yellow-200 rounded-full animate-pulse [animation-delay:1s]" />
      <div className="absolute top-[20%] left-[30%] h-1 w-1 bg-white rounded-full animate-pulse [animation-delay:2s]" />
      <div className="absolute top-[35%] right-[15%] h-0.5 w-0.5 bg-blue-100 rounded-full animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-[45%] left-[25%] h-1 w-1 bg-white rounded-full animate-pulse [animation-delay:3s]" />
      <div className="absolute top-[30%] right-[40%] h-0.5 w-0.5 bg-yellow-200 rounded-full animate-pulse [animation-delay:0.8s]" />
      <div className="absolute top-[50%] right-[10%] h-1 w-1 bg-white rounded-full animate-pulse [animation-delay:2.3s]" />

      {/* Floating castle silhouette */}
      <div className="absolute top-[40%] left-[10%] h-8 w-12 bg-black/30 rounded-sm" />
      <div className="absolute top-[42%] left-[12%] h-4 w-8 bg-black/20 rounded-sm" />

      {/* Magical particles */}
      <div className="absolute top-[60%] left-[20%] h-1.5 w-1.5 bg-green-300/60 rounded-full blur-sm animate-pulse [animation-delay:1.2s]" />
      <div className="absolute top-[70%] right-[25%] h-2 w-2 bg-blue-300/50 rounded-full blur-sm animate-pulse [animation-delay:2.8s]" />
      <div className="absolute top-[55%] left-[60%] h-1 w-1 bg-pink-300/70 rounded-full blur-sm animate-pulse [animation-delay:0.7s]" />

      {/* Soft cloud wisps */}
      <div className="absolute bottom-[20%] left-[5%] h-6 w-20 rounded-full bg-white/10 blur-md" />
      <div className="absolute bottom-[15%] right-[10%] h-8 w-24 rounded-full bg-white/8 blur-lg" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
};

const BgGhibliForest = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-emerald-800 via-green-700 to-green-900">
      {/* Tree silhouettes */}
      <div className="absolute bottom-0 left-[5%] h-40 w-3 bg-green-950/60 rounded-t-full" />
      <div className="absolute bottom-0 left-[15%] h-32 w-2 bg-green-950/50 rounded-t-full" />
      <div className="absolute bottom-0 left-[25%] h-48 w-4 bg-green-950/70 rounded-t-full" />
      <div className="absolute bottom-0 right-[20%] h-36 w-3 bg-green-950/55 rounded-t-full" />
      <div className="absolute bottom-0 right-[8%] h-44 w-3 bg-green-950/65 rounded-t-full" />

      {/* Tree canopies */}
      <div className="absolute bottom-[25%] left-[3%] h-20 w-20 bg-green-800/40 rounded-full blur-sm" />
      <div className="absolute bottom-[20%] left-[13%] h-16 w-16 bg-green-700/30 rounded-full blur-sm" />
      <div className="absolute bottom-[30%] left-[22%] h-24 w-24 bg-green-800/50 rounded-full blur-md" />
      <div className="absolute bottom-[22%] right-[18%] h-18 w-18 bg-green-700/35 rounded-full blur-sm" />
      <div className="absolute bottom-[28%] right-[6%] h-22 w-22 bg-green-800/45 rounded-full blur-md" />

      {/* Kodama (tree spirits) - tiny white glowing dots */}
      <div className="absolute top-[40%] left-[30%] h-2 w-2 bg-white/80 rounded-full blur-sm animate-pulse" />
      <div className="absolute top-[55%] right-[35%] h-1.5 w-1.5 bg-white/70 rounded-full blur-sm animate-pulse [animation-delay:1.5s]" />
      <div className="absolute top-[65%] left-[45%] h-2 w-2 bg-white/75 rounded-full blur-sm animate-pulse [animation-delay:2.2s]" />

      {/* Magical forest sparkles */}
      <div className="absolute top-[35%] left-[20%] h-1 w-1 bg-green-300/60 rounded-full animate-pulse [animation-delay:0.8s]" />
      <div className="absolute top-[50%] right-[25%] h-1 w-1 bg-yellow-300/50 rounded-full animate-pulse [animation-delay:1.8s]" />
      <div className="absolute top-[45%] left-[60%] h-1 w-1 bg-blue-300/40 rounded-full animate-pulse [animation-delay:2.5s]" />

      {/* Sunlight filtering through */}
      <div className="absolute top-[10%] left-[40%] h-32 w-2 bg-yellow-200/20 blur-md rotate-12" />
      <div className="absolute top-[15%] right-[30%] h-28 w-1.5 bg-yellow-100/15 blur-md rotate-[-8deg]" />

      <div className="absolute inset-0 bg-gradient-to-t from-green-950/30 via-transparent to-emerald-800/20" />
    </div>
  );
};

const BgGhibliOcean = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-sky-300 via-blue-400 to-blue-600">
      {/* Ocean waves - fixed and more natural */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/50 to-transparent"
        style={{ clipPath: "ellipse(100% 100% at 50% 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-400/40 to-transparent animate-pulse [animation-delay:1s]"
        style={{ clipPath: "ellipse(120% 80% at 30% 100%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cyan-400/30 to-transparent animate-pulse [animation-delay:2s]"
        style={{ clipPath: "ellipse(110% 90% at 70% 100%)" }}
      />

      {/* Sea foam and bubbles */}
      <div className="absolute bottom-[12%] left-[20%] h-3 w-3 bg-white/60 rounded-full blur-sm animate-pulse" />
      <div className="absolute bottom-[15%] right-[30%] h-2 w-2 bg-white/50 rounded-full blur-sm animate-pulse [animation-delay:0.5s]" />
      <div className="absolute bottom-[18%] left-[60%] h-4 w-4 bg-white/40 rounded-full blur-md animate-pulse [animation-delay:1.2s]" />
      <div className="absolute bottom-[20%] left-[40%] h-2 w-2 bg-cyan-100/60 rounded-full blur-sm animate-pulse [animation-delay:1.8s]" />

      {/* Fish-like magical creatures */}
      <div className="absolute top-[30%] left-[15%] h-1 w-3 bg-pink-300/70 rounded-full blur-sm animate-pulse [animation-delay:2.3s]" />
      <div className="absolute top-[45%] right-[25%] h-1 w-2 bg-orange-300/60 rounded-full blur-sm animate-pulse [animation-delay:1.7s]" />
      <div className="absolute top-[60%] left-[50%] h-1 w-4 bg-yellow-300/50 rounded-full blur-sm animate-pulse [animation-delay:0.9s]" />

      {/* Soft clouds in the sky */}
      <div className="absolute top-[5%] left-[20%] h-8 w-16 rounded-full bg-white/70 blur-sm" />
      <div className="absolute top-[10%] right-[15%] h-6 w-12 rounded-full bg-white/60 blur-sm" />
      <div className="absolute top-[15%] left-[60%] h-10 w-20 rounded-full bg-white/50 blur-md" />

      {/* Water sparkles */}
      <div className="absolute top-[35%] left-[25%] h-1.5 w-1.5 bg-white/80 rounded-full blur-sm animate-pulse [animation-delay:1.1s]" />
      <div className="absolute top-[50%] right-[20%] h-1 w-1 bg-cyan-200/70 rounded-full blur-sm animate-pulse [animation-delay:2.1s]" />
      <div className="absolute top-[65%] left-[70%] h-2 w-2 bg-blue-200/60 rounded-full blur-sm animate-pulse [animation-delay:1.4s]" />

      <div className="absolute inset-0 bg-gradient-to-t from-blue-700/20 via-transparent to-sky-200/30" />
    </div>
  );
};

const BgLightGridDiagonal = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(45deg,#f0f0f0_1px,transparent_1px),linear-gradient(-45deg,#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,#d1d5db_50%,transparent_51%),linear-gradient(-45deg,transparent_49%,#d1d5db_50%,transparent_51%)] bg-[size:40px_40px] opacity-30" />
      <div className="absolute top-[20%] right-[20%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-violet-200/40 via-pink-200/30 to-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-[15%] left-[15%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-teal-200/30 blur-2xl" />
    </div>
  );
};

const BgDarkGridHex = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950">
      {/* Base aurora layers with smooth fades */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/15 via-teal-500/8 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/12 via-rose-500/6 to-transparent" />

      {/* Floating ethereal orbs */}
      <div className="absolute top-[20%] left-[15%] h-[300px] w-[300px] rounded-full bg-gradient-to-br from-violet-400/25 to-purple-600/5 blur-3xl animate-pulse [animation-duration:8s]" />
      <div className="absolute top-[50%] right-[10%] h-[250px] w-[250px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/5 blur-3xl animate-pulse [animation-duration:6s] [animation-delay:2s]" />
      <div className="absolute bottom-[30%] left-[40%] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-emerald-400/18 to-green-600/4 blur-3xl animate-pulse [animation-duration:10s] [animation-delay:4s]" />
      <div className="absolute top-[40%] left-[60%] h-[200px] w-[200px] rounded-full bg-gradient-to-br from-rose-400/15 to-pink-600/3 blur-2xl animate-pulse [animation-duration:7s] [animation-delay:1s]" />

      {/* Atmospheric layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/10 to-gray-950/60" />

      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/2 to-transparent animate-pulse [animation-duration:12s]" />
    </div>
  );
};

const BgCosmicFlow = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#020010]">
      {/* Particle field */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%), radial-gradient(ellipse at center, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 60%)",
          backgroundSize: "1px 1px, 2px 2px",
          backgroundPosition: "center, center",
        }}
      />

      {/* Flowing energy ribbons */}
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-indigo-900/50 via-purple-900/30 to-transparent blur-3xl" />
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-cyan-800/40 via-blue-800/20 to-transparent blur-3xl" />

      {/* Animated ribbons */}
      <div className="absolute top-1/4 left-0 h-48 w-full -skew-y-12 animate-pulse [animation-duration:8s]">
        <div className="h-full w-full bg-gradient-to-r from-purple-500/30 via-transparent to-indigo-500/30" />
      </div>
      <div className="absolute bottom-1/4 right-0 h-48 w-full skew-y-6 animate-pulse [animation-duration:10s]">
        <div className="h-full w-full bg-gradient-to-l from-emerald-500/20 via-transparent to-cyan-500/20" />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

const BgNeonRain = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black">
      <div
        className="absolute inset-0 animate-[rain_1s_linear_infinite]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(13, 222, 222, 0.5) 0%, rgba(13, 222, 222, 0) 100%)`,
          backgroundSize: "2px 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0% 0%",
        }}
      />
      <div
        className="absolute inset-0 animate-[rain_1.5s_linear_infinite]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(235, 52, 196, 0.5) 0%, rgba(235, 52, 196, 0) 100%)`,
          backgroundSize: "2px 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "20% 0%",
        }}
      />
    </div>
  );
};

const BgCrystalShards = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gray-50 overflow-hidden">
      <div className="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 bg-gradient-to-br from-white to-gray-200/50 transform rotate-45" />
      <div className="absolute -bottom-1/4 -right-1/4 h-1/2 w-1/2 bg-gradient-to-tl from-white to-gray-200/50 transform rotate-45" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 bg-white/50 backdrop-blur-md rounded-2xl transform -translate-x-1/2 -translate-y-1/2 rotate-12" />
    </div>
  );
};

const BgWarpSpeed = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:2px_2px] animate-[zoom_10s_linear_infinite]" />
    </div>
  );
};

const BgSoftAurora = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-pink-200/50 via-purple-200/50 to-blue-200/50 animate-pulse [animation-duration:10s]" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-cyan-200/50 rounded-full blur-3xl animate-pulse [animation-duration:8s] [animation-delay:2s]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-rose-200/50 rounded-full blur-3xl animate-pulse [animation-duration:12s] [animation-delay:4s]" />
    </div>
  );
};

const BgGoldenVeins = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-[#1a1a1a]">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 animate-[shimmer_5s_infinite]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_transparent_40%,_#e6c83a_150%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_transparent_40%,_#e6c83a_150%)] opacity-30" />
      </div>
    </div>
  );
};

const BgLayeredPeaks = () => {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-b from-sky-100 to-white">
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-emerald-200/50 to-emerald-100/50" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-200/60 to-teal-100/60 [clip-path:polygon(0_100%,100%_100%,100%_40%,70%_20%,30%_50%,0_30%)]" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-cyan-200/70 to-cyan-100/70 [clip-path:polygon(0_100%,100%_100%,100%_60%,80%_30%,40%_70%,20%_40%,0_80%)]" />
    </div>
  );
};

export const BACKGROUND_OPTIONS = [
  {
    name: "Background Light Gradient 1",
    component: <BgLightGradient1 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient 2",
    component: <BgLightGradient2 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient 3",
    component: <BgLightGradient3 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient 4",
    component: <BgLightGradient4 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient 5",
    component: <BgLightGradient5 />,
    theme: "light",
  },
  {
    name: "Background Light Gradient 6",
    component: <BgLightGradient6 />,
    theme: "light",
  },
  {
    name: "Background Light Grid Gradient 1",
    component: <BgLightGridGradient1 />,
    theme: "light",
  },
  {
    name: "Background Light Grid Gradient 2",
    component: <BgLightGridGradient2 />,
    theme: "light",
  },
  {
    name: "Background Light Grid ",
    component: <BgLightGrid1 />,
    theme: "light",
  },
  {
    name: "Background Light Grid 2",
    component: <BgLightGrid2 />,
    theme: "light",
  },
  {
    name: "Background Light Grid 3",
    component: <BgLightGrid3 />,
    theme: "light",
  },
  {
    name: "Background Light Grid 4",
    component: <BgLightGrid4 />,
    theme: "light",
  },
  {
    name: "Background Light Grid 5",
    component: <BgLightGrid5 />,
    theme: "light",
  },
  {
    name: "Background Dark Gradient",
    component: <BgDarkGradient1 />,
    theme: "dark",
  },
  {
    name: "Background Dark Gradient 2",
    component: <BgDarkGradient2 />,
    theme: "dark",
  },
  {
    name: "Background Dark Gradient 3",
    component: <BgDarkGradient3 />,
    theme: "dark",
  },
  {
    name: "Background Dark Gradient 4",
    component: <BgDarkGradient4 />,
    theme: "dark",
  },
  {
    name: "Background Dark Gradient 5",
    component: <BgDarkGradient5 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid Gradient 1",
    component: <BgDarkGridGradient1 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 1",
    component: <BgDarkGrid1 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 2",
    component: <BgDarkGrid2 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgDarkGrid3 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgDarkGrid4 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgDarkGrid5 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgDarkGrid7 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgLightGridD1 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgLightGridD2 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGrids />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA1 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA2 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA3 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA4 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA5 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA6 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA7 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA8 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA9 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <BgColorGridsA10 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <CrazyAnimatedBackground />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <WaterBloomBackground />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <CartoonCloudsBackground />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <Darkbg1 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Darkbg2 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg1 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg2 />,
    theme: "dark",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg3 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg4 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg5 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg6 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg7 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg8 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg9 />,
    theme: "light",
  },
  {
    name: "Background Dark Grid 3",
    component: <Lightbg10 />,
    theme: "dark",
  },
  {
    name: "Retro Neon",
    component: <BgRetroNeon />,
    theme: "dark",
  },
  {
    name: "Organic Blob",
    component: <BgOrganicBlob />,
    theme: "light",
  },
  {
    name: "Minimal Lines",
    component: <BgMinimalLines />,
    theme: "light",
  },
  {
    name: "Geometric Shapes",
    component: <BgGeometricShapes />,
    theme: "light",
  },
  {
    name: "Aurora Gradient",
    component: <BgAurora />,
    theme: "dark",
  },
  {
    name: "Glassmorphism Light",
    component: <BgGlassmorphismLight />,
    theme: "light",
  },
  {
    name: "Abstract Shapes Light",
    component: <BgAbstractShapesLight />,
    theme: "light",
  },
  {
    name: "Glassmorphism Dark",
    component: <BgGlassmorphismDark />,
    theme: "dark",
  },
  {
    name: "Abstract Shapes Dark",
    component: <BgAbstractShapesDark />,
    theme: "dark",
  },
  {
    name: "Animated Gradient",
    component: <BgAnimatedGradient />,
    theme: "light",
  },
  {
    name: "Hexagon Pattern",
    component: <BgHexagonPattern />,
    theme: "light",
  },
  {
    name: "Floating Orbs",
    component: <BgFloatingOrbs />,
    theme: "light",
  },
  {
    name: "Ghibli Dream",
    component: <BgGhibliDream />,
    theme: "light",
  },
  {
    name: "Liquid Gradient",
    component: <BgLiquidGradient />,
    theme: "light",
  },
  {
    name: "Mesh Gradient",
    component: <BgMeshGradient />,
    theme: "light",
  },
  {
    name: "Dotted Pattern",
    component: <BgDottedPattern />,
    theme: "light",
  },
  {
    name: "Dark Neon",
    component: <BgDarkNeon />,
    theme: "dark",
  },
  {
    name: "Dark Particles",
    component: <BgDarkParticles />,
    theme: "dark",
  },
  {
    name: "Bokeh Lights",
    component: <BgBokehLights />,
    theme: "dark",
  },
  {
    name: "Ghibli Night",
    component: <BgGhibliNight />,
    theme: "light",
  },
  {
    name: "Ghibli Forest",
    component: <BgGhibliForest />,
    theme: "light",
  },
  {
    name: "Ghibli Ocean",
    component: <BgGhibliOcean />,
    theme: "light",
  },
  {
    name: "Light Grid Diagonal",
    component: <BgLightGridDiagonal />,
    theme: "light",
  },
  {
    name: "Dark Grid Hex",
    component: <BgDarkGridHex />,
    theme: "dark",
  },
  {
    name: "Cosmic Flow",
    component: <BgCosmicFlow />,
    theme: "dark",
  },
  {
    name: "Neon Rain",
    component: <BgNeonRain />,
    theme: "dark",
  },
  {
    name: "Crystal Shards",
    component: <BgCrystalShards />,
    theme: "light",
  },
  {
    name: "Warp Speed",
    component: <BgWarpSpeed />,
    theme: "dark",
  },
  {
    name: "Soft Aurora",
    component: <BgSoftAurora />,
    theme: "light",
  },
  {
    name: "Golden Veins",
    component: <BgGoldenVeins />,
    theme: "dark",
  },
  {
    name: "Layered Peaks",
    component: <BgLayeredPeaks />,
    theme: "light",
  },
] as const;
