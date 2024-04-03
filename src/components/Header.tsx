import { HeaderProps } from "../types";

const Header = ( props: HeaderProps ) => {
  return (
    <>
        <h1>{props.welcome}</h1>
        <h3>{props.message}</h3>
    </>
  );
}

export default Header;