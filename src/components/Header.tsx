import { HeaderProps } from "../types";

const Header = ( props: HeaderProps ) => {
  return (
    <>
        <h1 className="text-3xl font-bold underline">{props.welcome}</h1>
        <h3 className="text-3xl font-bold underline">{props.message}</h3>
    </>
  );
}

export default Header;