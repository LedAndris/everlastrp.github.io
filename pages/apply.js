import styles from '../styles/apply.module.css'

function sendMessage() {
  var request = new XMLHttpRequest();
  request.open("POST", "process.env.webhook");

  request.setRequestHeader('Content-type', 'application/json');

  var params = {
    username: "Test",
    avatar_url: "",
    content: "TEST"
  }

  request.send(JSON.stringify(params));
}

const application = () => {
  return (
    <div className={styles.div}>
    <form>
      <label htmlFor="name">Email address</label>
      <input className={styles.inputtext} id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">What is your discord name and id (TheHamy#2799)</label>
      <input className={styles.inputtext} id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">When were you born?</label>
      <input className={styles.inputtext}  id="name" name="name" type="date" autoComplete="name" required />

      <label htmlFor="name">Describe yourself with as much detail as possible.</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">Do you have any roleplay experience?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">In your own words, what is roleplay?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">Why do you wish to join EverlastRP?</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">What department do you wish to join? </label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />

      <label htmlFor="name">Please give a detailed description of a roleplay scene you could bring</label>
      <input className={styles.inputtext}  id="name" name="name" type="text" autoComplete="name" required />
      <button onclick="sendMessage()">Apply!</button>
    </form>
    </div>
  )
}
export default application;