/* eslint-disable react/jsx-no-undef */
import Image from "next/image";
import Window from "./Window";
import manTyping from "../assets/gif/man-typing.gif";
import { FC, ReactElement } from "react";

export type Props = {
	onClose: () => void;
};

const AboutMe: FC<Props> = ({ onClose }: Props): ReactElement => {
	return (
		<Window title="About me" mobile={false} onClose={onClose}>
			<div className="flex justify-center w-80 h-80 relative">
				<Image src={manTyping} alt="not found" layout="fill" />
			</div>
		</Window>
	);
};

export default AboutMe;
