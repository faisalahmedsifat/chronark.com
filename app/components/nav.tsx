"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
	{ name: "Projects", path: "/projects" },
	{ name: "Blog", path: "/blog" },
	{ name: "Contact", path: "/contact" },
];

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const pathname = usePathname();
	const isHomePage = pathname === "/";

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-300 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/80 border-zinc-800"
				}`}
			>
				<div className="container flex items-center justify-between p-4 mx-auto">
					<div className="flex items-center gap-4">
						{!isHomePage && (
							<Link
								href="/"
								className="duration-200 text-zinc-300 hover:text-zinc-100 mr-2"
								aria-label="Back to home"
							>
								<ArrowLeft className="w-5 h-5" />
							</Link>
						)}
					</div>

					<nav className={`flex items-center ${isHomePage ? "mx-auto" : "ml-auto"}`}>
						<ul className="flex items-center gap-1 sm:gap-2 md:gap-4">
							{navItems.map((item) => (
								<li key={item.path}>
									<Link
										href={item.path}
										className={`relative px-3 py-2 text-sm transition-colors duration-300 ${
											pathname === item.path 
												? "text-zinc-100 font-medium" 
												: "text-zinc-400 hover:text-zinc-100"
										}`}
									>
										{item.name}
										{pathname === item.path && (
											<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-zinc-500/0 via-zinc-300/70 to-zinc-500/0" />
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
