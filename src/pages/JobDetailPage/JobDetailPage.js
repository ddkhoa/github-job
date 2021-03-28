import "./JobDetailPage.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import moment from "moment";

const JobDetailPage = () => {

    let { id } = useParams();
    const [job, setJob] = useState({});
    const [loading, setLoading] = useState(false);

    const getJobDetail = (id) => {

        const url = `http://localhost/job/${id}`;

        setLoading(true);

        fetch(url)
            .then(resp => resp.json())
            .then(data => { setJob(data.data); setLoading(false); });
    }

    useEffect(() => getJobDetail(id), [id]);

    return (

        <div>
            {loading ?
                <Spinner animation="border" variant="primary" className="loader" /> :
                <div className="main1">
                    <div className="left-bar">
                        <div>
                            <Link to="/">Back To Search</Link>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }}>
                        </div>
                    </div>

                    <div className="main-content">
                        <div>
                            <div className="job-detail-title">{job.title} </div>
                            <div className="job-detail-contract" >{job.type}</div>

                            <div className="job-detail-info">
                                <span className="material-icons">schedule</span> {moment(new Date(job.created_at)).fromNow()}
                            </div>
                        </div>

                        <div className="job-detail-company">
                            <img src={job.company_logo} alt={job.company}></img>
                            <div style={{ marginLeft: "2rem" }}>
                                <div className="job-detail-companyname">
                                    {job.company}
                                </div>
                                <div className="job-detail-info">
                                    <span className="material-icons">location_on</span>  {job.location}
                                </div>
                            </div>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: job.description }} >
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default JobDetailPage