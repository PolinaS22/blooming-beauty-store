import { useState } from "react"

export const ElementAccordion = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="accordion">
            <div className={ isOpen ? 'active' : 'default'}  onClick={handleOpen}>
                { question }
            </div>
            {
                isOpen && <div className="answer">
                    { answer }
                </div>
            }
        </div>
    )
}