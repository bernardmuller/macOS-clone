import { useContext, useState } from "react";
import { motion, useDragControls } from "framer-motion";
import WindowActionButtons from "./WindowActionButtons";

const Window = ({
	children,
	title,
	onClose,
	mobile,
}: {
	children: any;
	title: string;
	onClose: () => any;
	mobile: boolean;
}) => {
	const controls = useDragControls();
	const [fullScreen, setFullScreen] = useState(false);

	function startDrag(event: any) {
		controls.start(event);
	}
	return (
		<motion.div
			drag
			onClick={() => console.log(title)}
			dragListener={false}
			dragControls={controls}
			dragMomentum={false}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 20,
			}}
			className={`${
				fullScreen
					? "w-screen h-[97.5vh] relative"
					: mobile
					? "w-[400px] h-[750px]"
					: `w-[750px] h-[550px]`
			} flex justify-center items-center absolute`}
		>
			<motion.div
				layout
				className={`w-full h-full bg-slate-100 shadow-2xl rounded-xl z-0`}
			>
				<div
					onPointerDown={startDrag}
					className="handle relative flex justify-center 
						items-center w-full z-10 shadow-xl p-1 bg-mac-ui-2
						 text-mac-ui-txt bg-gradient-to-b from-mac-ui-2
						  to-mac-ui-1 h-8 border-t border-l border-r border-stone-400 rounded-t-xl"
				>
					<WindowActionButtons
						fullScreen={fullScreen}
						onFullScreen={() => setFullScreen((prev) => !prev)}
						onClose={onClose}
					/>
					<span className="text-sm">{title}</span>
				</div>
				<div className="h-full rounded-b-xl overflow-hidden">
					<div className="w-full h-full">{children}</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Window;
