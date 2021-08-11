import React from "react";
import "./projectCard.scss";

export default function ProjectCard(props) {
	return (
		<div className="project_card">
			<div className="project_card-background">
				<img src={props.img} alt="Timelysoft project info"></img>
				<div className="img_background">
					<div className="img_backgound-content">
						<h1>Hello world of java Users</h1>
						<p>
							What can you do? Not to worry– this article will give you some
							practical solutions to controlling your background image opacity.
							So, first, the bad news…
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
