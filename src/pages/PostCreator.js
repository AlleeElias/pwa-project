import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {addDoc} from "firebase/firestore";
import {collectionReference, gamingReference} from "../services/firebasereader";

export function PostCreator(props) {
    const [drop, setDrop] = useState("collecting");
    const [title, setTitle] = useState("");
    const [userName, setUserName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (drop === 'collecting') {
            event.preventDefault();
            addCollectionPost();
            //document.getElementById('collectionbutton') != null ? console.log("gelukt") : console.log("niet gelukt");
        }
        if (drop === 'gaming') {
            event.preventDefault();
            addGamingPost();
            //document.getElementById('gamingbutton') != null ? console.log("gelukt") : console.log("niet gelukt");
        }
        window.location.reload(false);
    }

    const handleDrop = (event) => {
        setDrop(event.target.value);
    }
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleUser = (event) => {
        setUserName(event.target.value);
    }

    return <div className="vh-100">
        <h1>Create a new post!</h1>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <Form.Label>Username</Form.Label>
                    <Form.Control required onChange={handleUser} value={userName} type="text"
                                  placeholder="Interesting Username"></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Type of post:</Form.Label>
                    <Form.Select value={drop}
                                 onChange={handleDrop}>
                        <option value="collecting">Collection Post</option>
                        <option value="gaming">Gaming Post</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required onChange={handleTitle} value={title} type="text"
                                  placeholder="Interesting Title"></Form.Control>
                </Col>
                <Col>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control readOnly placeholder={currentDate()} value={currentDate()}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>No image upload :(</h2>
                </Col>
            </Row>
            <Row>
                <Button type={"submit"}>Create!</Button>
            </Row>
        </Form>
    </div>

    async function addGamingPost() {
        let newPost = {poster: userName, title: title, image: 'niks', date: currentDate()};
        await addDoc(gamingReference, newPost);
    }

    async function addCollectionPost() {
        let newPost = {poster: userName, title: title, image: 'niks', date: currentDate()};
        try{
            await addDoc(collectionReference, newPost);
        }catch (e){
            console.log(e);
        }
    }
}

function currentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}
