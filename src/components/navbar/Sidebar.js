import React from "react";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: "auto",
	},
});

const Sidebar = (props) => {
	const { t } = useTranslation();

	const classes = useStyles();

	const toggleSidbar = (open) => () => {
		props.isSidebarOpen(open);
	};

	return (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleSidbar(false)}
			onKeyDown={toggleSidbar(false)}
		>
			<List
				className={classes.text}
				component="ul"
				style={{ fontWeight: "bold" }}
			>
				<ListItem
					button
					alignItems="center"
					onClick={() => props.curNavigation(0)}
					component={Link}
					to="/"
				>
					<ListItemIcon>
						<HomeRoundedIcon fontSize="medium" color="secondary" />
					</ListItemIcon>
					<ListItemText primary={t("AboutUs")} disableTypography={true} />
				</ListItem>

				<ListItem button onClick={() => props.curNavigation(1)}>
					<ListItemText primary={t("Services")} disableTypography={true} />
				</ListItem>

				<ListItem
					button
					onClick={() => props.curNavigation(2)}
					component={Link}
					to="/projects"
				>
					<ListItemText primary={t("Projects")} disableTypography={true} />
				</ListItem>

				<ListItem button onClick={() => props.curNavigation(3)}>
					<ListItemText primary={t("News")} disableTypography={true} />
				</ListItem>

				<ListItem button onClick={() => props.curNavigation(4)}>
					<ListItemText primary={t("Partners")} disableTypography={true} />
				</ListItem>

				<ListItem button onClick={() => props.curNavigation(5)}>
					<ListItemText primary={t("Jobs")} disableTypography={true} />
				</ListItem>
				<ListItem button onClick={() => props.curNavigation(6)}>
					<ListItemText primary={t("Internship")} disableTypography={true} />
				</ListItem>
			</List>
		</div>
	);
};

export default Sidebar;
