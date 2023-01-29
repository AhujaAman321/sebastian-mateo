import React from "react";
import useTranslation from 'next-translate/useTranslation';

const Music = () => {
	const { t } = useTranslation('common');
	return (
		<div className="purple-gradient text-white text-center  text-4xl pt-12 md:p-24 sm:p-8">
			<h1 className="mb-12">{t("musicheader")}</h1>
			<div className="container mx-auto">
				<iframe
					src="https://open.spotify.com/embed/artist/4McoittPoukRnXpQM6oqus?utm_source=generator&theme=0"
					width={"100%"}
					height={400}
					style={{ borderRadius: "20px" }}
					frameBorder="0"
					allowFullScreen=""
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"></iframe>
			</div>
		</div>
	);
};

export default Music;
