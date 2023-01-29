import React from "react";
import { Fade } from "react-reveal";
import useTranslation from 'next-translate/useTranslation';

const Tutorial = () => {
	const { t } = useTranslation('common');
	return (
		<div className="purple-gradient text-white text-center  text-4xl pt-12">
			<h1>{t("tutorialsheader")}</h1>

			<div className="lg:flex sm:flex-row justify-center items-center">
				<Fade left>
					<div className="p-12">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/shCTEepchps"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</Fade>
				<Fade right>
					<div className="p-12">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/9INsrElC0pU"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen></iframe>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Tutorial;
