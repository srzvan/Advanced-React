import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        Sick fits
        <Nav/>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}
