import KeywordSearch from "../../components/KeywordSearch/KeywordSearch";
import FullTimeCheckbox from "../../components/FullTimeCheckBox/FullTimeCheckbox";
import LocationSearch from "../../components/LocationSearch/LocationSearch";
import CitySelection from "../../components/CitySelection/CitySelection";
import JobList from "../../components/JobList/JobList";
import "./JobListPage.css";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

const JobListPage = () => {
    const [jobList, setJobList] = useState([]);
    const [fullTime, setFullTime] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("Paris");
    const [loading, setLoading] = useState(false);

    useEffect(() => getJobList(), [fullTime, location]);    // we dont rerender the joblist on typing keyword, only when click on button search

    const getJobList = () => {

        let getJobListParams = {
            fullTime: fullTime,
            keyword: keyword,
            location: location
        }

        let url = "http://localhost/search";

        setLoading(true);
        fetch(url, {
            method: "POST",
            body: JSON.stringify(getJobListParams),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(response => response.json())
            .then(data => { setJobList(data.data); setLoading(false); });
    }

    return (
        <div>
            <KeywordSearch keyword={keyword} updateKeyword={setKeyword} getJobList={getJobList} ></KeywordSearch>
            <div className="main1">
                <div className="left-bar input12rem">
                    <FullTimeCheckbox inheritClass="left-menu-item"
                        fullTime={fullTime}
                        updateFullTime={setFullTime}
                    >
                    </FullTimeCheckbox>
                    <LocationSearch inheritClass="left-menu-item" location={location} updateLocation={setLocation}></LocationSearch>
                    <CitySelection inheritClass="left-menu-item" city={location} updateCity={setLocation}></CitySelection>
                </div>
                {loading ?
                    <Spinner animation="border" variant="primary" className="loader" /> :
                    <div className="main-content">
                        <JobList jobs={jobList}></JobList>
                    </div>
                }
            </div>
        </div>
    )
}

export default JobListPage;

