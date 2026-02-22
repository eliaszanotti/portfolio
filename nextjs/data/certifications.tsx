import { Award, GraduationCap } from "lucide-react";

export type Certification = {
	name: string;
	year: string;
	icon: React.ComponentType<{ className?: string }>;
};

export const certificationsData: Certification[] = [
	{ name: "Common core 42", year: "2024", icon: Award },
	{ name: "Baccalaureate", year: "2022", icon: GraduationCap },
];
