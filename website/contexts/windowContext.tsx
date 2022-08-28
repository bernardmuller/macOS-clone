import { profile } from "console";
import { createContext, useCallback, useReducer, useState } from "react";

export interface AppContextInterface {
	state: {
		profile: WindowState;
		aboutMe: WindowState;
	};
	handleChange: (name: string, payload: WindowState) => void;
}

type WindowState = {
	open: boolean;
	active: boolean;
};

const WINDOW_STATE = {
	profile: {
		open: true,
		active: false,
	},
	aboutMe: {
		open: true,
		active: false,
	},
	munchies: {
		open: true,
		active: false,
	},
};

export const AppCtx = createContext<AppContextInterface>({
	state: {
		...WINDOW_STATE,
	},
	handleChange: () => null,
});

// TODO
// change state from "any" to a type
const WindowReducer = (
	state: any,
	{ key, payload }: { key: string; payload: WindowState }
) => {
	switch (key) {
		case "profile":
			return { ...state, [key]: payload };

		case "aboutMe":
			return { ...state, [key]: payload };

		default:
			throw new Error(`No reducer available for key = ${key}`);
	}
};

export const WindowProvider = ({ children }: { children: any }) => {
	const [state, dispatch] = useReducer(WindowReducer, WINDOW_STATE);

	const handleChange = useCallback(
		(name: string, newState: WindowState) => {
			dispatch({
				key: name,
				payload: newState,
			});
		},
		[dispatch]
	);

	// TOOD
	// Add more specific actions:
	// 1. Open window
	// 2. Close window
	// 3. Set window active

	return (
		// TODO: add specific actions in value to be accessed in children
		<AppCtx.Provider value={{ state, handleChange }}>
			{children}
		</AppCtx.Provider>
	);
};
