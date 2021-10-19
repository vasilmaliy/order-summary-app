import React from 'react';
import './styles/App.css';
import Header from './components/UI/Header/Header';
import Button from './components/UI/Button/Button';
import PaymentPlan from './components/UI/PaymentPlan/PaymentPlan';


function App() {
  return (
    <div className="card-container">
      <article className="main-card">
        <Header />
        <div className="main-card__content">
          <h1 className="main-card__title">Order Summary</h1>
          <h2 className="main-card__subtitle">
            You can npw listen to millions of songs, audiobooks, and podcasts on any device anywhere
            you like!
          </h2>
          <PaymentPlan/>
          <Button>Proceed to Payment</Button>
          <button className="main-card__cancel-order-btn">Cancel Order</button>
        </div>
      </article>
    </div>
  );
}

export default App;
