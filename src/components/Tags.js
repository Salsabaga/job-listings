import { v4 as uuidv4 } from "uuid";

const Tags = ({ tags, deleteTg, clearTg }) => {
	return (
		<section className="tags-container">
			<div className="tags-wrapper">
				<div className="tag-block-wrapper">
					{tags.map((x, index) => {
						let key = Object.keys(x)[0];
						return (
							<div key={uuidv4()} className="tag">
								<div className="rm-text">{x[key]}</div>
								<button onClick={() => deleteTg(index)}></button>
							</div>
						);
					})}
				</div>
				{tags.length !== 0 && (
					<div>
						<button className="clear-btn" onClick={() => clearTg()}>
							<span>Clear</span>
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default Tags;
