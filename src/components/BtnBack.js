import { useNavigate } from 'react-router-dom';

/* icon import */
import { ArrowLeft} from 'react-bootstrap-icons';

const BtnBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <button onClick={handleBack} className="btn_back">
      <ArrowLeft className='icon'/>BACK
    </button>
    )
  
}

export default BtnBack;