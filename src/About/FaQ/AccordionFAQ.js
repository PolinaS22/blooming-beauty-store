import { dataQuestions } from "./dataQuestions"
import { ElementAccordion } from "./elementAccordion"
import './questions.css'

export const AccordionFAQ = () => {
    return (
        <div>
            {dataQuestions.map((item, index) => 
                <ElementAccordion key={ index } question={ item.question } answer={ item.answer }/>
            )}
        </div>
    )
}