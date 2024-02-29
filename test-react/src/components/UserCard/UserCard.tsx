import { FC } from "react";

interface UserCardProps {
  userName: string;
  age: number;
}

const UserCard: FC<UserCardProps> = ({ userName, age }) => {
  return (
    <div className="component-container">
      <p>Name: {userName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
