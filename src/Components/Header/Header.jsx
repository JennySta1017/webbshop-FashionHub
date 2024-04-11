import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './Header.css'

function Header () {

    return (
        <div id= "header-box">
            <Stack direction="horizontal" gap={3}>
            <div className="p-2">First item</div>
            <div className="p-2 ms-auto"><Button variant="success">Logga in</Button>{' '}</div>
            <div className="p-2">Third item</div>
            </Stack>
        </div>
   ) 

}

 

export default Header;