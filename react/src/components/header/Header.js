
import '../../App.css';

function Header({ onChangeValueUser, inputValueSearch }) {

    return (
        <header className="header">
            <input
                type="text"
                className="search-input"
                onChange={onChangeValueUser}
                value={inputValueSearch}
            />
        </header>
    );
}


export default Header;
