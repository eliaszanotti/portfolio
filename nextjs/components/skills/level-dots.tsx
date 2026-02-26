import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/payload-types";

type LevelDotsProps = {
	level: Skill["level"];
};

export function LevelDots({ level }: LevelDotsProps) {
	const numLevel = parseInt(level, 10);

	return (
		<div className="flex gap-1">
			<Badge
				variant={numLevel >= 1 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${numLevel >= 1 ? "animate-pulse" : ""}`}
			/>
			<Badge
				variant={numLevel >= 2 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${numLevel >= 2 ? "animate-pulse" : ""}`}
			/>
			<Badge
				variant={numLevel >= 3 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${numLevel >= 3 ? "animate-pulse" : ""}`}
			/>
		</div>
	);
}
