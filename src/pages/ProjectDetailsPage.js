import React from "react";
import { Link, useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import ReactMarkdown from "react-markdown";

const PROJECT = gql`
	query GetProject($id: ID!) {
		project(id: $id) {
			title
			description
			image {
				url
			}
			id
		}
	}
`;

export default function ProjectDetailsPage() {
	const { id } = useParams();
	console.log(id);
	const { loading, error, data } = useQuery(PROJECT, { variables: { id: id } });

	if (loading) return <p>...Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div className="project_details-container">
			<Link to="/projects">Go Back</Link>
			<h2>{data.project.title}</h2>
			<img src={`${data.project.image.url}`} alt="Timely soft" />
			<ReactMarkdown className="project_details-description">{data.project.description}</ReactMarkdown>
		</div>
	);
}
