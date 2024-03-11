import { ButtonAccent, ButtonLink } from "@/components/ModalButtons/Buttons";
import InputModal from "@/components/ModalInput/ModalInput";
import ModalLogo from "@/components/ModalLogo/ModalLogo";
import ModalFormWrap from "@/components/ModalFormWrap/ModalFormWrap";
import ModalPageWrap from "@/components/ModalPageWrap/ModalPageWrap";

export default function SignIn() {
  return (
    <ModalPageWrap>
      <ModalFormWrap>
        <ModalLogo />
        <InputModal type="text" name="login" placeholder="Почта" />
        <InputModal type="password" name="password" placeholder="Пароль" />
        <ButtonAccent>Войти</ButtonAccent>
        <ButtonLink href="/signup">Зарегистрироваться</ButtonLink>
      </ModalFormWrap>
    </ModalPageWrap>
  );
}
