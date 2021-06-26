
import '../../App.css';

function MainContent(props) {

    const { addItemToBucket, arrayBlock: arrayGoods } = props;

    return (
        <>
            <main className="main">
                {
                    arrayGoods.map((item, index) => (
                        <div
                            className="shop-items"
                            key={index}
                            style={{
                                opacity: item.amount === 0 ? 0.5 : 1,
                                pointerEvents: item.amount === 0 ? 'none' : 'auto'
                            }}
                        >
                            <img
                                className="shop-item-logo"
                                src={item.link}
                                alt="logo-item"
                            />
                            <p className="shop-title">{item.nameItem}</p>
                            <p className="shop-title">{item.model}</p>
                            <p>Осталось {item.amount}</p>
                            <button onClick={() => addItemToBucket(item.id)}>
                                 +
                            </button>
                        </div>
                    ))
                }
            </main>
            <>
                <div style={{
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    {
                        arrayGoods.length === 0 && (
                            <div className="lds-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        )
                    }
                </div>
            </>
        </>
    );
}


export default MainContent;
