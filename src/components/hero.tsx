import { motion } from "framer-motion";
export default function Hero({ title, subtitle, image = "" }) {
  return (
    <div className="w-full grid grid-cols-2 p-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ x: 10 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-4xl"
        >
          {title}
        </motion.div>
        <motion.div animate={{ x: 10, y: 10 }} className="font-bold text-2xl">
          {subtitle}
        </motion.div>
      </motion.div>
      <div>{image}</div>
    </div>
  );
}
