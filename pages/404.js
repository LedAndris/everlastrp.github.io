import Link from 'next/link'
import styles from '../styles/Error.module.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <img src="https://beta.iodine.gg/gg80b.webp" width="1000px"></img>
                <Link href="/">
                <button className={styles.btn}>Go home!</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NotFound;