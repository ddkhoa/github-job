import "./CitySelection.css";


const CitySelection = ({ inheritClass, city, updateCity }) => {

    const onCityChange = (e) => {
        updateCity(e.currentTarget.value);
    };

    const cityList = [
        "Paris",
        "Amsterdam",
        "New York",
        "Berlin",
    ]

    return (

        <div className={`city-selection ${inheritClass}`}>
            {
                cityList.map(item => {
                    return (
                        <div key={item}>
                            <input className="filter-input" type="radio" id={item} name="city" value={item}
                                checked={city === item} onChange={onCityChange} />
                            <label className="filter-text" htmlFor={item}>{item}</label>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CitySelection