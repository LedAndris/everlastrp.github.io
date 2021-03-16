import Link from 'next/link'
import styles from '../styles/Error.module.css'
import {btn} from '../styles/Global.module.css'

const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <img src="https://beta.iodine.gg/gg80b.webp" width="1000px"></img>
                <Link href="/" target="_blank">
                <button className={btn}>Go home!</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;