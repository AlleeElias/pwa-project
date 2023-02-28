import PropTypes from "prop-types";
import {Container, Row} from 'react-bootstrap';
import {Post} from "./Post";

//Component 2
export function PostList(props) {
    return <Container spacing={'10'} fluid
                      className={'container-fluid row justify-content-center align-content-center'}>
        <Row>
            {props.posts ? props.posts.map(p => <Post key={p.id} post={p}/>) : <div>Laden</div>}
        </Row>
    </Container>
}

PostList.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
}