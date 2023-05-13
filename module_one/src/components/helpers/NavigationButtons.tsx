import { ReactComponent as ChevronLeft } from "../../assets/chevronleft.svg";
import { ReactComponent as ChevronRight } from "../../assets/chevronright.svg";

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
    <div>
      {showPreviousNextButtons && (
        <button className="chevron-left" onClick={handlePrevious}>
          <ChevronLeft />
        </button>
      )}
      {showSelectButtons &&
        Array.from({ length }, (_, i) => (
          <button key={i} onClick={() => handleSelect(i + 1)}>{`${label} ${
            i + 1
          }`}</button>
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
