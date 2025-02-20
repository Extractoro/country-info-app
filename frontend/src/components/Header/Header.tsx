import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="text-center border-b-2 border-b-black py-3 text-xl font-bold">
            <Link to="/">Country Info App</Link>
        </header>
    );
};
export default Header;
