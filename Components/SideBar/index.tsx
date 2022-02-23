/** @format */

import Footer from "./footer";
import MenuItem from "./menuItem";
import Profile from "./profile";

interface SidebarProps {
	activeMenu: "Pengenalan" | "Latihan Aksara Jawa";
}
export default function SideBar(props: SidebarProps) {
	const { activeMenu } = props;
	return (
		<section className="sidebar">
			<div className="content pt-50 pb-30 ps-30">
				<Profile />
				<div className="menus">
					<MenuItem
						title="Pengenalan"
						active={activeMenu === "Pengenalan"}
						href="/PageContent/Pengenalan"
					/>
					<MenuItem
						title="Latihan Aksara"
						active={activeMenu === "Latihan Aksara Jawa"}
						href="/PageContent/LatihanAksara"
					/>
				</div>
			</div>
		</section>
	);
}
