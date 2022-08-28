/* eslint-disable react/jsx-no-undef */
import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";
import WindowManager from "../components/WindowManager";
import { WindowProvider } from "../contexts/windowContext";
import { NextSeo } from "next-seo";
import apple from "../assets/svg/apple.png";
import finder from "../assets/svg/finder.png";
import launchpad from "../assets/svg/launchpad.png";
import munchies from "../assets/svg/munchiesIcon.png";
import Image from "next/image";
import { BsDot } from "react-icons/bs";

const Home: NextPage = () => {
	return (
		<>
			<NextSeo
				title="Bernard Muller"
				description="I am a passionate software engineer that loves building cool projects."
			/>
			<WindowProvider>
				<div className="h-screen w-screen">
					<Head>
						<title>Bernard Muller</title>
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<Main>
						<div className="absolute w-full h-full bg-mac-bg-2 bg-cover bg-center bg-no-repeat -z-100" />
						<WindowManager />
						<div className=" flex gap-3 pt-2 pl-2 pr-2 fixed z-10 bottom-1 bg-stone-900/30  backdrop-blur-md border border-stone-400 rounded-2xl">
							{[
								{ icon: finder },
								{ icon: launchpad },
								{ icon: munchies },
								{ icon: launchpad },
								{ icon: launchpad },
								{ icon: launchpad },
								{ icon: launchpad },
							].map((item, index) => (
								<div
									key={index}
									className="flex flex-col justify-center"
								>
									<div className=" w-10 h-10 bg-stone-700/40 rounded-lg overflow-hidden">
										<div className="relative w-full h-full">
											<Image
												src={item.icon}
												alt="icon"
												layout="fill"
												// objectFit="cover"
											/>
										</div>
									</div>
									<div className=" flex w-full justify-center pb-[2px] pt-1">
										<div
											className={`w-1 h-1 rounded-full ${
												index === 2 && "bg-slate-400"
											}`}
										/>
									</div>
								</div>
							))}
						</div>
					</Main>
				</div>
			</WindowProvider>
		</>
	);
};

export default Home;
