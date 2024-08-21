import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../firebaseConfig";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth(app);

function LFGNavbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        // Reload the page or update the state
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand>Central LFG</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="Dropdown Jogos" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/lfgdestiny2">
              Destiny 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfghelldivers2">
              Helldivers 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgdiabloiv">
              Diablo IV
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgoverwatch2">
              Overwatch 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgrainbow6siege">
              Rainbow 6 Siege
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgvalorant">
              Valorant
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgleagueoflegends">
              League of Legends
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgapexlegends">
              Apex Legends
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgwarframe">
              Warframe
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/lfgfinalfantasyxiv">
              Final Fantasy XIV
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Dropdown Fóruns" id="basic-nav-dropdown-2">
            <NavDropdown.Item as={Link} to="/forumdestiny2">
              Destiny 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumhelldivers2">
              Helldivers 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumdiabloiv">
              Diablo IV
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumoverwatch2">
              Overwatch 2
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumrainbow6siege">
              Rainbow 6 Siege
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumvalorant">
              Valorant
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumleagueoflegends">
              League of Legends
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumapexlegends">
              Apex Legends
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumwarframe">
              Warframe
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/forumfinalfantasyxiv">
              Final Fantasy XIV
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ms-auto" id="user-nav">
          {user ? (
            <>
              <Nav.Link>{user.email}</Nav.Link>
              <Nav.Link as={Link} to="#" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">
                Login/Sign-In
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LFGNavbar;
