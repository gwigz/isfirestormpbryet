import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Separator() {
	return (
		<hr className="w-full border-t-2 border-foreground/5 dark:border-foreground/10 my-4" />
	);
}

export default function Home() {
	return (
		<main className="flex min-h-screen max-w-7xl mx-auto flex-col gap-8 sm:gap-12 sm:items-center justify-between text-balance sm:text-center text-xl p-6 sm:p-12">
			<h1 className="text-9xl font-semibold">YES</h1>

			<h2 className="text-xl sm:text-3xl font-bold space-y-3">
				<div>Firestorm finally has PBR downloads available</div>
				<div className="font-semibold leading-snug">
					<span className="text-blue-400 dark:text-blue-300 text-nowrap">
						Linden Lab
					</span>{" "}
					released PBR{" "}
					<a
						href="https://community.secondlife.com/blogs/entry/14536-second-life-pbr-materials-official-launch"
						rel="noreferrer"
					>
						{dayjs().to(new Date("2023-11-28"))}
					</a>
				</div>
			</h2>

			{/* <h3 className="max-w-3xl">
				Firestorm Viewer was last updated{" "}
				<a href="https://www.firestormviewer.org" rel="noreferrer">
					{dayjs().to(new Date("2023-12-14"))}
				</a>
			</h3> */}

			<Separator />

			<div className="max-w-3xl space-y-8 leading-relaxed font-light text-balance">
				<p>
					Instead of just slapping on textures and hoping for the best, PBR uses
					advanced calculations to accurately simulate how light interacts with
					different materials in the game world. This means that metal shines
					like metal, wood looks like wood, and fabric flows like fabric.
				</p>
				<p>
					Games like Cyberpunk 2077, Fortnite, and Halo all use PBR to great
					effect, drawing you in to their worlds with immersive visuals. Now we
					have this in Second Life! Don't worry about your system performance
					either, PBR has been making your games look cool since 2013. It's a
					well understood technology, and it's more than likely your graphics
					card is more than ready for it.
				</p>
				<p>
					The latest update also comes with; HDR environments, auto exposure,
					tone-mapping, and emojis 🤪✨
				</p>
			</div>

			<div className="flex flex-col gap-8">
				<h3 className="font-semibold">Try a PBR viewer today!</h3>

				<div className="grid items-start sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 [&>*]:flex-grow [&>*]:grid [&>*]:gap-1 [&>*]:md:gap-3 [&>*]:text-foreground/70">
					<div>
						<div>
							<span className="relative">
								<a
									href="https://secondlife.com/support/downloads"
									rel="noreferrer"
								>
									Official Viewer
								</a>
								<span className="absolute right-0 translate-x-full opacity-70 align-super text-sm">
									*
								</span>
							</span>
						</div>
						PBR since {dayjs(new Date("2023-11-28")).format("MMMM YYYY")}
					</div>

					<div>
						<div>
							<span className="relative">
								<a href="https://www.alchemyviewer.org" rel="noreferrer">
									Alchemy Viewer
								</a>
								<span className="absolute right-0 translate-x-full opacity-70 align-super text-sm">
									1
								</span>
							</span>
						</div>
						PBR since {dayjs(new Date("2023-04-14")).format("MMMM YYYY")}
					</div>

					<div>
						<div>
							<span className="relative">
								<a href="https://niranv-sl.blogspot.com" rel="noreferrer">
									Black Dragon Viewer
								</a>
								<span className="absolute right-0 translate-x-full opacity-70 text-left align-super text-sm">
									1,2
								</span>
							</span>
						</div>
						PBR since {dayjs(new Date("2023-12-02")).format("MMMM YYYY")}
					</div>

					<div>
						<div>
							<span className="relative">
								<a href="http://sldev.free.fr" rel="noreferrer">
									CoolVLViewer
								</a>
								<span className="absolute right-0 translate-x-full opacity-70 align-super text-sm">
									3
								</span>
							</span>
						</div>
						PBR since {dayjs(new Date("2023-07-29")).format("MMMM YYYY")}
					</div>

					<div>
						<div>
							<span className="relative">
								<a
									href="https://kokua.atlassian.net/wiki/spaces/KKA/overview?mode=global"
									rel="noreferrer"
								>
									Kokua Viewer
								</a>
							</span>
						</div>
						PBR since {dayjs(new Date("2024-03-30")).format("MMMM YYYY")}
					</div>

					<div>
						<div>
							<span className="relative">
								<a href="https://megapahit.net" rel="noreferrer">
									Megapahit Viewer
								</a>
								<span className="absolute right-0 translate-x-full opacity-70 align-super text-sm">
									**
								</span>
							</span>
						</div>
						PBR since initial release
					</div>
				</div>

				<div className="space-y-1">
					<p className="opacity-70 font-light italic text-base">
						Non-official viewers are not affiliated with Linden Lab
					</p>

					<p className="opacity-70 font-light italic text-base">
						* No Linux support
					</p>

					<p className="opacity-70 font-light italic text-base">
						** Only supports Linux, and macOS arm64 (Apple Silicon), no voice
						support planned till{" "}
						<a
							href="https://community.secondlife.com/blogs/entry/15626-coming-to-an-agni-region-near-you-an-update-on-changes-to-voice"
							rel="noreferrer"
						>
							WebRTC update
						</a>
					</p>

					<p className="opacity-70 font-light italic text-base">
						1. Currently labelled as "beta", but are publicly available online
					</p>

					<p className="opacity-70 font-light italic text-base">
						2. Non-typical interface, Windows only, and may not be suitable for
						all users
					</p>

					<p className="opacity-70 font-light italic text-base">
						3. Only provides the V1-style interface
					</p>
				</div>
			</div>

			<div className="grid gap-8">
				<h4 className="italic">And that's not all!</h4>
				<p className="font-bold">More features are coming soon:</p>
				<ul className="grid text-left list-disc md:list-none pl-6 md:pl-0 leading-relaxed max-w-lg md:max-w-[100%] mx-auto md:text-center gap-2 md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:[&>*]:max-w-[23rem]">
					<li>
						<a
							href="https://community.secondlife.com/blogs/entry/15626-coming-to-an-agni-region-near-you-an-update-on-changes-to-voice"
							rel="noreferrer"
						>
							WebRTC voice
						</a>
					</li>
					<li>
						<a
							href="https://community.secondlife.com/blogs/entry/15291-mirrors-pbr-terrain-and-2k-textures"
							rel="noreferrer"
						>
							PBR materials on terrain
						</a>
					</li>
					<li>
						<a
							href="https://community.secondlife.com/blogs/entry/15291-mirrors-pbr-terrain-and-2k-textures"
							rel="noreferrer"
						>
							Mirrors
						</a>
					</li>
					<li>
						<a
							href="https://modemworld.me/2024/05/17/2024-week-20-sl-ccug-summary"
							rel="noreferrer"
						>
							glTF scene importer
						</a>
					</li>
					<li>
						<a
							href="https://modemworld.me/2024/05/17/2024-week-20-sl-ccug-summary"
							rel="noreferrer"
						>
							glTF extensions for better translucent materials, and LOD control
						</a>
					</li>
					<li>
						<span>
							More glTF extensions, blend shapes, and non-linear animation
							support
						</span>
					</li>
				</ul>

				<p className="opacity-70 font-light italic text-base">
					Some of these are work in progress, and subject to change
				</p>
			</div>

			<h3 className="leading-loose">
				Alternatively,{" "}
				<span className="relative">
					<a href="https://www.firestormviewer.org" rel="noreferrer">
						stay with Firestorm
					</a>
					<span className="absolute right-0 top-0 translate-x-full opacity-70 text-left align-super text-xs">
						1
					</span>
				</span>
				<div>Hopefully future updates are more frequent!</div>
			</h3>

			<Separator />

			<p>
				<a
					className="dark:text-blue-200 no-underline hover:underline focus:underline"
					href="https://github.com/gwigz/isfirestormpbryet"
					rel="noreferrer"
				>
					GitHub
				</a>
			</p>

			<p className="opacity-70 font-light italic text-base">
				This website is not affiliated with Linden Lab or any third party viewer
			</p>
		</main>
	);
}
