import { Filter } from "./Filter"

export const AllCategories = () => {
    return (
        <div className='cont-btns'>
            {['hair', 'body', 'skincare', 'perfume', 'face', 'makeup']
            .map((category, i) => <Filter key={i} category={category}/>)}
        </div>
    )
}