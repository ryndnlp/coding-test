import ActionButton from '../ActionButton/ActionButton';
import './Filter.css';

const Filter = ({handleClick, setDesc, setLoc, setIsFulltime}) => {
  
  const handleDescChange = e => {
    setDesc(e.target.value);
  }

  const handleLocChange = e => {
    setLoc(e.target.value);
  }

  const handleFulltimeChange = e => {
    const cb = document.getElementById('fulltime');
    setIsFulltime(cb.checked);
  }

  return(
    <div className="filter">
      <form className="filter__form">
        <div className="filter__input-container">
          <label htmlFor="" className="filter__label">Job Description</label>
          <input type="text" className="filter__input" placeholder="Filter by title, benefits, companies, expertise" onChange={handleDescChange} />
        </div>
        <div className="filter__input-container">
          <label htmlFor="" className="filter__label">Location</label>
          <input type="text" className="filter__input" placeholder="Filter by city, state, zip code or country" onChange={handleLocChange} />
        </div>
        <div className="filter__input-container">
          <input type="checkbox" id="fulltime" name="fulltime" className="filter__select" onChange={handleFulltimeChange}  />
          <label htmlFor="fulltime" className="filter__label"> Full Time Only</label>
        </div>
        <div className="filter__button-group">
          <ActionButton text="Search" onClick={handleClick} />
        </div>
      </form>
    </div>
  )
}

export default Filter;