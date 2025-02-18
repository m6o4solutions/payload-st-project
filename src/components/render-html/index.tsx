type RenderHTMLProps = {
	html_content: string;
};

export const RenderHTML = ({ html_content }: RenderHTMLProps) => {
	const markup = { __html: html_content };

	return (
		<div
			dangerouslySetInnerHTML={markup}
			className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-a:text-blue-500 prose-a:hover:text-sky-500 prose-code:text-white"
		/>
	);
};
