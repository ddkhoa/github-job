import JobItem from "./JobItem";
import moment from "moment";
import NoDataFound from "../NoDataFound/NoDataFound";
import { useState } from "react";
import { Pagination } from "react-bootstrap";
import "./JobList.css";

const JobList = ({ jobs }) => {

    const [numberJobPerPage] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const maxPageNumber = Math.ceil(jobs.length / numberJobPerPage);
    // const paginationLimit = Math.min(pageNumber + 3, maxPageNumber);

    const currentJobNumber = (pageNumber - 1) * numberJobPerPage;
    const jobsInPage = jobs.slice(currentJobNumber, currentJobNumber + numberJobPerPage);

    const onPaginationItemClick = (e) => {
        const newPageNumber = parseInt(e.target.text)
        if (newPageNumber) { // undefined if click on current page
            setPageNumber(newPageNumber);
        }
    }

    const onPrevClick = () => {
        setPageNumber(pageNumber - 1);
    }

    const onNextClick = () => {
        setPageNumber(pageNumber + 1);
    }


    let paginationItems = [];
    if (maxPageNumber > 1) { // only display pagination button if there are more than 1 page

        if (pageNumber > 1) { // display prev button from 2nd page
            paginationItems.push(
                <Pagination.Item key="prev" onClick={onPrevClick}>
                    &#60;
                </Pagination.Item>
            );
        }

        for (let number = 1; number <= maxPageNumber; number++) {
            paginationItems.push(
                <Pagination.Item key={number} active={number === pageNumber} onClick={onPaginationItemClick}>
                    {number}
                </Pagination.Item>
            );
        }

        // if (paginationLimit < maxPageNumber) {
        //     paginationItems.push(
        //         <Pagination.Item key={maxPageNumber} active={maxPageNumber === pageNumber} onClick={onPaginationItemClick}>
        //             {maxPageNumber}
        //         </Pagination.Item>
        //     );
        // }

        if (pageNumber < maxPageNumber) { // display next button until the last page
            paginationItems.push(
                <Pagination.Item key="next" onClick={onNextClick}>
                    &#62;
                </Pagination.Item>
            );
        }
    }

    return (
        <div>
            {jobsInPage.length > 0 ?
                jobsInPage.map((item) => (
                    <JobItem key={item.id} id={item.id} companyName={item.company}
                        companyLogo={item.company_logo}
                        title={item.title}
                        contractType={item.type}
                        location={item.location}
                        postTime={moment(new Date(item.created_at)).fromNow()}
                        to={item.id}>
                    </JobItem>
                )) : <NoDataFound></NoDataFound>
            }
            <Pagination className="job-pagination">
                {paginationItems}
            </Pagination>
        </div>
    )
}

export default JobList