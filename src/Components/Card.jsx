import { motion } from "motion/react";
function Card({ style, text, image, containerRef }) {
  return image && !text ? (
    <motion.img
      style={style}
      className="absolute w-15 cursor-grab"
      src={image}
      whileHover={{ scale: 1.05 }}
      drag
      dragElastic={1}
      dragConstraints={containerRef}
    />
  ) : (
    <motion.div
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab "
    >
      {text}
    </motion.div>
  );
}

export default Card;
