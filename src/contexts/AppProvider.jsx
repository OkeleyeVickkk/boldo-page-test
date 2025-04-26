import React from "react";

export const AppContext = React.createContext();

export const MenuProvider = ({ children }) => {
	const [stateData, setStateData] = React.useState({
		isSidebarOpen: false,
	});

	const toggleMenu = React.useCallback(() => {
		setStateData((prev) => ({ ...structuredClone(prev), isSidebarOpen: !prev.isSidebarOpen }));
	}, []);

	const closeMenu = React.useCallback(() => {
		setStateData((prev) => ({ ...structuredClone(prev), isSidebarOpen: false }));
	}, []);

	const openMenu = React.useCallback(() => {
		setStateData((prev) => ({ ...structuredClone(prev), isSidebarOpen: true }));
	}, []);

	return <AppContext.Provider value={{ stateData, toggleMenu, closeMenu, openMenu }}>{children}</AppContext.Provider>;
};
