import "./JobItem.css";
import { Link } from "react-router-dom";


const JobItem = ({ id, companyName, companyLogo, title, contractType, location, postTime }) => {
    return (
        <Link to={"/job/" + id}>
            <div className="job-item-card" >
                <div className="job-item-content">

                    <div className="job-item-logo">
                        <img src={companyLogo} alt={companyName}></img>
                    </div>
                    <div className="job-item-post">
                        <p className="job-item-company">{companyName}</p>
                        <p className="job-item-title">{title}</p>
                        <p className="job-item-contract">
                            {contractType}
                        </p>
                    </div>
                    <div className="job-item-date">
                        <p>
                            <span className="material-icons">location_on</span>
                            {location}
                        </p>
                        <p>
                            <span className="material-icons">schedule</span>
                            {postTime}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default JobItem;