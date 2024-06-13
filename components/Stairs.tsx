
import { motion, animate } from "framer-motion";

const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate teh reverse index for staggered delay
const reverseIndex = (index: any) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {/** render 6 motion divs, eact representing a step of a the stairs.
       * Each div will have the same animation defined by the stairAnimation object,
       * Then delay for each div is Calculated dynamically based on its reversed inedex,
       * creating a staggered effect with decreasing delay for each subsquent step.
       */}

      {[...Array(6)].map((_, index: any) => {
        return (<motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
        );
      })}
    </>
  );
};

export default Stairs;
