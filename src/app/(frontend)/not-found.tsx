import Link from "next/link";

import { Container } from "@/components/container";
import { Button } from "@/ui/button";

const NotFound = () => {
	return (
		<Container>
			<div className="py-64">
				<div className="prose max-w-none">
					<h1 className="text-primary" style={{ marginBottom: 0 }}>
						404
					</h1>
					<p className="text-foreground mb-4">The page you are looking for could not be found.</p>
				</div>

				<Button className="rounded-lg font-semibold uppercase" variant="default" asChild>
					<Link href="/">Go To Homepage</Link>
				</Button>
			</div>
		</Container>
	);
};

export default NotFound;
