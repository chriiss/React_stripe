import { Link } from "react-router-dom"
import db from "../../data/db.json"

const Cancel = () => {
    const dbCancel = db.cancel
    return(
        <article className="bloc">
            <h2>{dbCancel.title}</h2>
            <Link to="/"><button type="button" className="bloc_link">{dbCancel.cta}</button></Link>
        </article>
    )
}

export default Cancel;