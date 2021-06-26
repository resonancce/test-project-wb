import '../../App.css';

const Bucket = ( { bucketItems, setBucketItems, deleteItemFromBucket }) => {
    return (
        <main className="main">
            <button className="bucket-clear" onClick={() => setBucketItems([])}>
                Clear bucket
            </button>
            <div className="bucket-items">
                {
                    bucketItems.map((item, index) => (
                        <div
                            className="shop-items"
                            key={index}
                        >
                            <img
                                className="shop-item-logo"
                                src={item.link}
                                alt="logo-item"
                            />
                            <p className="shop-title">{item.nameItem}</p>
                            <p className="shop-title">{item.model}</p>
                            <p className="shop-title">Количество {item.amount}</p>
                            <button onClick={() =>  deleteItemFromBucket(item.id)}>
                                Удалить из корзины
                            </button>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default Bucket;