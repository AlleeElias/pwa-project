import {Container} from "react-bootstrap";
import {GamingReader} from "../services/firebasereader";

export function GamingView(props) {

    return (<Container fluid className={'align-content-center justify-content-center'}>
        <h1>Welcome to the gaming page!</h1>
        <GamingReader></GamingReader>
    </Container>);
}