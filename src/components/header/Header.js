import "./header.css";

export const Header = () => {
  
  
  
    return (
      <header>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="main-nav collapse navbar-collapse" id="navbarSupportedContent">
          <dir className="navbar-nav mr-auto">
            <a className="nav-link active" href="">
              Blog
            </a>
            <a className="nav-link" href="">
              Log out
            </a>
          </dir>
        </div>
      </nav>
      </header>
    );
  
}
