const data = [
	{
		id: 1,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fvanilla-extract-with-next-themes%2Fimage.png&w=1080&q=75",
		title: "Using Vanilla Extract with next-themes",
		category: "Javascript",
		description: "How to apply vanilla extract themes to Next.js apps",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Dec 17, 2021",
		ReadingTime: "5 min read",
	},
	{
		id: 2,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fradix-ui-styling-with-css%2Fimage.png&w=1080&q=75",
		title: "Styling Radix UI with CSS",
		category: "CSS",
		description:
			"Quick tip for styling Radix Primitives with plain CSS, CSS Modules, Vanilla Extract and more",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onl five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Dec 14, 2021",

		ReadingTime: "3 min read",
	},
	{
		id: 3,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Ffractional-svg-stars-css%2Fimage.png&w=1080&q=75",
		title: "Fractional SVG stars with CSS",
		category: "CSS",
		description:
			"Create a rating component with svg stars that support fractional values.",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived no only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Sep 06, 2021",
		ReadingTime: "4 min read",
	},
	{
		id: 4,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fresponsive-animation-framer-motion%2Fimage.png&w=1080&q=75",
		title: "Responsive Animations with Framer Motion",
		category: "Javascript",
		description:
			"How to write responsive variants with media queries in javascript",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survive not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Jun 09, 2021",
		ReadingTime: "3 min read",
	},
	{
		id: 5,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fbuilding-a-notion-blog-with-public-api%2Fimage.png&w=1080&q=75",
		title: "Building a blog with Notions public API",
		category: "Next.js",
		description:
			"How to use Notion as a CMS using their public API and Next.js",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever sinc the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on May 16, 2021",
		ReadingTime: "10 min read",
	},
	{
		id: 6,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fmapbox-static-image-api%2Fimage.png&w=1920&q=75",
		title: "Generating Open Graph images with Mapbox & Canvas",
		category: "Node.js",
		description:
			"How to use Mapbox static image API and Node Canvas to generate custom sharing images",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy tex ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on May 09, 2021",
		ReadingTime: "8 min read",
	},
	{
		id: 7,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Ftrailroutes%2Fimage.png&w=1920&q=75",
		title: "Building a mapping platform with React and Mapbox GL",
		category: "React",
		description: "How I built my side project Trail Routes",
		content:
			"Lorem Ipsum is simply dumm text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Apr 19, 2021",
		ReadingTime: "9 min read",
	},
	{
		id: 8,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fspring-parallax-framer-motion-guide%2Fbg.png&w=828&q=75",
		title: "Spring-based Parallax with Framer motion: Step by step",
		category: "React",
		description:
			"A guide on creating a spring-based Parallax scrolling effect using Framer Motion and React",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It wa popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Mar 15, 2021 ",
		ReadingTime: "8 min read",
	},
	{
		id: 9,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fios-chat-bubbles-css%2Fimage.png&w=1920&q=75",
		title: "How to create iOS chat bubbles in CSS",
		category: "CSS",
		description:
			"Creating a chat messaging app ui with CSS (with a sprinkle of JS and Framer Motion)",
		content:
			"Lorem Ipsum is simply dummy tex of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Feb 20, 2021",
		ReadingTime: "8 min read",
	},
	{
		id: 10,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fgit-newmr%2Fimage.png&w=1920&q=75",
		title: "My favorite productivity hack: git newmr",
		category: "Git",
		description: "Using git aliases to automate repetitive tasks",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and mor recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Feb 07, 2021 ",
		ReadingTime: "4 min read",
	},
	{
		id: 11,
		image:
			"https://samuelkraft.com/_next/image?url=%2Fblog%2Fpersonal-website-with-next-and-notion%2Fimage.png&w=1920&q=75",
		title: "Building my personal website with Next.js backed by Notion",
		category: "Next.js",
		description:
			"My experience rebuilding my personal website with Next.js & Typescript backed by Notion",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
		date: "Published on Jan 21, 2021",
		ReadingTime: "6 min read",
	},
];

export default data;
