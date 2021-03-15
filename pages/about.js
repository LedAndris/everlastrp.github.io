import styles from '../styles/About.module.css'

const About = () => {
    return (
        <div>
            
        <h1>Our team:</h1>
        <p>Our team is composed of multiple essential people, these include:</p>
            <div className={styles.wrap}>
                <div className={styles.image1}>
                <h1>Siege</h1>
                <img src="https://cdn.discordapp.com/avatars/695800069701632071/3ee62c344245752793e2bee3baea197a.png"></img>
                <p>Siege is one of our Owners and is an essential part of the team and helped us get where we are today!</p>
                </div>
                <div  className={styles.image2}>
                <h1>Faded</h1>
                <img src="https://cdn.discordapp.com/avatars/535637960918302750/a_e581570c3ac60bf8e2faceb2d5959f01.png"></img>
                <p>Faded is also one of the Owners and keeps everyone in line.</p>
                </div>
            </div>
        </div>
    );
}
 
export default About;