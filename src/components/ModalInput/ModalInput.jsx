import styles from "./ModalInput.module.css";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export default function ModalInput({ type, name, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={classNames(styles.modalInput, montserrat.className)}
    />
  );
}
