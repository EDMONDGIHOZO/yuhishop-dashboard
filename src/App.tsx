import React from "react";
import "./App.css";
import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import Dashboard from "./components/secures/dashboard";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="container-fluid">
				<div className="row">
					<SideNav />
					<Dashboard />
				</div>
			</div>
		</div>
	);
}

export default App;
