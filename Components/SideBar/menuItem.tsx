/** @format */


import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
	title: string;
	active?: boolean;
	href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
	const { title, active, href } = props;
	const classItem = cx({
		item: true,
		"mb-30": true,
		active,
	});
	return (
		<div className={classItem}>
			<div className="me-3">
			</div>
			<p className="item-title m-0">
				<Link href={`${href}`}>
					<a className="text-lg text-decoration-none">{title}</a>
				</Link>
			</p>
		</div>
	);
}
