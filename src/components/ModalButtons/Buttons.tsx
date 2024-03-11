import Link from "next/link";
import styles from "./Buttons.module.css";
import { Montserrat } from "next/font/google";
import classNames from "classnames";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export function ButtonAccent({ children }: { children: string }) {
  return <button className={classNames(styles.btnAccent, montserrat.className)}>{children}</button>;
}

export function ButtonLink({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  return (
    <Link href={href} className={classNames(styles.btnLink, montserrat.className)}>
      {children}
    </Link>
  );
}
