"use client";

import { useState } from "react";
import { copyToClipboard } from "@/lib/clipboard";

export function useClipboard() {
	const [copied, setCopied] = useState(false);

	const copy = async (text: string) => {
		await copyToClipboard(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return { copied, copy };
}
