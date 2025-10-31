import { motion } from "framer-motion";

export default function PageWrapper({ children, direction }) {
  const variants = {
    hidden: {
      x: direction === "left" ? "100vw" : "-100vw",
    },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] },
    },
    exit: {
      x: direction === "left" ? "-100vw" : "100vw",
      transition: { duration: 0.6, ease: [0.65, 0.05, 0.36, 1] },
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
        position: "relative",   // ✅ changed from "absolute"
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
