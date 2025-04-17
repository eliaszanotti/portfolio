import Image from "next/image";

interface ImageData {
	src: string;
	width: number;
	height: number;
	alt?: string;
}

interface AppFrameContainerProps {
	imageData: ImageData;
	frameType: string;
}

export default function AppFrameContainer({
	imageData,
	frameType = "1-horizontal",
}: AppFrameContainerProps) {
	return (
		<div className="w-full relative">
			<Image
				className="h-full w-full object-cover object-center absolute z-0 p-[10%]"
				src={imageData.src}
				alt={imageData.alt || "image"}
				width={imageData.width}
				height={imageData.height}
			/>
			<Image
				className="h-full w-full object-contain object-center relative z-10"
				src={`/images/frame-${frameType}.png`}
				alt="elias"
				width={2000}
				height={2000}
			/>
		</div>
	);
}
