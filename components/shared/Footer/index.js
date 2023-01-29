import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import useTranslation from 'next-translate/useTranslation';

const Footer = () => {
	const { t } = useTranslation('common');
	return (
		<div className="bg-[#160F15]  text-white text-center ">
			<div className="">
				<Image
					className="absolute mx-auto"
					width={200}
					height={200}
					src={Logo}
					alt="Sebastian's Logo"
				/>
			</div>
			<div className="text-white">
				<ul className="flex justify-center ">
					<li className="px-8">{t("footerheader1")}</li>
					<li className="px-8">{t("footerheader2")}</li>
					<li className="px-8">{t("footerheader3")}</li>
					<li className="px-8">{t("footerheader4")}</li>
				</ul>
			</div>

			<div className="pt-24 text-gray-200 font-light">
				{t("footertext")}
			</div>
		</div>
	);
};

export default Footer;
