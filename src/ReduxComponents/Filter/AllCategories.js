import { Filter } from "./Filter"

export const AllCategories = () => {
    return (
        <div className='cont-btns'>
            {['ALL', 'hair', 'body', 'skincare', 'perfume', 'face', 'makeup']
            .map(category => <Filter key={category} category={category}/>)}
        </div>
    )
}
