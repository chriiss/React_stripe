import { Link } from "react-router-dom"
import db from "../../data/db.json"

const Success = () => {
    const dbSuccess = db.success
    return(
        <article className="bloc">
            <h2>{dbSuccess.title}</h2>
            <Link to="/"><button type="button" className="bloc_link">{dbSuccess.cta}</button></Link>
        </article>
    )
}

export default Success;