/** @format */

import type { NextPage } from "next";
import AOS from "aos";
import MainBanner from "./Homepage";
import { useEffect } from "react";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<MainBanner />
		</>
	);
};

export default Home;
