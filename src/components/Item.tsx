import itemInterface from "../interface.tsc/itemInterface"

interface itemProps {
    item: itemInterface;
}

const Item: React.FC<itemProps> = ({item}) => {

    const title = item.title.length > 50 ? item.title.slice(0, 51) + ' ...' : item.title; 

    let priceValute : string; 
    
    switch (item.currency_code) {
        case 'USD':
            priceValute = `$${item.price}`;
            break;
        case 'EUR':
            priceValute = `€${item.price}`;
            break;
        default:
            priceValute = `${item.price} ${item.currency_code}`
            break;
    }

    const remainderClass : string = item.quantity <= 10 
                        ? 'level-low'
                        : item.quantity <= 20
                        ? 'level-medium'
                        : item.quantity > 20
                        ? 'level-high'
                        : '';

    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{priceValute}</p>
                <p className={`item-quantity ${remainderClass}`}>{item.quantity} left</p>
            </div>
        </div>
    )
}

export default Item;
