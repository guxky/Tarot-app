import "./TopBar.css";

interface TopBarProps {
  userName: string;
  profilePhoto: string;
}

function TopBar(){
    return(
        <header className="top-bar">
            <div className="logo">
                <span className="logo-icon">🌙 </span>
                <h1 className=" top-bar-title"> T A R O T </h1>
            </div>

            <div className="info">
                <p className="username"> manuela</p>
                <img alt="Foto de perfil" className="user-profile-picture" />
            </div>
        </header>  
    );
}

export default TopBar;