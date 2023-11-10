import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function UserDetails() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="mainmargin-div">
          <Header />
          <div className="center-flex-adjust">
            <div className="center-paragraph">
              <a href="/" className="hover-list0">
                {" "}
                Setup
              </a>
              <a href="/userdetails" className="hover-list2">
                {" "}
                User details
              </a>
              <a href="/tasks" className="hover-list0">
                Tasks
              </a>
              <a href="/prizes" className="hover-list0">
                Prizes
              </a>
              <a href="/assets" className="hover-list0">
                Assets
              </a>
              <p className="hover-list0">Post entry</p>
            </div>

            <div className="btn-flex">
              <button className="btn-cancel" type="button">
                Cancel
              </button>
              <button className="btn-save" type="button">
                Save
              </button>
            </div>
          </div>
          {/* card section */}
          <div className="first-two-card-flex">
            <div className="main-card">
              <div>
                <p className="age-tittle-adjust">Minimum age (Optional)</p>
                <input type="text" className="age-input" placeholder="16" />
              </div>
              <div className="age-chekbox">
                <input className="age-chekbox-input" type="checkbox" />
                <p className="chekbox-text">Require login before actions</p>
              </div>
            </div>
            <div className="second-card">
              <div className="text-margin">
                <p className="second-card-text"> Select required fields</p>
              </div>
              <div className="first-input-line-flex">
                <input
                  className="first-input"
                  type="text"
                  placeholder="Full name"
                />
                <input
                  className="second-input"
                  type="text"
                  placeholder="Crypto Wallet address"
                />
                <input className="third-input" type="text" placeholder="Age" />
              </div>
              <div className="second-input-line-flex">
                <input
                  type="text"
                  className="second-line-first-input"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="second-line-second-input"
                  placeholder="Country "
                />
                <input
                  type="text"
                  className="second-line-third-input"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
          <div className="third-forth-card-flex">
            <div className="third-card">
              <div>
                <p className="third-card-text">Users login options</p>
              </div>
              <div className="chekbox-flex">
                <div className="two-input-flex">
                  <input type="checkbox" className="platform-checkbox" />
                  <p className="platform-paragraph">Through the platform</p>
                </div>
                <div className="twitter-checkbox-flex">
                  <input type="checkbox" className="platform-checkbox" />
                  <p className="platform-paragraph">With Twitter</p>
                </div>
              </div>
            </div>
            <div className="second-card">
              <div className="text-margin">
                <p className="second-card-text"> Select optional fields</p>
              </div>
              <div className="first-input-line-flex">
                <input
                  className="first-input"
                  type="text"
                  placeholder="Full name"
                />
                <input
                  className="second-input"
                  type="text"
                  placeholder="Crypto Wallet address"
                />
                <input className="third-input" type="text" placeholder="Age" />
              </div>
              <div className="second-input-line-flex">
                <input
                  type="text"
                  className="second-line-first-input"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="second-line-second-input"
                  placeholder="Country "
                />
                <input
                  type="text"
                  className="second-line-third-input"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
