// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="container">
        <main>
            <div className="main-content" id="content1">
                <div>
                    <h2>Learn to code by
                        <br/> Watching others</h2>
                    <p id="para">See how experienced developers solve 
                        problems in real-time.
                        <br/>
                        watching scripted tutorials is great, but
                        understanding how developers think is invaluable
                    </p>
                </div>

            </div>
            <div className="main-content">
                <div className="try-it">
                    <p><span id="free"> Try it free 7 days</span> then $20/mo. thereafter</p>
                </div>
                <form action="">
                    <input type="text" name="first-name" id="" placeholder="First Name"/>
                    <input type="text" name="first-name" id="" placeholder="Last Name"/>
                    <input type="email" name="email" id="" placeholder="Email Address"/>
                    <input type="password" name="password" id="" placeholder="Password"/>
                    <input type="button" value="CLAIM YOUR FREE TRIAL" id="trial"/>
                    <div className="little">
                        <small>By clicking the button, you are agreeing to our </small>
                        <small><span id="terms"> Terms and Services</span></small>
                    </div>
                </form>
            </div>
        </main>
    </div>
    </div>
  );
}

export default App;
