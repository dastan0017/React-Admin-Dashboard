import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import Navbar from "./components/navbar/Navbar";
import theme from "styled-theming";
import SampleProjectsPage from "./pages/ProjectsPage";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export const backgroundColor = theme("theme", {
	light: "#fff",
	dark: "rgb(21, 32, 43);",
});

const Container = styled.div`
	background: ${backgroundColor};
`;

function App() {
	const theme = useSelector((state) => state.theme);

	return (
		<Router>
			<ApolloProvider client={client}>
				<ThemeProvider theme={{ theme }}>
					<Navbar />
					<Container className="app_container">
						<Switch>
							<Route exact path="/">
								<HomePage />
							</Route>

							<Route exact path="/projects">
								<SampleProjectsPage />
							</Route>
						</Switch>
					</Container>
				</ThemeProvider>
			</ApolloProvider>
		</Router>
	);
}

export default App;
