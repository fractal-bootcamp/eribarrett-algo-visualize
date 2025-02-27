import { motion } from "motion/react";








export default function Rotate() {
    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                style={box}
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
            />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}
