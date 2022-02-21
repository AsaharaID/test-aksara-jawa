/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */

import Image from "next/image";
import Input from "../../Components/input";
export default function MainBanner() {
	return (
		<section className="header pt-lg-60 pb-50">
			<div className="container-xxl container-fluid">
				<div className="row gap-lg-0 gap-5">
					<div className="col-lg-6 col-12 d-lg-block d-none">
						<div className="d-flex justify-content-lg-end justify-content-center me-lg-5">
							<div className="position-relative" data-aos="zoom-in">
								<img
									src="/image/image-1.png"
									className="img-fluid"
									alt=""
									max-width="768"
								/>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 my-auto">
						<h1 className="header-title color-palette-5 fw-bold">
							Selamat Datang di Aplikasi Pembelajaran Aksara Jawa
						</h1>
						<p className="mt-30 mb-10 text-xl color-palette-5">
							Silahkan masukkan nama
						</p>
						<div className="mb-20">
							<Input />
						</div>
						<div className="d-flex flex-lg-row flex-column gap-4">
							<a
								className="btn btn-get text-lg rounded-pill"
								href="/PageContent/Pengenalan"
								role="button"
							>
								Lanjutkan
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
