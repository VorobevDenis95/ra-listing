import Item from "./Item";
import itemInterface from "../interface.tsc/itemInterface";
import './Listing.css';

interface arrayProps {
  array: itemInterface[];
}

const Listing = ({array} : arrayProps) => {
  
  return (
    <div className="item-list">
        {array.map(item => (
            <Item key={item.listing_id} item={item}/>
        ))}
    </div>
  )  
}

export default Listing;