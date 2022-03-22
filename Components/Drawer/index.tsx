/**
 * /* eslint-disable @next/next/no-css-tags
 *
 * @format
 */

/* eslint-disable @next/next/no-sync-scripts */
/** @format */
import { init } from "./script.js";
import { useEffect } from "react";

export default function Drawer() {
	useEffect(init, []);
	return (
		<div>
			<canvas id="c" width="500" height="500"></canvas>
			<br />
			<button id="save">Save</button>
		</div>
	);
}
