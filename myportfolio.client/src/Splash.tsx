import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css'; // import the CSS with your font

const Splash: React.FC = () => {
  const navigate = useNavigate();

  // Set the browser tab title
  useEffect(() => {
    document.title = "MyPortfolio.Client";
  }, []);

  return (
    <div className="splash">
      <div className="splash-content">
        <h1 className="graffiti-title">MY PORTFOLIO</h1>
        {/* <h2 className="graffiti-subtitle">John Michael Macaraig</h2> */}
        <button className="enter-btn" onClick={() => navigate('/projects')}>
          Enter
        </button>

   
      </div>
    </div>
  );
};

export default Splash;