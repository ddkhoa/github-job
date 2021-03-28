import './KeywordSearch.css';

const KeywordSearch = ({ keyword, updateKeyword, getJobList }) => {


    const handleInputChange = (e) => {  // update input when typing
        updateKeyword(e.target.value);
    }

    const submitKeyword = () => {   // call getJobList function with updated keyword
        getJobList();
    }

    return (
        <div className="keyword-search">
            <div className="keyword-search-form">
                <input className="keyword-search-input" type="text" placeholder="&#xF002; Title, companies, expertise or benefits"
                    value={keyword} onChange={handleInputChange} />
                <button className="keyword-search-submit" onClick={submitKeyword}>Search</button>
            </div>
        </div>
    )
}

export default KeywordSearch;