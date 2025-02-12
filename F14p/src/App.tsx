import "./App.css";
import FlowersSVG from "./components/FlowersSVG.tsx";

function App() {
  return (
    <div className="w-screen h-screen">
      <FlowersSVG />
    </div>
  );
}

export default App;

{
  /* <motion.path
              id="stem"
              d="M619.035 753.258C619.035 872.105 617.83 968.45 616.344 968.45C614.857 968.45 613.652 872.105 613.652 753.258C613.652 634.411 651.901 511.434 651.901 518.359C653.388 518.359 619.035 634.411 619.035 753.258Z"
              fill="none"
              stroke="#3C652F"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ scaleY: 0, originY: 1 }} // Start small at the bottom
              animate={clicked ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{
                duration: clicked ? 1.5 : 0.5, // Same timing as before
                ease: "easeOut",
                delay: clicked ? 1 : 0, // Matches previous stagger timing
              }}
            />

            <motion.g
              id="Flower 8 - Red"
              initial={{ scale: 0, originY: -1 }} // Scale from bottom
              animate={
                clicked ? { scale: 1, originY: 1 } : { scale: 0, originY: 1 }
              }
              transition={{
                type: "spring", // Enables bounce effect
                stiffness: 150, // Controls how strong the bounce is
                damping: 12, // Controls how much it slows down
                delay: clicked ? 2.5 : 0, // Keeps existing delay
              }}
            ></motion.g> */
}
