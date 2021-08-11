import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { withTheme } from "styled-components";

import { NavDropdown } from "react-bootstrap";
import { ReactComponent as RussianFlag } from "../../assets/icons/russian-flag.svg";
import { ReactComponent as KyrgyzFlag } from "../../assets/icons/kyrgyz-flag.svg";
import { ReactComponent as EnglishFlag } from "../../assets/icons/english-flag.svg";

import { LANGUAGES, RU_RU, KG_KG, EN_US } from "../../core/vars";

function LangNav({ theme }) {
	const { t, i18n } = useTranslation();

	const [lang, setLang] = useState(
		LANGUAGES.filter((lang) => lang.code === i18n.language)[0].name
	);

	const changeLang = (newLang) => {
		i18n.changeLanguage(newLang);
		setLang(LANGUAGES.filter((lang) => lang.code === newLang)[0].name);
		console.log(lang);
		console.log(i18n.language);
		// window.location.reload();
	};

	let DisplayedIcon = null;
	if (lang === "Кыргызча") {
		DisplayedIcon = <KyrgyzFlag />;
	} else if (lang === "Русский") {
		DisplayedIcon = <RussianFlag />;
	} else {
		DisplayedIcon = <EnglishFlag />;
	}

	return (
		<NavDropdown
			id="user-nav-dropdown"
			title={
				<div
					style={{
						display: "inline-block",
						color: theme.theme === "light" ? "rgb(21, 32, 43)" : "white",
					}}
				>
					{" "}
					{DisplayedIcon} {lang}{" "}
				</div>
			}
			alignRight
			style={{ color: "#333333" }}
		>
			<NavDropdown.Item onClick={() => changeLang(RU_RU)}>
				<RussianFlag
					className="mr-3"
					style={{ marginTop: "-2px", marginRight: "5px" }}
				/>
				{t("Russian")}
			</NavDropdown.Item>
			<NavDropdown.Item onClick={() => changeLang(EN_US)}>
				<EnglishFlag
					className="mr-3"
					style={{ marginTop: "-2px", marginRight: "5px" }}
				/>
				{t("English")}
			</NavDropdown.Item>
			<NavDropdown.Item onClick={() => changeLang(KG_KG)}>
				<KyrgyzFlag
					className="mr-3"
					style={{ marginTop: "-2px", marginRight: "5px" }}
				/>
				{t("Kyrgyz")}
			</NavDropdown.Item>
		</NavDropdown>
	);
}

export default withTheme(LangNav);
