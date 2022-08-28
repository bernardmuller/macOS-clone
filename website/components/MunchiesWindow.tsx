import React from "react";
import Window from "./Window";

const MunchiesWindow = () => {
	return (
		<Window title="Munchies" mobile onClose={() => {}}>
			<iframe
				src="https://munchiesapp.co.za/"
				width="100%"
				height="100%"
				id="inlineFrameExample"
				title="Inline Frame Example"
				className="bg-white p-0 border-none"
			/>
		</Window>
	);
};

export default MunchiesWindow;
