import { Html, Button, Img } from "@react-email/components";
import logo from "../../../assets/apetito.png";

export default function EmailCreate() {
  return (
    <Html lang="en" dir="ltr">
      <Img src={logo} alt="Apetito granada" width="300" height="300"></Img>
    </Html>
  );
}
