import { ReactComponent as ChevronLeft } from "../../assets/chevronleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevronright.svg";
import { Button } from "react-bootstrap";

interface NavigationButtonsProps {
  handlePrevious: () => void;
  handleNext: () => void;
  handleSelect: (number: number) => void;
  length: number;
  label: string;
  showPreviousNextButtons?: boolean;
  showSelectButtons?: boolean;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  handlePrevious,
  handleNext,
  handleSelect,
  length,
  label,
  showPreviousNextButtons = true,
  showSelectButtons = true
}) => {
  return (
    <div className="bg-secondary mb-5">
      {showPreviousNextButtons && (
        <button className="chevron-left" onClick={handlePrevious}>
          <ChevronLeft />
        </button>
      )}
      {showSelectButtons &&
        Array.from({ length }, (_, i) => (
          <Button
            className="w-25 btn-secondary py-3"
            key={i}
            onClick={() => handleSelect(i + 1)}
          >{`${label} ${i + 1}`}</Button>
        ))}
      {showPreviousNextButtons && (
        <button className="chevron-right" onClick={handleNext}>
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
