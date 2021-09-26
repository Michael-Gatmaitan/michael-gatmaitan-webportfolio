import './styles/PageNumber.css';

const PageNumber = ({ pageNumber }) => {

  return (
    <div className="page-number-container">
      <div className="page-number">
        {pageNumber}
      </div>

      <div className="page-underline"></div>
    </div>
  )
};

export default PageNumber;