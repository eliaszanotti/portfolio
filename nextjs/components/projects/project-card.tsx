import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/payload-types";

type ProjectCardProps = {
	project: Project;
};

export async function ProjectCard({ project }: ProjectCardProps) {
	const t = await getTranslations("projects.card");

	return (
		<Card>
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex h-full items-end">
				<div className="flex items-end flex-wrap gap-2">
					{project.tags?.map((tag) => {
						const tagName = typeof tag === "string" ? tag : tag.name;
						return (
							<Badge key={tagName} variant="secondary">
								{tagName}
							</Badge>
						);
					})}
				</div>
			</CardContent>
			<CardFooter className="flex justify-end gap-2">
				{project.github && (
					<Button
						variant="outline"
						render={
							<Link
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
							/>
						}
						nativeButton={false}
					>
						<Github className="size-4" />
						{t("code")}
					</Button>
				)}
				{project.demo && (
					<Button
						render={
							<Link
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
							/>
						}
						nativeButton={false}
					>
						<ExternalLink className="size-4" />
						{t("visit")}
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
