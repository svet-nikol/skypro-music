import { ButtonAccentLink } from "@/components/ModalButtons/Buttons";
import ModalPageWrap from "@/components/ModalPageWrap/ModalPageWrap";
import React from "react";
import styles from './not-found.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <ModalPageWrap>
      <div className={styles.container}>
        <h1>404 - Страница не найдена</h1>
        <ButtonAccentLink href="/">Вернуться на главную</ButtonAccentLink>
      </div>
    </ModalPageWrap>
  );
};

export default NotFoundPage;
