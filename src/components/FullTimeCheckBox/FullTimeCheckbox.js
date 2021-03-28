import "./FullTimeCheckbox.css"

const FullTimeCheckbox = ({ inheritClass, fullTime, updateFullTime }) => {

    const onFullTimeChange = (e) => {
        updateFullTime(e.target.checked);
    }

    return (
        <div className={`${inheritClass} fulltime-checkbox`}>
            <input type="checkbox" className="filter-input" checked={fullTime} onChange={onFullTimeChange}>
            </input>
            <div className="filter-text">
                Full time
            </div>
        </div>
    )
}

export default FullTimeCheckbox;