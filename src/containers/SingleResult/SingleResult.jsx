import './SingleResult.css';
import moment from 'moment';
import { Link } from 'react-router-dom';

const SingleResult = ({id, type, url, company, location, title, description, how_to_apply, company_logo, created_at}) => {
  return(
    <div className="single-result">
      <div className="single-result__left-column">
        <Link className="single-result__title" to={`/result/${id}`}>{title}</Link>
        <div className="single-result__detail">
          <span className="single-result__company">{company} - </span>
          <span className="single-result__type">{type}</span>
        </div>
      </div>
      <div className="single-result__right-column">
        <div className="single-result__location">{location}</div>
        <div className="single-result__created-at">{moment.utc(created_at).fromNow()}</div>
      </div>
    </div>
  )
}

export default SingleResult;