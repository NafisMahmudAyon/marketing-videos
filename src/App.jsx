import React, { useState } from "react";
import ReactPlayer from "react-player";

function App() {
	const [currentPlay, setcurrentPlay] = useState(0); // Changed initial value to 0
	const videos = [
		// {
		// 	id: 1,
		// 	title: "মাত্র ১০ দিনে ১ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০১",
		// 	desc: "A beginner-friendly overview of programming concepts.",
		// 	url: "/public/video-01.mp4",
		// 	tags: ["programming", "beginner", "coding"],
		// 	videoLength: "1:33:28",
		// },
		// {
		// 	id: 2,
		// 	title: "মাত্র ১০ দিনে ১ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০২",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-02.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "2:18:02",
		// },
		// {
		// 	id: 3,
		// 	title: "মাত্র ১০ দিনে ১ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৩",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-03.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "1:39:03",
		// },
		// {
		// 	id: 4,
		// 	title: "মাত্র ১০ দিনে ১ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৪",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-04.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "1:42:26",
		// },
		// {
		// 	id: 5,
		// 	title: "মাত্র ২৪ ঘন্টায় ১০ লাখ টাকা সেল হয়েছে - ক্লাস ০৫",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-05.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "2:05:33",
		// },
		// {
		// 	id: 6,
		// 	title: "মাত্র ২৪ ঘন্টায় ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৬",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-06.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },
		// {
		// 	id: 7,
		// 	title: "মাত্র ২৪ ঘন্টায় ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৭",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-07.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },
		// {
		// 	id: 8,
		// 	title: "মাত্র ১ দিনে ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৮",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-08.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },
		{
			id: 9,
			title: "মাত্র ১ দিনে ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ০৯",
			desc: "Explore the fundamental principles of data science.",
			url: "https://marketing-video.nafisbd.com/video-09.mp4",
			tags: ["data science", "analytics", "statistics"],
			videoLength: "22:45",
		},
		// {
		// 	id: 10,
		// 	title: "মাত্র ১ দিনে ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ১০",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-10.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },
		// {
		// 	id: 11,
		// 	title: "মাত্র ১ দিনে ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ১১",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-11.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },
		// {
		// 	id: 12,
		// 	title: "মাত্র ১ দিনে ১০ লাখ টাকা সেল করার চ্যালেঞ্জ - ক্লাস ১২",
		// 	desc: "Explore the fundamental principles of data science.",
		// 	url: "/public/video-12.mp4",
		// 	tags: ["data science", "analytics", "statistics"],
		// 	videoLength: "22:45",
		// },

		// Add more video objects as needed
	];

	const handleNextVideo = () => {
		setcurrentPlay((prevIndex) => (prevIndex + 1) % videos.length);
	};

	const handlePreviousVideo = () => {
		setcurrentPlay((prevIndex) =>
			prevIndex === 0 ? videos.length - 1 : prevIndex - 1
		);
	};

	return (
		<main className="bg-gray-950 text-white min-h-[100dvh] max-w-[960px] pt-8 ">
			<div className="pb-10">
				<div className="rounded-xl overflow-hidden w-[90%] mx-auto  border border-white p-1 ">
					<div className="relative pt-[56.25%]  rounded-xl overflow-hidden ">
						<ReactPlayer
							url={videos[currentPlay].url}
							width="100%"
							height="100%"
							className="absolute top-0 left-0 "
							controls
						/>
					</div>
				</div>
			</div>
			<div className="w-3/4 max-h-[300px] overflow-y-scroll mx-auto px-2">
				<div className="flex flex-col w-full gap-2 ">
					{videos.map((video, index) => (
						<div
							key={index}
							className="flex border border-red-400 rounded-lg "
							onClick={() => {
								setcurrentPlay(video.id - 1);
							}}>
							<div className="w-[78%] ">
								<h3 className="font-bold text-lg ">{video.title}</h3>
								<p className=" font-medium text-md border ">{video.desc}</p>
							</div>

							<div className="flex flex-col w-2/5 justify-center">
								<div className="w-full flex flex-wrap justify-end gap-2">
									{video.tags.map((tag, index) => (
										<div key={index} className="border">
											{tag}
										</div>
									))}
								</div>
								<div className="text-right">{video.videoLength}</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-between mt-4">
					<button onClick={handlePreviousVideo}>Previous</button>
					<button onClick={handleNextVideo}>Next</button>
				</div>
			</div>
		</main>
	);
}

export default App;
















