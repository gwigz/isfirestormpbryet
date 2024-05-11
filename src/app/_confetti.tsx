"use client";

import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: undefined as number | undefined,
		height: undefined as number | undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
}

export function Confetti() {
	const [enabled, setEnabled] = useState(false);
	const { width, height } = useWindowSize();
	const [hide, setHide] = useState(false);
	const [numberOfPieces, setNumberOfPieces] = useState(100);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setEnabled(true);
		}

		const pieces = setTimeout(() => {
			setNumberOfPieces(0);
		}, 1000);

		const hide = setTimeout(() => {
			setHide(true);
		}, 3000);

		return () => {
			clearTimeout(pieces);
			clearTimeout(hide);
		};
	}, []);

	// check if reduce motion is enabled
	if (
		!enabled ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		return null;
	}

	// if we're done, don't render anything
	if (hide) {
		return null;
	}

	return (
		<div className="fixed inset-0 pointer-events-none">
			{width && height && (
				<ReactConfetti
					width={width}
					height={height}
					gravity={0.04}
					numberOfPieces={numberOfPieces}
				/>
			)}
		</div>
	);
}
