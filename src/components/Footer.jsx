import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="foterLogo">
        <div>
          <h3>QPICK</h3>
        </div>
      </div>
      <div className="footerUL">
        <ul>
          <p className="footerUL-1">Избранное</p>
          <p className="footerUL-2">Корзина</p>
          <p className="footerUL-3">Контакты</p>
        </ul>
      </div>

      <div className="footerLang">
        <p className="footerLang-1">Условия сервиса</p>
        <div className="footerLangLow">
          <p className="footerLang-2">Рус</p>
          <p className="footerLang-3">Eng</p>
        </div>
      </div>

      <div>
        <ul className="footerIcons-Ul">
          <li className="footerIcons-Ul-1">
            <img src="/img/footer/1.png" alt="" />
          </li>
          <li className="footerIcons-Ul-2">
            <img src="/img/footer/2.png" alt="" />
          </li>
          <li className="footerIcons-Ul-3">
            <img src="/img/footer/3.png" alt="" />
          </li>
        </ul>
      </div>
    </footer>
  );
};
