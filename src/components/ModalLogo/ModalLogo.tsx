import Image from "next/image";
import Link from "next/link";
import styles from "./ModalLogo.module.css";

export default function ModalLogo() {
  return (
    <Link href="../">
      <div className={styles.logoDiv}>
        <Image src="/img/logo_modal.png" alt="logo" width={140} height={21} />
      </div>
    </Link>
  );
}
