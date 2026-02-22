import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/data/skills";

type LevelDotsProps = {
	level: Skill["level"];
};

export function LevelDots({ level }: LevelDotsProps) {
	return (
		<div className="flex gap-1">
			<Badge
				variant={level >= 1 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${level >= 1 ? "animate-pulse" : ""}`}
			/>
			<Badge
				variant={level >= 2 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${level >= 2 ? "animate-pulse" : ""}`}
			/>
			<Badge
				variant={level >= 3 ? "secondary" : "outline"}
				className={`size-3 rounded-full p-0 ${level >= 3 ? "animate-pulse" : ""}`}
			/>
		</div>
	);
}
