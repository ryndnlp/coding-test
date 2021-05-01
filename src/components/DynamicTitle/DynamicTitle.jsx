import { Helmet } from 'react-helmet-async';

const DynamicTitle = ({title, description = "Welcome to github jobs."}) => {
  return(
    <Helmet>
      <title>{`Github Jobs | ${title}`}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default DynamicTitle;