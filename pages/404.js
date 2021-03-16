import Link from 'next/link'
import styles from '../styles/error.module.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <div>
                <img src="https://beta.iodine.gg/gg80b.webp" width="1000px"></img>
                <button className={styles.btn}><Link href="/">Go home!</Link></button>
            </div>
        </div>
    );
}
 
export default NotFound;