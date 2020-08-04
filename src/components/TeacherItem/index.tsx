import React from 'react';

import whatsappIcom from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/22474353?s=400&u=206de9f22291e00c20ec5840c88f09806636e8c3&v=4" alt="Evandro Barbosa"/>
            <div>
              <strong>Evandro Barbosa</strong>
              <span>Flutter Desktop</span>
            </div>
          </header>

          <p>
            Entusiasta das melhores tecnologias de programação
            <br />
            <br />
            Apaixonado por criar coisas que possa ser util para as pessoas e comunidade,
            com objetivo de mudar a vida das pessoas em seu redor.
          </p>

          <footer>
            <p>
              Preço/hora

              <strong>R$ 150,00</strong>
            </p>

            <button type="button">
              <img src={whatsappIcom} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>

        </article>
  );
}

export default TeacherItem;