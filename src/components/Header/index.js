import logo from './Instagram-Logo.png';

export function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt="Instagram Logo" />
            </div>
        </header>
    );
}
