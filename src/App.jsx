import React, { useState } from "react";
import "./App.css";

const userName = prompt("Iltimos, ismingizni kiriting!") || "Foydalanuvchi";
const userSurname = prompt("Iltimos, familiyangizni kiriting!") || "";
function App() {

  const [cards, setCards] = useState([]);

  const addCard = () => {
    const whichBank = prompt(`Qaysi turdagi karta qo'shmoqchisiz? (Uzcard || Humo)`);
    const cardNumber = prompt("Kartangizni raqamlarini kiriting");
    const cardExpDate = prompt("Kartangizning amal qilish muddatini kiriting (MMYY)");

    if (!whichBank || !cardNumber || !cardExpDate) {
      alert("Barcha ma'lumotlarni to'g'ri kiriting!");
      return;
    }

    const newCard = {
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      bankLogo: whichBank.toLowerCase().includes("uzcard")
        ? "https://kdb.uz/storage/cards/October2021/hNE9Tjbf0qf181qpgGah.jpg"
        : "https://humocard.uz/upload/medialibrary/208/8x0p9hi3h9jww0flwdm92dayhn0flulj/humo-logo-more.png",
      cardName: `${userName} ${userSurname}`,
      cardNumbers: `${cardNumber.slice(0, 4)} ${cardNumber.slice(4, 8)} ${cardNumber.slice(8, 12)} ${cardNumber.slice(12, 16)}`,
      cardDate: `${cardExpDate.slice(0, 2)}/${cardExpDate.slice(2, 4)}`,
    };

    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div className="app">
      <header className="container container-user">
        <div className="content">
          <span>{userName[0].toLocaleUpperCase(userName[0])}</span>
          <div>
            <p className="salom">Salom</p>
            <p className="ism">{userName}</p>
          </div>
        </div>
        <button className="plus" onClick={addCard}>
          +
        </button>
      </header>
      <main className="container">
        <div className="cards-content">
          {cards.length === 0 ? (
            <div className="default-card">
              <h3 className="default-text">Karta kiritishingiz mumkin</h3>
            </div>
          ) : (
            cards.map((card) => (
              <div className="cards" style={{ backgroundColor: card.color }}>
                <img className="bankLogo" src={card.bankLogo} alt="Bank Logo" />
                <div className="info-content">
                  <div className="info">
                    <h3 className="cardname">{card.cardName}</h3>
                    <p className="cardNumbers">{card.cardNumbers}</p>
                  </div>
                  <p className="cardDate">{card.cardDate}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
