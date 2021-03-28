import "./LocationSearch.css";

const LocationSearch = ({ inheritClass, location, updateLocation }) => {

    const onLocationChange = (e) => {
        updateLocation(e.target.value);
    }

    return (
        <div className={inheritClass}>
            <div className="location-title">LOCATION</div>
            <div style={{ display: "flex" }}>
                <input type="text" className="location-input" placeholder="City, state, zip code or country"
                    value={location} onChange={onLocationChange} />
            </div>
        </div>
    )
}

export default LocationSearch;