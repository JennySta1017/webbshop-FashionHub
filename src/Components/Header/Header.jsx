import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './Header.css'

function Header () {

    return (
        <div id= "header-box">
            <Stack direction="horizontal" gap={3}>
            <div className="p-2">First item</div>
            <div className="p-2 ms-auto"><Button variant="secondary">Logga in</Button>{' '}</div>
            <div id="kassa-img" className="p-2"><img src="/Images/kassa.png" alt="kassa" /></div>
            </Stack>
        </div>
   ) 

}

 

export default Header;