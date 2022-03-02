/** @format */

import ContentPengenalan from "../../../Components/ContentPengenalan";
import ContentSoalLatihan from "../../../Components/ContentSoalLatihan";
import SideBar from "../../../Components/SideBar";

export default function Pengenalan() {
	return (
		<section className="overview overflow-auto">
			<SideBar activeMenu="Soal Test" />
			<ContentSoalLatihan />
		</section>
	);
}
