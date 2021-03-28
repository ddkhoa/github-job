import Header from "./components/Header/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JobListPage from "./pages/JobListPage/JobListPage";
import JobDetailPage from "./pages/JobDetailPage/JobDetailPage";
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <JobListPage></JobListPage>
                    </Route>
                    <Route path="/job/:id" children={<JobDetailPage />} >
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
