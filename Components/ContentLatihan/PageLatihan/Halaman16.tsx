/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import Link from "next/link";
import React from "react";

export default function Halaman16() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-5 mb-30">
					Latihan Aksara Jawa
				</h2>
				<div className="subtitle mb-30">
					<p className="text-lg fw-medium color-palette-5 mb-14 ">
						Ikutilah aksara jawa disamping ini dan isi jawaban dengan menulis
						tangan.
					</p>
					<div className="main-content">
						<img src="/image/Pola/Ma.svg" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
			<div className="d-flex flex-lg-row flex-column gap-4">
				<Link href="/PageContent/LatihanAksara/HalamanLatihan/Halaman17">
					<a className="btn btn-get text-lg rounded-pill" role="button">
						Lanjutkan
					</a>
				</Link>
			</div>
		</main>
	);
}
