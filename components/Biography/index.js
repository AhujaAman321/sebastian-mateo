import React from "react";
import Image from "next/image";
import Hero from "../../public/images/PurpleHero.jpg";
import Fade from "react-reveal/Fade";
import useTranslation from 'next-translate/useTranslation';

const Biograhy = () => {
	const { t } = useTranslation('common');
	return (
		<div style={{ position: "relative", overflow: "hidden" }}>
			<div className="ellipse1" />
			<div className="ellipse2" />
			<div className="ellipse3" />
			<div className="ellipse4" />
			<div className="ellipse7" />
			<div className="ellipse8" />
			<div className="ellipse9" />
			<div className="ellipse10" />
			<div className="ellipse-eleven" />
			<div className="ellipse-twelve" />

			<div className="w-full h-full purple-gradient justify-center items-center text-center sm:px:18 lg:px-24 text-white flex sm:flex-row p-12 gap-12 md:p-2 md:gap-8">
				<div className="md:my-24 xs:my-4 w-90 md:mt-24 sm:mt-36 ">
					<Fade top>
						<h1 className="lg:text-7xl text-left md:text-4xl md:mb-4 font-main">
							{t("biographyheader")}
						</h1>
					</Fade>
					<Fade bottom>
						<p className="text-xsm text-left font-SemiBold leading-10">
							{t("biographytext")}
						</p>
					</Fade>
				</div>

				<div className=" lg:w-[1000px] sm:w-[900px] lg:py-24 lg:px:24">
					<Fade right>
						<Image className="" src={Hero} alt="Hero Image" />
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Biograhy;
