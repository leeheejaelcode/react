import BackLink from '../components/BackLink';
import NoteForm from '../components/NoteForm';
import './NoteCreatePage.css';
import { func } from 'prop-types';
import { ROUTES } from '@/NoteApp/constants/routes';

NoteCreatePage.propTypes = {
  onChangeRoute: func.isRequired,
};

function NoteCreatePage({ onChangeRoute }) {
  const handleGoApp = () => {
    onChangeRoute(ROUTES.list);
  };

  return (
    <div className="NoteCreatePage">
      <BackLink onClick={handleGoApp} />
      <NoteForm mode="create" />
    </div>
  );
}

export default NoteCreatePage;
