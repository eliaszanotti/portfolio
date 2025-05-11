"use client";

import { useRef, useEffect } from "react";
import Matter from "matter-js";
import "matter-attractors";

interface SectionSkillsProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

export default function SectionSkills({ addSectionRef }: SectionSkillsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const engineRef = useRef<Matter.Engine | null>(null);
	const renderRef = useRef<Matter.Render | null>(null);
	const runnerRef = useRef<Matter.Runner | null>(null);

	const initializeMatter = () => {
		if (!containerRef.current) return;

		// Créer le moteur physique
		const engine = Matter.Engine.create();
		engineRef.current = engine;

		// Désactiver la gravité normale
		engine.world.gravity.y = 0;
		engine.world.gravity.x = 0;
		engine.world.gravity.scale = 0;

		// Créer le rendu
		const render = Matter.Render.create({
			element: containerRef.current,
			engine: engine,
			options: {
				width: 500,
				height: 500,
				wireframes: false,
				background: "transparent",
			},
		});
		renderRef.current = render;

		// Créer un corps attracteur au centre
		const attractiveBody = Matter.Bodies.circle(250, 250, 0, {
			isStatic: true,
			render: {
				visible: false,
			},
		});

		// Créer plus de balles avec des tailles variées
		const balls = Array.from({ length: 30 }, () => {
			const x = Math.random() * 400 + 50;
			const y = Math.random() * 400 + 50;
			const radius = Math.random() * 20 + 15;

			return Matter.Bodies.circle(x, y, radius, {
				friction: 0.1,
				frictionAir: 0.01,
				restitution: 0.8,
				density: 0.001,
				render: {
					fillStyle: "#61DAFB",
					strokeStyle: "#4FA8D1",
					lineWidth: 2,
				},
			});
		});

		// Ajouter tous les corps au monde
		Matter.World.add(engine.world, [attractiveBody, ...balls]);

		// Appliquer une force constante vers le centre
		Matter.Events.on(engine, "beforeUpdate", () => {
			const center = { x: 250, y: 250 };
			balls.forEach((ball) => {
				const dx = center.x - ball.position.x;
				const dy = center.y - ball.position.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const force = 0.0005;

				Matter.Body.applyForce(ball, ball.position, {
					x: (dx / distance) * force,
					y: (dy / distance) * force,
				});
			});
		});

		// Créer et démarrer le runner
		const runner = Matter.Runner.create();
		runnerRef.current = runner;
		Matter.Runner.run(runner, engine);
		Matter.Render.run(render);
	};

	useEffect(() => {
		initializeMatter();

		return () => {
			if (runnerRef.current) {
				Matter.Runner.stop(runnerRef.current);
			}
			if (engineRef.current) {
				Matter.Engine.clear(engineRef.current);
			}
			if (renderRef.current) {
				Matter.Render.stop(renderRef.current);
				renderRef.current.canvas.remove();
				renderRef.current.textures = {};
			}
		};
	}, []);

	return (
		<section
			ref={addSectionRef}
			className="min-h-screen grid place-items-center p-16"
		>
			<div className="max-w-6xl grid grid-cols-2 gap-8 h-full">
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-6xl font-black italic">
						&quot;Crafting digital excellence&quot;
					</h1>
					<p className="font-bold">
						Modern tech stack for exceptional web experiences
					</p>
				</div>
				<div className="relative h-full w-full bg-red-200">
					<div
						ref={containerRef}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
					/>
				</div>
			</div>
		</section>
	);
}
