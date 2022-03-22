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

export default function Halaman17() {
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
						<img src="/image/Pola/Ga.svg" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
			<div className="button-nav">
				<Link href="/PageContent/LatihanAksara/HalamanLatihan/Halaman16">
					<a className="btn-left btn-get text-lg rounded-pill" role="button">
						Kembali
					</a>
				</Link>
				<Link href="/PageContent/LatihanAksara/HalamanLatihan/Halaman18">
					<a className="btn-right btn-get text-lg rounded-pill" role="button">
						Lanjutkan
					</a>
				</Link>
			</div>
		</main>
	);
}
