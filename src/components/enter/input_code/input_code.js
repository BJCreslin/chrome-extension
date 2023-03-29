import {MDBBtn, MDBInput} from "mdb-react-ui-kit";

const InputCode =()=> {
    return(
        <div>
            <MDBInput label='Введите полученный код' id='typeNumber' type='number' />
            <MDBBtn>OK</MDBBtn>
        </div>
    )
}

export  default InputCode;