import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBBtn,
    MDBInputGroup
} from 'mdb-react-ui-kit';


function Header() {
    return (
        <div>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand><a href="/"><img className='ms-5' height={'80px'} width={'160px'} src="https://www.nicepng.com/png/detail/486-4861488_login-to-your-account-your-credentials-hello-doctor.png" alt="" /></a></MDBNavbarBrand>
                    <MDBInputGroup tag="form" className='d-flex w-auto mb-3 me-5'>
                        <input className='form-control' placeholder="Search Doctor" aria-label="Search" type='Search' />
                        <MDBBtn outline>Search</MDBBtn>
                    </MDBInputGroup>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}

export default Header