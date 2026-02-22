import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
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
import type { Project } from "@/data/projects";

type ProjectCardProps = {
	project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{project.title}</CardTitle>
				<CardDescription>{project.description}</CardDescription>
			</CardHeader>
			<CardContent className="flex h-full items-end">
				<div className="flex items-end flex-wrap gap-2">
					{project.tags.map((tag) => (
						<Badge key={tag} variant="secondary">
							{tag}
						</Badge>
					))}
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
					>
						<Github className="size-4" />
						Code
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
					>
						<ExternalLink className="size-4" />
						Visit
					</Button>
				)}
			</CardFooter>
		</Card>
	);
}
