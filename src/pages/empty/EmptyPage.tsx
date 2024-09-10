 
import { Link } from 'react-router-dom';
import './EmptyPage.scss';  

function EmptyPage() {
  return (
    <div className="empty-page">
      <h1 className="empty-page__title">Oops! This page is empty</h1>
      <p className="empty-page__description">There’s nothing here right now, but you can navigate back to explore more content.</p>
     <Link to= '/'> <button className="empty-page__button">Go Back</button></Link>
    </div>
  );
}

export default EmptyPage;
