import { useCountdown } from "@/components/useCountdown";
import dynamic from "next/dynamic";

const start_time = "2023-05-07";

function Invite() {
  const [days, hours, minutes, seconds] = useCountdown(start_time);

  return (
    <div>
      <main className={`flex h-screen flex-col`}>
        <div className="flex justify-between">
          <p className="font-bebas text-center text-xs p-2.5">Spirity</p>
          <p className="font-bebas text-center text-xs p-2.5">08.05.2023</p>
          <p className="font-bebas text-center text-xs p-2.5">Hanoi</p>
        </div>
        <div className="flex justify-center m-2.5">
          <img src="/assets/logo.svg" className="object-cover w-72" />
        </div>
        <div className="countdown-wrapper">
          {days && (
            <div className="countdown-item">
              {days < 10 ? `0${days}` : days}
              <span>days</span>
            </div>
          )}
          {hours && (
            <div className="countdown-item">
              {hours < 10 ? `0${hours}` : hours}
              <span>hours</span>
            </div>
          )}
          {minutes && (
            <div className="countdown-item">
              {minutes < 10 ? `0${minutes}` : minutes}
              <span>minutes</span>
            </div>
          )}

          <div className="countdown-item">
            {seconds < 10 ? `0${seconds}` : seconds}
            <span>seconds</span>
          </div>
        </div>
        <div className="fixed bottom-0 la-picture">
          <img src="/assets/LA.png" className="object-cover w-44" />
        </div>
        <div className="fixed bottom-0 right-0 tv-picture">
          <img src="/assets/TV.png" className="object-cover w-24" />
        </div>
      </main>
      <svg style={{ display: "none" }}>
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

export default dynamic(() => Promise.resolve(Invite), {
  ssr: false,
});
