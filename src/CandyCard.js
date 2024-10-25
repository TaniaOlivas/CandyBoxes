import { useState } from "react";

const CandyCard = ({ candy }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className="candy-card">
            <h2>{candy.name}</h2>
            <img alt="Chocolate Candy" src={candy.image} style={{ textAlign: "center", width: "150px" }} />
            <p>Description: {candy.description}</p>
            <p>Ingredients: {candy.ingredients}</p>
            <button onClick={handleOpenModal}>Show Calorie Info</button>
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <h4>Calories</h4>
                        <p>{candy.calories}</p>
                        <button onClick={handleCloseModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CandyCard;