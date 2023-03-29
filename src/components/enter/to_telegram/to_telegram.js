import QRCode from "react-qr-code";

const ToTelegram = (props) => {
    let telegram = props.telegram;
    return (<div>
            <div>Перейдите в телеграмм {telegram.url}.</div>
            <div style={{background: 'white', padding: '16px'}}>
                <QRCode value={telegram.url} size={100}/>
            </div>
        </div>
    );
}

export default ToTelegram;