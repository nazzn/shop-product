import React from "react";
import { useNavigate } from "react-router-dom";

const MainLayouts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigat = useNavigate();

  const onClick = () => {
    // event.preventDefault();
    navigat("/product");
  };
  return (
    <div>
      <nav className="bg-gray-400 p-2 m-2 rounded-lg ">
        <button onClick={onClick}>products</button>
      </nav>
      <div>{children}</div>
    </div>
  );
};
export default MainLayouts;
