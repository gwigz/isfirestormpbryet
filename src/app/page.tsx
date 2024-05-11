import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Home() {
	return (
		<main className="flex min-h-screen max-w-4xl mx-auto flex-col gap-12 items-center justify-between text-balance text-center text-xl p-24">
			<h1 className="text-8xl font-semibold">NO</h1>
			<h2 className="text-xl max-w-3xl font-bold">
				Firestorm is not PBR ready yet,{" "}
				<span className="text-blue-200">Linden Lab</span> released their PBR
				viewer{" "}
				<a
					href="https://community.secondlife.com/blogs/entry/14536-second-life-pbr-materials-official-launch"
					rel="noreferrer"
				>
					{dayjs().to(new Date("2023-11-28"))}
				</a>
			</h2>
			<h3 className="text-xl max-w-3xl font-bold">
				Firestorm viewer was last updated{" "}
				<a href="https://www.firestormviewer.org" rel="noreferrer">
					{dayjs().to(new Date("2023-12-24"))}
				</a>
			</h3>
			<div className="space-y-8 leading-relaxed font-light">
				<p>
					Instead of just slapping on textures and hoping for the best, PBR uses
					advanced calculations to accurately simulate how light interacts with
					different materials in the game world. This means that metal shines
					like metal, wood looks like wood, and fabric flows like fabric.
				</p>
				<p>
					Games like Cyberpunk 2077, Fortnite, and Halo all use PBR to great
					effect, drawing you in to their worlds with immersive visuals. Now we
					have this in Second Life. Don't worry about your system performance
					either. PBR has been making your games look cool since 2013. It's a
					well understood technology and it's more than likely your graphics
					card is more than ready for it.
				</p>
			</div>
			<div className="flex flex-col gap-6">
				<h3 className="font-semibold">Try a PBR viewer today!</h3>
				<div className="flex [&>*]:flex-grow gap-12">
					<a href="https://secondlife.com/support/downloads" rel="noreferrer">
						Official Viewer
					</a>
					<a href="https://www.alchemyviewer.org" rel="noreferrer">
						Alchemy Viewer
					</a>
					<a href="https://niranv-sl.blogspot.com" rel="noreferrer">
						Black Dragon Viewer
					</a>
				</div>
			</div>
			<hr className="w-full border-t-2 opacity-20 my-4" />
			<div className="flex flex-col gap-6">
				<h3>
					Alternatively, try out the Firestorm Beta,{" "}
					<span className="italic opacity-70">
						it's a little hard to find on their site, so follow the guide below
					</span>
				</h3>
				<ol className="list-decimal text-left max-w-lg mx-auto font-light leading-relaxed">
					<li>
						Join the Firestorm{" "}
						<a href="secondlife:///app/group/7ba4569c-9dd9-fed2-aaa7-36065d18a13c/about">
							preview viewer group
						</a>
					</li>
					<li>Check the group notices for the latest beta viewer</li>
					<li>Download and install the beta viewer</li>
				</ol>
			</div>
			<hr className="w-full border-t-2 opacity-20 my-4" />
			<a href="https://github.com/gwigz/isfirestormpbryet" rel="noreferrer">
				GitHub
			</a>
			<p className="opacity-70 font-light italic">
				This website is not affiliated with Linden Lab or Firestorm Viewer
			</p>
		</main>
	);
}
