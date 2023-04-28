import Image from "next/image";

import Lottie from "lottie-react";
import OrnamentAnimation from "../ornament-animation.json";
import { motion } from "framer-motion";
import Countdown from "@/components/countdown";
import Sheet from "react-modal-sheet";
import ModalSheet from "@/components/ModelSheet";

export default function Example() {
  return (
    <div className="wrapper">
      <div className="flex justify-center flex-col items-center pt-2.5">
        <div>
          <p className="font-bebas font-medium tracking-wider	 text-center text-xs sm-text-md">
            You are invited to the
          </p>
          <p className="font-bebas font-medium tracking-wider text-center text-xs">
            wedding dinner of
          </p>
          <div>
            <Lottie
              animationData={OrnamentAnimation}
              loop={false}
              style={{ height: "75px" }}
            />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={"/assets/text.svg"} alt="text" width={300} height={300} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Countdown />
        </motion.div>
      </div>
      <ModalSheet
        className="absolute"
        style={{ bottom: "106px", left: "82px" }}
      />
      <ModalSheet
        className="absolute"
        style={{ right: "98px", bottom: "140px" }}
      />
    </div>
  );
}
