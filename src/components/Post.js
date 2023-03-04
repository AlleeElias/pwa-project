import {Button, Card, Image, Modal} from "react-bootstrap";
import {useState} from "react";

const defaultPIC = "https://firebasestorage.googleapis.com/v0/b/projectdynamic-c443e.appspot.com/o/empty.jpeg?alt=media&token=e9be494e-8de5-42e2-9f13-95570b1b4a6a";

//Component 1
export function Post(props) {
    const {post} = props;
    const [isOn, setIsOn] = useState(false);

    if (navigator.onLine) {
        return <div className={'col-sm-12 col-md-6 col-lg-4'}>
            <Card className={'bg-black'} onClick={() => setIsOn(!isOn)} border={'light'}>
                <Card.Title className={'text-light'}>{post.title}</Card.Title>
                <PostIMG image={post.image}></PostIMG>
                <PostText date={post.date}></PostText>
                <Modal className={'bg-dark'} show={isOn} size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered>
                    <Modal.Header className={'bg-black text-light'}>{post.title}
                        <Button variant={"danger"}
                                onClick={() => setIsOn(!isOn)}>X</Button></Modal.Header>
                    <Modal.Body className={'bg-black text-light'}>
                        <PostIMG image={post.image}></PostIMG>
                    </Modal.Body>
                    <Modal.Footer className={'bg-black text-light'}>
                        Posted
                        by {post.poster ? post.poster : "System Admin"} on {post.date ? post.date : "Date Unknown"}
                    </Modal.Footer>
                </Modal>
            </Card>
        </div>
    } else {
        return <div className={'col-sm-12 col-md-6 col-lg-4'}>
            <Card className={'bg-black'} onClick={() => setIsOn(!isOn)} border={'light'}>
                <Card.Title className={'text-light'}>{post.title}(Offline)</Card.Title>
                <PostIMG image={post.image}></PostIMG>
                <PostText date={post.date}></PostText>
                <Modal className={'bg-dark'} show={isOn} size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered>
                    <Modal.Header className={'bg-black text-light'}>{post.title}(Offline)
                        <Button variant={"danger"}
                                onClick={() => setIsOn(!isOn)}>X</Button></Modal.Header>
                    <Modal.Body className={'bg-black text-light'}>
                        <PostIMG image={post.image}></PostIMG>
                    </Modal.Body>
                    <Modal.Footer className={'bg-black text-light'}>
                        Posted
                        by {post.poster ? post.poster : "System Admin"} on {post.date ? post.date : "Date Unknown"}
                        Please keep in mind you are viewing an offline version!
                    </Modal.Footer>
                </Modal>
            </Card>
        </div>
    }
}

//Component 4
function PostText(props) {
    const {date} = props;
    return <p>Posted on: {date !== null ? date : 'No date found :('}</p>
}

//Component 8
function PostIMG(props) {
    const {image} = props;
    if (navigator.onLine) {
        return <Card.Img variant={'bottom'} src={image !== 'niks' ? image : defaultPIC}
                         alt={image !== 'niks' ? image : "Very much nothing!"}>
        </Card.Img>
    } else {
        //TODO: move images to src folder
        return <Card.Img variant={'bottom'} src={'/images/empty.jpeg'} alt={'Iets offline!'}>
        </Card.Img>
    }
}