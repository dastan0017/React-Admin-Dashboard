import React from "react";
import { useQuery, gql } from "@apollo/client";

import "./PageStyle.css";
import { Link } from "react-router-dom";

const PROJECTS = gql`
	query GetProjects {
		projects {
			title
			image {
				url
			}
			id
		}
	}
`;

export default function SampleProjectsPage() {
	const { loading, error, data } = useQuery(PROJECTS);
	
	if (loading) return <p>...Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<>
			<div className="project_container">
				<Link to="/">Go Home</Link>
				{data.projects.map((project) => (
					<div className="project_card" key={project.id}>
						<img src={`${project.image.url}`} alt="My little brother" />
						<div className="project_card-info">
							<h3>{project.title}</h3>
							<Link to={`/projects/${project.id}`}>Read more</Link>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
