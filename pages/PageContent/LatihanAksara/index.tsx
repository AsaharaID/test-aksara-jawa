
import ContentLatihan from "../../../Components/ContentLatihan";
import SideBar from "../../../Components/SideBar";

export default function Latihan() {
	return (
		<section className="overview overflow-auto">
			<ContentLatihan />
			<SideBar activeMenu="Latihan" />
		</section>
	);
}
