import ToTelegram from "./enter/to_telegram/to_telegram";
import Header from "./enter/header/header";
import Description from "./enter/description/description";
import InputCode from "./enter/input_code/input_code";
import {MDBBtn} from "mdb-react-ui-kit";
import Preloader from "../common/PreLoader";

const Enter = (props) => {
    if (!props.telegram) {
        return <Preloader/>
    }
    const testConnectClick = () => {

    }

    const buttonText = (variant) => {
        return variant
    }

    return (
        <div>
            <Header/>
            <Description/>
            <ToTelegram telegram={props.telegram}/>
            <InputCode/>
            <MDBBtn className='text-dark' color='light' onClick={testConnectClick}>
                {buttonText(props.telegram.isConnected)}
            </MDBBtn>
        </div>
    )
}

export default Enter;