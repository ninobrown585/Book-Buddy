/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from 'react';
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { setToken } from '../store/tokenSlice';
import Button from '@mui/material/Button';


import { useSelector, useDispatch } from 'react-redux'
import { Link } from '@mui/material';

export default function Nav() {
    const token = useSelector(state => state.token);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const navigate = useNavigate();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/books">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    {/* <a className="nav-item nav-link active"><Link to="/">Login</Link></a>
                    <a className="nav-item nav-link" href="#"><Link to= "/books"> Books </Link></a>                    */}
                    </div>
                </div>
                {token ?
            (<Button 
              color="inherit"
              onClick={() => {
              dispatch(setToken({ token: null }))
              navigate('/books')
            }}
            >Logout</Button>) : (<Button color="error" component={RouterLink} to="/login">Login</Button>)}
          <Link
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <Link onClick={handleClose} component={RouterLink} to="/books">Home</Link>
            {token && <Link onClick={handleClose} component={RouterLink} to="/account">Account</Link>}
          </Link>
                </nav>           
        </div>
    );
}