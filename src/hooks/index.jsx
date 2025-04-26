import React from "react";
import { AppContext } from "../contexts/AppProvider";

export const useMenu = () => {
	const context = React.useContext(AppContext);
	if (!context) {
		throw new Error("useMenu must be used within a MenuProvider");
	}
	return context;
};
