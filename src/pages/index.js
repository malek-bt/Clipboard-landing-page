import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Clipboard landing page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" alt="logo"></img>
      </header>
      <main className={styles.main}>
        <section className={styles.history_section}>
          <h2>A history of everything you copy</h2>
          <p>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <button className={styles.ios_btn}>Download for iOS </button>
          <button className={styles.mac_btn}>Download for Mac</button>
        </section>

        <section className={styles.track_section}>
          <h2>Keep track of your snippets</h2>
          <p>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>

          <div className={styles.track_div}>
           
              <img src="/image-computer.png" alt="computer image"></img>
            
            <div>
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>

              <h3>iCloud Sync</h3>
              <p>Instantly saves and syncs snippets across all your devices.</p>

              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.access_section}>
          <h2>Access Clipboard anywhere</h2>
          <p>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img src="/image-devices.png" alt="devices image"></img>
        </section>

        <section className={styles.supercharge_section}>
          <h2>Supercharge your workflow</h2>
          <p>We've got the tools to boost your productivity.</p>
          <div className={styles.workflow}>
            <div>
              <img src="icon-blacklist.svg" alt="blacklist icon"></img>
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>

            <div>
              <img src="icon-text.svg" alt="text icon"></img>
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            <div>
              <img src="icon-preview.svg" alt="preview icon"></img>
              <h3>Sneak preview</h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>

          <div className={styles.companies}>
            <img src="logo-google.png" alt="google icon"></img>
            <img src="logo-ibm.png" alt="ibm icon"></img>
            <img src="logo-microsoft.png" alt="microsoft icon"></img>
            <img src="logo-hp.png" alt="hp icon"></img>
            <img src="logo-vector-graphics.png" alt="vector graphics icon"></img>
          </div>
        </section>

        <section className={styles.clip_section}>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          <button className={styles.ios_btn}>Download for iOS </button>
          <button className={styles.mac_btn}>Download for Mac</button>
        </section>
      </main>
      <footer className={styles.footer}>
        <img src="/logo.svg" alt="logo"></img>
        <div className={styles.links}>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Press Kit</p>
          <p>Install Guid</p>
        </div>

        <div className={styles.social_media}>
          <img src="/icon-facebook.svg" alt="facebook icon"></img>
          <img src="/icon-twitter.svg" alt="twitter icon"></img>
          <img src="/icon-instagram.svg" alt="instragram icon"></img>
        </div>
      </footer>
    </>
  );
}
