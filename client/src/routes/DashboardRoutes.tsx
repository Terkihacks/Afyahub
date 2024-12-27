import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
export default function DashboardRoutes(){
    return(
        <Router>
            <Routes>
                <Route path = "/"></Route>
                <Route path="/tasks"></Route>
                <Route path="/team"></Route>
            </Routes>
        </Router>
    )
}