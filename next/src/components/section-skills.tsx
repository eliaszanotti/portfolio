"use client";

import { useRef, useEffect, useState } from "react";
import Matter from "matter-js";
import "matter-attractors";

interface SectionSkillsProps {
	addSectionRef: (el: HTMLElement | null) => void;
}

interface BallConfig {
	color: string;
	size: 1 | 2 | 3;
	letter: string;
}

interface BallPosition {
	id: number;
	x: number;
	y: number;
	angle: number;
}

interface BallProps {
	config: BallConfig;
	position: BallPosition;
}

const Ball = ({ config, position }: BallProps) => {
	const size = config.size * 20 + 60;
	return (
		<div
			className={`absolute ${config.color} rounded-full flex items-center justify-center text-white font-bold transition-transform shadow-lg hover:scale-110`}
			style={{
				width: size,
				height: size,
				left: position.x - size / 2,
				top: position.y - size / 2,
			}}
		>
			<div className="flex items-center justify-center w-full h-full">
				<span className="text-2xl">{config.letter}</span>
			</div>
		</div>
	);
};

const ballsConfig: BallConfig[] = [
	{ color: "bg-blue-500", size: 1, letter: "w" },
	{ color: "bg-red-500", size: 2, letter: "p" },
	{ color: "bg-green-500", size: 3, letter: "p" },
	{ color: "bg-yellow-500", size: 1, letter: "p" },
	{ color: "bg-purple-500", size: 2, letter: "p" },
	{ color: "bg-pink-500", size: 3, letter: "p" },
	{ color: "bg-indigo-500", size: 1, letter: "p" },
	{ color: "bg-orange-500", size: 2, letter: "p" },
	{ color: "bg-teal-500", size: 3, letter: "p" },
	{ color: "bg-cyan-500", size: 1, letter: "p" },
];

export default function SectionSkills({ addSectionRef }: SectionSkillsProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const engineRef = useRef<Matter.Engine | null>(null);
	const runnerRef = useRef<Matter.Runner | null>(null);
	const [ballPositions, setBallPositions] = useState<BallPosition[]>([]);
	const [center, setCenter] = useState({ x: 0, y: 0 });

	const resetAnimation = () => {
		if (runnerRef.current) {
			Matter.Runner.stop(runnerRef.current);
			runnerRef.current = null;
		}

		if (engineRef.current) {
			Matter.Events.off(engineRef.current, "beforeUpdate");
			Matter.World.clear(engineRef.current.world, false);
			Matter.Engine.clear(engineRef.current);
			engineRef.current = null;
		}

		setBallPositions([]);
		initializeMatter();
	};

	const initializeMatter = () => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		setCenter({ x: centerX, y: centerY });

		const engine = Matter.Engine.create();
		engineRef.current = engine;

		engine.world.gravity.y = 0;
		engine.world.gravity.x = 0;
		engine.world.gravity.scale = 0;

		const attractiveBody = Matter.Bodies.circle(centerX, centerY, 0, {
			isStatic: true,
			render: {
				visible: false,
			},
		});

		const balls = ballsConfig.map((config, index) => {
			const angle = Math.random() * Math.PI * 2;
			const distance = Math.random() * 1000;
			const x = centerX + Math.cos(angle) * distance;
			const y = centerY + Math.sin(angle) * distance;
			const radius = (config.size * 20 + 60) / 2;

			return Matter.Bodies.circle(x, y, radius, {
				friction: 0.1,
				frictionAir: 0.01,
				restitution: 0.8,
				density: 0.001,
				render: {
					visible: false,
				},
			});
		});

		Matter.World.add(engine.world, [attractiveBody, ...balls]);

		Matter.Events.on(engine, "beforeUpdate", () => {
			balls.forEach((ball) => {
				const dx = centerX - ball.position.x;
				const dy = centerY - ball.position.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const force = 0.005;

				Matter.Body.applyForce(ball, ball.position, {
					x: (dx / distance) * force,
					y: (dy / distance) * force,
				});
			});

			setBallPositions(
				balls.map((ball, index) => ({
					id: index,
					x: ball.position.x,
					y: ball.position.y,
					angle: ball.angle,
				}))
			);
		});

		const runner = Matter.Runner.create();
		runnerRef.current = runner;
		Matter.Runner.run(runner, engine);
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
		};
	}, []);

	return (
		<section
			ref={addSectionRef}
			className="min-h-screen grid place-items-center p-16 py-32 overflow-hidden"
		>
			<div className="max-w-6xl flex flex-col gap-4 justify-center h-full w-full">
				<div className="flex flex-col gap-4 justify-center">
					<h1 className="text-6xl font-black italic">
						&quot;Crafting digital excellence&quot;
					</h1>
					<p className="font-bold">
						Modern tech stack for exceptional web experiences
					</p>
					<div className="flex items-center gap-4">
						<button
							onClick={resetAnimation}
							className="btn btn-primary"
						>
							Relancer
						</button>
					</div>
				</div>
				<div className="relative h-full w-full">
					<div
						ref={containerRef}
						className="absolute inset-0 w-full h-full"
					>
						{ballPositions.map((position, index) => (
							<Ball
								key={position.id}
								config={ballsConfig[index]}
								position={position}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
