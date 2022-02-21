/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import React from "react";

export default function ContentPengenalan() {
	return (
		<main className="main-wrapper">
			<div className="ps-lg-0">
				<h2 className="text-4xl fw-bold color-palette-5 mb-30">
					Pengenalan Aksara Jawa
				</h2>
				<div className="subtitle mb-30">
					<p className="text-lg fw-medium color-palette-5 mb-14 ">
						Aksara Jawa adalah salah satu aksara tradisional Indonesia yang
						berkembang di pulau Jawa. Aksara Jawa aktif digunakan dalam sastra
						maupun tulisan sehari-hari masyarakat Jawa sejak pertengahan abad
						ke-15 hingga pertengahan abad ke-20 sebelum fungsinya
						berangsur-angsur tergantikan dengan huruf Latin. Aksara Jawa terdiri
						dari 20 aksara seperti dibawah ini
					</p>
					<div className="main-content">
						<img src="/image/image-aksara.svg" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</main>
	);
}
