import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./projectPage.scss";

export default function ProjectsPage() {
	return (
		<div className="projects_list">
			<ProjectCard img="https://glo.academy/upload/landing/8ae/8aeb00bbf4122d6d051a52a1d3d09388.jpg" />
			<ProjectCard img="https://glo.academy/local/templates/landing24/img/content/article-img.jpg" />
			<ProjectCard img="https://glo.academy/upload/landing/8ae/8aeb00bbf4122d6d051a52a1d3d09388.jpg" />
			<ProjectCard img="https://glo.academy/local/templates/landing24/img/content/article-img.jpg" />
			<ProjectCard img="https://glo.academy/upload/landing/8ae/8aeb00bbf4122d6d051a52a1d3d09388.jpg" />
			<ProjectCard img="https://glo.academy/local/templates/landing24/img/content/article-img.jpg" />
		</div>
	);
}
