import { useNavigate } from 'react-router-dom';
// import { IoIosArrowRoundBack } from "react-icons/io";

const BtnBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  
  return (
    <button onClick={handleBack} className="btn_back">back
      {/* <IoIosArrowRoundBack className='icon'/>BACK */}
    </button>
    )
  
}

export default BtnBack;