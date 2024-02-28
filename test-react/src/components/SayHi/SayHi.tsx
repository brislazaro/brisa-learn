import { FC } from "react";

interface SayHiProps {
  userName: string;
}

const SayHi: FC<SayHiProps> = ({ userName }) => {
  return <div className="component-container">Hello {userName}</div>;
};

export default SayHi;
