/** @format */

import ContentPengenalan from "../../../Components/ContentPengenalan";
import SideBar from "../../../Components/SideBar";

export default function Pengenalan() {
	return (
		<section className="overview overflow-auto">
			<SideBar activeMenu="Pengenalan"/>
			<ContentPengenalan />
		</section>
	);
}
