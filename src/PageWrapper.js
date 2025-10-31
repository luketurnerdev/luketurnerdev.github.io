import { motion } from "framer-motion";

export default function PageWrapper({ children, direction }) {
  const isGoingLeft = direction === "left";
  const initialX = isGoingLeft ? "-100vw" : "100vw";  // project from left, home from right

  const variants = {
    hidden: { x: initialX, opacity: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] },
    },
    exit: {
      opacity: 0, // ✅ fade only (no horizontal motion)
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      key={direction + Math.random()}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#0e0e0e",
        overflowX: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
