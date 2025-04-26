import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.css";
import App from "./App.jsx";
import { MenuProvider } from "./contexts/AppProvider.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<MenuProvider>
			<App />
		</MenuProvider>
	</StrictMode>
);
