/** @format */

import React from "react";


export default function Input(props: any) {
	const {...nativeProps } = props;
	return (
		<>
			<input
				type="text"
				className="form-control rounded-pill text-lg"
				id="name"
				name="name"
				aria-describedby="name"
				placeholder="Masukkan Nama"
				{...nativeProps}
			/>
		</>
	);
}
