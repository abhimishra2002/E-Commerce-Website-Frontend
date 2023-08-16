import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'मिश्रा बुक डिपो',
  description: 'We sell the best books for cheap price',
  keywords: 'Books,copy',
};

export default Meta;
