import { Link } from "react-router-dom";

export const History = ({title}) => {
    return (
        <div className="path-user">
            <Link to='/' style={{ textDecoration: 'none', color:'rgb(90, 100, 90)', margin: '5px' }}>
             HOME 
            </Link> 
            <span style={{ margin: '5px' }}> / </span>
            <Link to='/shop' style={{ textDecoration: 'none', color:'rgb(90, 100, 90)', margin: '5px' }}> 
                SHOP 
            </Link> 
            <span style={{ margin: '5px' }}> / </span>
            <Link style={{ textDecoration: 'none', color:'rgb(90, 100, 90)', margin: '5px'  }}>
                {title.toUpperCase()}
            </Link>            
        </div>
    )
}