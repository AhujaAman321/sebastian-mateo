import Head from "next/head";
import Biograhy from "../components/Biography";
import GigList from "../components/GigList";
import Music from "../components/Music";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Support from "../components/Support";
import Tutorial from "../components/Tutorials";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="font-satoshi">
			<Header />
			<Biograhy />
			<Support />
			<Music />
			<GigList />
			<Tutorial />
			<Footer />
		</div>
	);
}
