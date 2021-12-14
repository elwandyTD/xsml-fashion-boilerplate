import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Alert from "../components/Alert";

const MainTemplate = () => {
	return (
		<Box>
			{/* Navigation */}
			<NavigationBar />
			{/* End Navigation */}

			{/* Your Main Pages */}
			<Outlet />
			{/* End Your Main Pages */}
			{/*  */}
			<Text>Footer</Text>
			<Alert />
		</Box>
	);
}

export default MainTemplate