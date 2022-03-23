const JobCard = ({ job, filterBtn }) => {
	return (
		<div className={job.id === 1 || job.id === 2 ? "card featured" : "card"}>
			<div className="card-body">
				<div className="image-container">
					<img src={job.logo} alt={job.company} />
				</div>
				<div className="job-txt">
					<div className="company">
						<div>{job.company}</div> {job.new && <span>NEW!</span>}
						{job.featured && <span>FEATURED</span>}
					</div>
					<div className="position">{job.position}</div>
					<div className="job-details">
						<span>{job.postedAt}</span>
						<span className="point">&#8226;</span>
						<span>{job.contract}</span>
						<span className="point">&#8226;</span>
						<span>{job.location}</span>
					</div>
				</div>
			</div>
			<div className="card-seperator"></div>
			<div className="job-tags">
				<button onClick={() => filterBtn("role", job.role)}>
					<span>{job.role}</span>
				</button>
				<button onClick={() => filterBtn("level", job.level)}>
					<span>{job.level}</span>
				</button>
				{job.languages.map((lang) => (
					<button onClick={() => filterBtn("languages", lang)}>
						<span>{lang}</span>
					</button>
				))}
				{job.tools.map((tool) => (
					<button onClick={() => filterBtn("tools", tool)}>
						<span>{tool}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default JobCard;
