export function init() {
	/** @format */
	const gCanvas = document.querySelector("#c");
	const gCtx = gCanvas.getContext("2d");

	function onMouseDown(e) {
		e.preventDefault();
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
	}

	function onMouseMove(e) {
		e.preventDefault();
		gCtx.fillRect(e.offsetX - 4, e.offsetY - 4, 8, 8);
	}

	function onMouseUp(e) {
		e.preventDefault();
		window.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("mouseup", onMouseUp);
	}

	function onSave() {
		gCanvas.toBlob((blob) => {
			const timestamp = Date.now().toString();
			const a = document.createElement("a");
			document.body.append(a);
			a.download = `export-${timestamp}.png`;
			a.href = URL.createObjectURL(blob);
			a.click();
			a.remove();
		});
	}

	gCanvas.addEventListener("mousedown", onMouseDown);
	document.querySelector("#save").addEventListener("click", onSave);
}