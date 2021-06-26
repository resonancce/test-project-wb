
import '../../App.css';
import { Link } from "react-router-dom";

function Header({ onChangeValueUser, inputValueSearch, countItems = 0 }) {
    return (
        <header className="header">
            <Link
              to='/'
              className="main-title"
            >
                Главная
            </Link>
            <input
                type="text"
                className="search-input"
                onChange={onChangeValueUser}
                value={inputValueSearch}
            />
            <Link
                to='/bucket'
                className="bucket"
            >
                <div style={{ position: 'relative'}}>
                    <img
                        className="bucket-icon"
                        src="https://image.flaticon.com/icons/png/512/1374/1374128.png"
                        alt=""
                    />
                    {Boolean(countItems) && (
                        <span className="badge">{countItems}</span>
                    )}
                </div>
            </Link>
        </header>
    );
}


export default Header;
