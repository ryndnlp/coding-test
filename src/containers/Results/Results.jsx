import Pagination from '../../components/Pagination/Pagination';
import SingleResult from '../SingleResult/SingleResult';
import './Results.css';
import { useState} from 'react';

const RES_PER_PAGE = 10;

const Results = ({results}) => {
  const [currPage, setCurrPage] = useState(1);

  return(
    results.length?
    <>
      <div className="results">
        <h2 className="results__title">Job List</h2>
        <div className="results__container">
          {
            results.slice(RES_PER_PAGE * (currPage - 1), RES_PER_PAGE * currPage).map(result => 
              <SingleResult
                key={result.id}
                id={result.id}
                title={result.title} 
                type={result.type} 
                location={result.location} 
                created_at={result.created_at} 
                company={result.company}
              />
            )
          }
        </div>
        <Pagination setCurrPage={setCurrPage} currPage={currPage} lastPage={Math.ceil(results.length / RES_PER_PAGE)} />
      </div>
    </>
    :null
  )
}

export default Results;