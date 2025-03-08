import { ComponentProps } from "react";

import { cn } from "@/utils";

type ContainerProps = ComponentProps<"div">;

const Container = ({ children, className, ...props }: ContainerProps) => {
	return (
		<div
			{...props}
			className={cn(
				"mx-auto w-full max-w-full px-3 sm:max-w-2xl sm:px-5 md:max-w-4xl lg:max-w-6xl lg:px-8 xl:max-w-7xl",
				className,
			)}
		>
			{children}
		</div>
	);
};

export { Container };
