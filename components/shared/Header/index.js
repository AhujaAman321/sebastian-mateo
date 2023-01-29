import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import useTranslation from 'next-translate/useTranslation';
import LanguageIcon from '@mui/icons-material/Language';
import Link from "next/link";
import { useRouter } from 'next/router'


const Header = () => {
	const { t } = useTranslation('common');
	const { locale, locales, push } = useRouter();
	return (
		<header className="purple-gradient flex items-center justify-between  p-4  text-white h-20 lg:pr-12 ">
			<div className="p-0 ">
				<Image
					className="absolute"
					alt="Logo"
					width="500"
					height="500"
					src={Logo}
				/>
			</div>

			<div className=" hidden  font-SemiBold lg:flex gap-12 items-center">
				<ul className=" flex gap-12 uppercase ">
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						{t("header1")}
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						{t("header2")}
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						{t("header3")}
					</li>
					<li className="pr-4 cursor-pointer hover:bg-gray-600 hover:bg-opacity-10 p-2 mr-4 hover:rounded-md">
						{t("header4")}
					</li>
				</ul>
				{
					locale === "es" ?
						<Link href="/" locale="en">
							<button className="bg-purple-700 rounded-full px-8 py-2">
								<span>
									{t("headerlang1")}
								</span>
							</button >
						</Link>
						:
						<Link href="/" locale="es">
							<button className="bg-purple-700 rounded-full px-8 py-2">
								<span>
									{t("headerlang2")}
								</span>
							</button >
						</Link>

				}
			</div>
		</header>
	);
};

export default Header;
