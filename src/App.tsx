import './App.css';
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

function App() {
  const [step, setStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [date, setDate] = useState<string>('');
  const [showModal, setShowModal] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [noPos, setNoPos] = useState({ left: 0, top: 0 });
  const [buttonText, setButtonText] = useState("Next");
  const [isExiting, setIsExiting] = useState(false);

  const handleHover = () => {
    setNoPos({ left: Math.random() * 1000, top: Math.random() * 1000 });
    setHovered(true);
  }

  const handleNext = () => {
    setStep(step + 1);
    setButtonText("Next");
  }

  const handleHoverNext = () => {
    setButtonText("٩(*❛⊰❛)～❤️ Next");
  };

  const handleLeaveNext = () => {
    setButtonText("Next");
  };

  const handleCloseModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setShowModal(false);
      setIsExiting(false);
    }, 500); // Match this duration with the CSS animation duration
  };

  return (
    <div className="App">
      <header className="App-header">
        {
          step === 0 && (
            <>
              <h1>Would you go out with me for a date?</h1>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div className="btn-no hover-effect" onMouseEnter={handleHover} style={hovered ? { position: 'absolute', left: noPos.left, top: noPos.top } : {}}>No</div>
                <div className="love">
                  <div className="btn hover-effect" onClick={handleNext}>Yes</div>
                  <div id="heart1" className="hearts"></div>
                  <div id="heart2" className="hearts"></div>
                  <div id="heart3" className="hearts"></div>
                  <div id="heart4" className="hearts"></div>
                  <div id="heart5" className="hearts"></div>
                </div>
              </div>
              <img src={`${process.env.PUBLIC_URL}/lot.gif`} alt="Heart Gif" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
            </>
          )
        }
        {
          step === 1 && (
            <>
              <h1>When are you free?</h1>
              {(date === '' && showModal) && (
                <div className={`modal ${isExiting ? 'modal-exit' : ''}`}>
                  <div className="modal-content">
                    <h3 style={{ marginBottom: 0 }}>Oops!</h3>
                    <h4 style={{ fontSize: 18 }}>You haven't fill date yet. :(</h4>
                    <img
                      src={`${process.env.PUBLIC_URL}/lotso-angry.jpg`}
                      alt="Museum"
                      width={200}
                      style={{ marginBottom: '2rem' }}
                    />
                    <div className="btn" onClick={handleCloseModal}>Okay</div>
                  </div>
                </div>
              )}
              <input type="datetime-local" className="inp-datetime" onChange={(e) => setDate(e?.target?.value || '')} />
              <div
                className="btn hover-effect"
                onClick={() => {
                  if (date === '') {
                    setShowModal(true)
                  } else {
                    handleNext()
                  }
                }}
                onMouseEnter={handleHoverNext}
                onMouseLeave={handleLeaveNext}
              >
                {buttonText}
              </div>
            </>
          )
        }
        {
          step === 2 && (
            <>
              <h1>What do you like to do on a date?</h1>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <div onClick={handleNext}>
                  <img
                    src={`${process.env.PUBLIC_URL}/museum.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Museum Date</h4>
                </div>

                <div onClick={handleNext}>
                  <img
                    src={`${process.env.PUBLIC_URL}/movie.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Movie Date</h4>
                </div>

                <div onClick={handleNext}>
                  <img
                    src={`${process.env.PUBLIC_URL}/coffee.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Coffee Date</h4>
                </div>

                <div onClick={handleNext}>
                  <img
                    src={`${process.env.PUBLIC_URL}/arcade.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Arcade Date</h4>
                </div>
              </div>
            </>
          )
        }
        {
          step === 3 && (
            <>
              <h1>What do you want to eat?</h1>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/sushi.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Sushi</h4>
                </div>

                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/burger.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Burger & Fries</h4>
                </div>

                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/rice.webp`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Rice</h4>
                </div>

                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/steak.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Steak</h4>
                </div>
              </div>
            </>
          )
        }
        {
          step === 4 && (
            <>
              <h1>The choice is yours</h1>
              <div style={{ display: 'flex', gap: '4rem' }}>
                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/pick.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Pick Me at Home</h4>
                </div>

                <div onClick={() => handleNext()}>
                  <img
                    src={`${process.env.PUBLIC_URL}/place.jpg`}
                    alt="Museum"
                    className="img-hover-effect img"
                  />
                  <h4>Meet me at some place</h4>
                </div>
              </div>
            </>
          )
        }
        {
          step === 5 && (
            <>
              <h1>Rate how excited you are</h1>
              <Rating style={{ maxWidth: 250, marginBottom: '4rem' }} value={rating} onChange={setRating} />
              {(rating === 0 && showModal) && (
                <div className={`modal ${isExiting ? 'modal-exit' : ''}`}>
                  <div className="modal-content">
                    <h3 style={{ marginBottom: 0 }}>Oops!</h3>
                    <h4 style={{ fontSize: 18 }}>You haven't rated your excitement level yet. :(</h4>
                    <img
                      src={`${process.env.PUBLIC_URL}/lotso-angry.jpg`}
                      alt="Museum"
                      width={200}
                      style={{ marginBottom: '2rem' }}
                    />
                    <div className="btn" onClick={handleCloseModal}>Okay</div>
                  </div>
                </div>
              )}
              <div className="love">
                <div className="btn hover-effect" onClick={() => {
                  if (rating === 0) {
                    setShowModal(true)
                  } else {
                    handleNext()
                  }
                }} onMouseEnter={handleHoverNext}
                  onMouseLeave={handleLeaveNext}>{buttonText}</div>
                <div id="heart1" className="hearts"></div>
                <div id="heart2" className="hearts"></div>
                <div id="heart3" className="hearts"></div>
                <div id="heart4" className="hearts"></div>
                <div id="heart5" className="hearts"></div>
              </div>
            </>
          )
        }
        {
          step === 6 && (
            <>
              <h1>Thank you for your time</h1>
              <h2>Here is your ticket</h2>
              <div className="cardWrap">
                <div className="card cardLeft">
                  <h1>Startup <span>Cinema</span></h1>
                  <div className="title">
                    <h2>How I met your Mother</h2>
                    <span>movie</span>
                  </div>
                  <div className="name">
                    <h2>Vladimir Kudinov</h2>
                    <span>name</span>
                  </div>
                  <div className="seat">
                    <h2>156</h2>
                    <span>seat</span>
                  </div>
                  <div className="time">
                    <h2>12:00</h2>
                    <span>time</span>
                  </div>

                </div>
                <div className="card cardRight">
                  <div className="eye"></div>
                  <div className="number">
                    <h3>156</h3>
                    <span>seat</span>
                  </div>
                  <div className="barcode"></div>
                </div>

              </div>
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
