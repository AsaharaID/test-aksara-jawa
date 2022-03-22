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
import Drawer from "../../Drawer";
import Input from "../../input";

export default function Halaman2() {
	return (
		<section className="header pt-lg-60 pb-50">
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-5">
					<div className="col-lg-6 col-12 d-lg-block d-none">
						<div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
							<div className="ps-lg-0">
								<h2 className="text-4xl fw-bold color-palette-5 mb-30">
									Latihan Aksara Jawa
								</h2>
								<div className="subtitle mb-30">
									<p className="text-lg fw-medium color-palette-5 mb-14 ">
										Ikutilah aksara jawa disamping ini dan isi jawaban dengan
										menulis tangan.
									</p>
									<div className="main-content">
										<img
											src="/image/Pola/Ca.svg"
											className="img-fluid"
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 my-auto">
						<Drawer />
					</div>
					<div className="button-nav">
						<Link href="/PageContent/LatihanAksara/">
							<a
								className="btn-left btn-get text-lg rounded-pill"
								role="button"
							>
								Kembali
							</a>
						</Link>
						<Link href="/PageContent/LatihanAksara/HalamanLatihan/Halaman3">
							<a
								className="btn-right btn-get text-lg rounded-pill"
								role="button"
							>
								Lanjutkan
							</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
