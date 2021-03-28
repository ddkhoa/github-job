import "./NoDataFound.css";

const NoDataFound = ({ inheritClass }) => {


    return (
        <div className={`${inheritClass} no-data`}>
            <p>Cannot find any jobs meet condition</p>
        </div>
    )
}

export default NoDataFound;