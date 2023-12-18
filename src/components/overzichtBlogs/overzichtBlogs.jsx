import { useParams } from "react-router-dom";
import posts from '../constants/data.json';

function BlogPost() {
    console.log(posts);

    return (
        <></>
    );
}

function OverzichtBlogs() {
    const { id } = useParams();

    return (
        <div>De blog is {id}</div>
    )
}
export default OverzichtBlogs