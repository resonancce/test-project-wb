
import '../../App.css';

function MainContent({ arrayBlock }) {


    return (
        <main className="main">
            {
                arrayBlock.map((item, index) => (
                    <div
                        className="shop-items"
                        key={index}
                    >
                        <p className="shop-title">{item.nameItem}</p>
                        <p className="shop-title">{item.model}</p>
                    </div>
                ))
            }
        </main>
    );
}


export default MainContent;
