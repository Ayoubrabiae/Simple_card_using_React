// import img from "./../public/img.jpg"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the Font Awesome CSS file
library.add(fas);


function TopSection() {
  return (
    <div className="top-section">
      <h2 className="title">Cafe Siantino</h2>
      <div className="rating">
        <div className="stars">
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
          <FontAwesomeIcon icon="fa-solid fa-star" />
        </div>
        <span>4.5 (210)</span>
      </div>
      <div className="dots">
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
      </div>
    </div>
  )
}

function Description() {
  return (
    <>
      <div className="location">$ • Indonesia, Cafe</div>
      <div className="description">
        It if sometimes furnished unwilling as
        additions so. Blessing resolved pecul...
      </div>
    </>
  )
}

function Availability() {
  return (
    <div className="availability">
      <h4>Tonight’s Availability</h4>
      <div className="tags">
        <div className="tag">5:30PM</div>
        <div className="tag">7:30PM</div>
        <div className="tag">8:00PM</div>
        <div className="tag">9:00PM</div>
        <div className="tag">...</div>
      </div>
    </div>
  )
}

function BookBtn() {
  return (
    <div className='btn-area'>
      <button>Book</button>
      <FontAwesomeIcon icon="fa-solid fa-ellipsis" />
    </div>
  )
}

export default function App() {
  return (
    <div className="card">
      {/* <img src={img} alt="coffe Image" /> */}
      <div className="image"></div>
      <div className="text">
        <TopSection />
        <Description />
        <Availability />
        <BookBtn />
      </div>
    </div>
  )
}