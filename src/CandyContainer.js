import CandyCard from "./CandyCard";
import candys from "./candyData";

const CandyContainer = () => {
    return (
        <div className="candy_container">
            {candys.map((candy, index) => (
                <CandyCard key={index} candy={candy} />
            ))}
        </div>
    );
};

export default CandyContainer;