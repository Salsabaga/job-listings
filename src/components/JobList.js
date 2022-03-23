import jsonData from "../data.json";
import JobCard from "./JobCard";
import Tags from "./Tags";

import { useState, useEffect } from "react";

const JobList = () => {
	const [filterJobList, setFilterJobList] = useState([]);
	const [filterTags, setFilterTags] = useState([]);
	const [tagListOpen, isTagListOpen] = useState(false);

	const filterJobs = (key, tag) => {
		if (key === "languages" || key === "tools") {
			setFilterTags((prevTags) => [...prevTags, { [key]: [tag] }]);
		} else {
			setFilterTags((prevTags) => [...prevTags, { [key]: tag }]);
		}

		isTagListOpen(true);
	};

	const deleteTag = (id) => {
		setFilterTags((prevTags) => {
			return prevTags.filter((tag, index) => {
				return index !== id;
			});
		});
	};

	const clearTags = () => {
		setFilterTags([]);
		isTagListOpen(false);
	};

	useEffect(() => {
		const filteredTable = jsonData.filter((job) => {
			return filterTags.every((tag) => {
				const [key, value] = Object.entries(tag)[0];
				if (key === "languages" || key === "tools") {
					return job[key].some((x) => x.includes(value));
				} else {
					return job[key] === value;
				}
			});
		});
		setFilterJobList(filteredTable);
		if (filterTags.length < 1) {
			isTagListOpen(false);
		}
	}, [filterTags]);
	return (
		<section className="job-list-container">
			{tagListOpen && (
				<Tags tags={filterTags} deleteTg={deleteTag} clearTg={clearTags} />
			)}
			<article className="card-container">
				{filterJobList.map((job) => (
					<JobCard key={job.id} job={job} filterBtn={filterJobs} />
				))}
			</article>
		</section>
	);
};

export default JobList;
