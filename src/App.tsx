import React from "react";
import "./App.css";
import Nav from "./components/nav";
import SideNav from "./components/sidenav";
import Dashboard from "./components/secures/dashboard";
import Users from "./components/secures/users";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="container-fluid">
				<div className="row">
					<SideNav />
					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<BrowserRouter>
							<Route path={"/"} exact component={Dashboard} />
							<Route path={"/users"} component={Users} />
						</BrowserRouter>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
