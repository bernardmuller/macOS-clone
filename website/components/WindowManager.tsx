import React, { useContext } from "react";
import { AppCtx } from "../contexts/windowContext";
import useWindows from "../hooks/useWindows";

const WindowManager = () => {
	const context = useContext(AppCtx);
	const WINDOWS = useWindows();

	return (
		<>
			{WINDOWS.map((window) => {
				if (Object.keys(context.state).includes(window.name)) {
					if (context?.state[window.name].open) {
						return <window.component />;
					}
				} else {
					throw new Error(
						`Window with name '${window.name}' does not have state in windowContext.`
					);
				}
			})}
		</>
	);
};

export default WindowManager;
