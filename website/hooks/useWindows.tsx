import AboutMe from "../components/AboutMe";
import MunchiesWindow from "../components/MunchiesWindow";
import OldProfileWindow from "../components/OldProfileWindow";

// TODO
// change component type from any to FC type
// const assertion on name type
type Window = {
	name: "aboutMe" | "profile" | "munchies";
	component: any;
};

const WINDOWS: Window[] = [
	{ name: "aboutMe", component: () => <AboutMe onClose={() => {}} /> },
	{
		name: "profile",
		component: () => <OldProfileWindow onClose={() => {}} />,
	},
	{
		name: "munchies",
		component: () => <MunchiesWindow />,
	},
];

const useWindows = () => {
	return WINDOWS;
};

export default useWindows;
