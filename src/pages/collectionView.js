import {Container} from "react-bootstrap";
import {CollectionReader} from "../services/firebasereader";

export function CollectionView() {
    return (<Container fluid className={'align-content-center justify-content-center'}>
        <h1>Welcome to the collection page!</h1>
        <CollectionReader></CollectionReader>
    </Container>);
}