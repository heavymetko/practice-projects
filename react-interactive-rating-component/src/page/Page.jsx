import Header from './Header';
import Main from './Main';
import RatingButtons from './RatingButtons';

export default function Page({ onRatingSubmit }) {
  return (
    <div>
      <Header />
      <Main />
      <RatingButtons onRatingSubmit={onRatingSubmit} />
    </div>
  );
}
