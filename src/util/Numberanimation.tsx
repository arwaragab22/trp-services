import { animate, motion, useInView, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export default function Numberanimation({ number1 }: { number1: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once = true يعني يشتغل مرة واحدة بس

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(number1), { duration: 2 });
      return () => controls.stop();
    }
  }, [isInView, number1]);

  return (
    <motion.pre
      ref={ref}
      className="inline-block tabular-nums dark:text-white whitespace-pre-wrap tracking-tighter 
        text-greentxt font-semibold text-2xl md:text-5xl mb-3"
    >
      {rounded}
    </motion.pre>
  );
}

