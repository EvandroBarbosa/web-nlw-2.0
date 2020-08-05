import React from 'react';

import whatsappIcom from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemsProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemsProps> = ({ teacher }) => {
  
  function createConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }
  
  return (
    <article className="teacher-item">
          <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
              <strong>{teacher.name}</strong>
              <span>{teacher.subject}</span>
            </div>
          </header>

          <p>
            {teacher.bio}
          </p>

          <footer>
            <p>
              Preço/hora

              <strong>R$ {teacher.cost}</strong>
            </p>

            <a 
              target="_blank"
              rel="noopener noreferrer"
              onClick={createConnection}
              href={`https://wa.me/${teacher.whatsapp}`}>
              <img src={whatsappIcom} alt="Whatsapp"/>
              Entrar em contato
            </a>
          </footer>

        </article>
  );
}

export default TeacherItem;