import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { slideIn } from "@/utils/motion";

const EarthCanvas = dynamic(
	() => import("./canvas").then((mod) => mod.EarthCanvas),
	{ 
		ssr: false,
		loading: () => (
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
			</div>
		)
	}
);

function EarthContainer({ isMobile }) {
	return (
		<motion.div
			variants={slideIn("right", "tween", 0.2, 1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className="xl:w-1/2 w-full md:w-2/3 md:h-auto h-[550px]"
		>
			<EarthCanvas isMobile={isMobile} />
		</motion.div>
	);
}

export default EarthContainer;
