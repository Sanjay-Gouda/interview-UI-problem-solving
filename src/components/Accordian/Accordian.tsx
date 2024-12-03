import { FC, useState } from "react";
import { AccordionItem } from "../../App";
import "./Accordian.style.css";

interface IAccordianProps {
  accordianData: AccordionItem[];
}

const Accordian = ({ accordianData }: IAccordianProps) => {
  const [clikedAccordian, setClickedAccordian] = useState<number | null>(null);

  const handleExpandAccordian = (id: number) => {
    setClickedAccordian(id);
  };
  const handleCloseAccordian = () => {
    setClickedAccordian(null);
  };

  return (
    <>
      {/* <div className="wrapper"> */}
      {accordianData.map((item: AccordionItem) => (
        <div className="accordian" key={item.id}>
          <div className="accordian-header">
            <p>{item.title}</p>
            <div
              className={
                item.id === clikedAccordian
                  ? "hide-accordian-content"
                  : "show-accordian-content"
              }
            >
              <p>{item.content}</p>
            </div>
          </div>
          <div className="expand-button">
            {item.id !== clikedAccordian ? (
              <button onClick={() => handleExpandAccordian(item.id)}>+</button>
            ) : (
              <button onClick={handleCloseAccordian}>-</button>
            )}
          </div>
        </div>
      ))}
      {/* </div> */}
    </>
  );
};

export default Accordian;
