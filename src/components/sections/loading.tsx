import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" role="status" />
        </div>
    )
}

export default Loading;