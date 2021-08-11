import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button, Drawer } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import theme from "styled-theming";
//translation
import { useTranslation } from "react-i18next";

import "./navbar.scss";

import { Link } from "react-router-dom";
import { MaterialUISwitch } from "../themeSwitcher/switcher";
import { toggleTheme } from "../../redux/themeReducer/themeSlice";
import Sidebar from "./Sidebar";
import LangNav from "./LangNav";

export const backgroundColor = theme("theme", {
	light: "#fff",
	dark: "rgb(21, 32, 43);",
});

const StyledNavbar = styled.div`
	background: ${backgroundColor};
	color: ${backgroundColor};
`;

const useStyles = makeStyles({
	lightMenu: {
		boxShadow:
			"0px 2px 1px -2px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 14%)",
		background: "transparent",
		flexGrow: 1,
		display: "flex",
		justifyContent: "center",
	},
	darkMenu: {
		background: "transparent",
		flexGrow: 1,
		display: "flex",
		justifyContent: "center",
		boxShadow:
			"0px 2px 2px -2px rgb(255 255 255 / 100%), 1px 1px 2px 0px rgb(255 255 255 / 20%)",
	},
	text: {
		textTransform: "none",
		fontSize: "16px",
	},
	dark: {
		color: "rgb(21, 32, 43)",
	},
	light: {
		color: "white",
	},
});

export default function Navbar() {
	const { t } = useTranslation();

	const classes = useStyles();
	const dispatch = useDispatch();

	const [value, setValue] = useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const [isMenuOpen, SetIsMenuOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		SetIsMenuOpen(open);
	};

	const THEME = useSelector((state) => state.theme);
	const changeTheme = () => {
		dispatch(toggleTheme());
	};

	return (
		<StyledNavbar className="navbar_container">
			<div className="navbar_logo">
				<a>
					<img src="http://www.timelysoft.net/media/1116/logo_timelysoft.png" />
				</a>
				<div className="theme_switcher">
					<div className="adaptive_navbar">
						<Button onClick={toggleDrawer(!isMenuOpen)}>
							<MenuRoundedIcon color="secondary" fontSize="medium" />
						</Button>
					</div>
					<LangNav />
					<MaterialUISwitch onChange={changeTheme} />
				</div>
			</div>

			<div className="tablet_navbar">
				{/*  Will open sidebar if window is small  */}
				<Drawer
					// variant="persistent"
					anchor="left"
					open={isMenuOpen}
					onClose={toggleDrawer(false)}
				>
					<Sidebar isSidebarOpen={SetIsMenuOpen} curNavigation={setValue} />
				</Drawer>
			</div>

			<div className="desktop_navbar">
				{/*  Will open desktop navbar if window is big  */}
				<Paper
					classes={{
						root: THEME === "dark" ? classes.darkMenu : classes.lightMenu,
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="secondary"
						variant="scrollable"
						textColor="inherit"
						classes={{
							scrollButtons: THEME === "dark" ? classes.light : classes.dark,
						}}
						scrollButtons="auto"
					>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("AboutUs")}
							component={Link}
							to="/"
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("Services")}
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("Projects")}
							component={Link}
							to="/projects"
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("News")}
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("Partners")}
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("Jobs")}
						/>
						<Tab
							classes={{
								root: classes.text,
								textColorInherit:
									THEME === "light" ? classes.dark : classes.light,
							}}
							label={t("Internship")}
						/>
					</Tabs>
				</Paper>
			</div>
		</StyledNavbar>
	);
}
