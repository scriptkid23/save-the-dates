import OrnamentAnimation from "../ornament-animation.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <div>
      <main className={`flex h-screen flex-col`}>
        <Lottie
          animationData={OrnamentAnimation}
          loop={false}
          style={{ height: "84px" }}
        />
        <div>
          <p className="font-scriptin text-5xl text-center">Lan Anh</p>
          <p className="font-scriptin text-xl text-center m-2.5">&</p>
          <p className="font-scriptin text-5xl text-center">Thinh Vuong</p>
        </div>
      </main>
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="6"
            stitchTiles="stitch"
          />
          <feColorMatrix
            in="colorNoise"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
          />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </div>
  );
}
