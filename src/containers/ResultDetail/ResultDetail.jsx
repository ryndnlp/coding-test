import './ResultDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
import ActionButton from '../../components/ActionButton/ActionButton';
import { useHistory } from 'react-router'

const ResultDetail = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios.get(`/jobs/${id}`).then(resp => resp.data)
    .then(data => {
      setData(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [id]);

  const handleBack = e => {
    e.preventDefault();
    history.goBack();
  }

  return(
    <>
      <DynamicTitle title="Details" />
      <div className="result-detail">
        <div className="result-detail__logo-wrapper">
          <img src={data.company_logo} alt="company-logo" className="result-detail__logo"/>
        </div>
        <div className="result-detail__overview">
          <div className="result-detail__title">{data.title}</div>
          <div className="result-detail__sub-title">{data.type} - {data.location}</div>
        </div>
        <div className="result-detail__button-container">
          <ActionButton onClick={handleBack} text="Back" />
        </div>
        <div className="result-detail__content" dangerouslySetInnerHTML={{__html: data.description}}>
          
        </div>
      </div>
    </>
  )
}

export default ResultDetail;