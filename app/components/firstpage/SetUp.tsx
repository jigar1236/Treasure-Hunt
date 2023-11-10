import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function SetUp() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="mainmargin-div">
          <Header />
          <div className="center-flex-adjust">
            <div className="center-paragraph1">
              <a href="/" className="hover-list1">
         
                Setup
              </a>
              <a href="/userdetails" className="hover-list0">
           
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
          {/* treasure hunt search section */}
          <div className="treasure-tittle">
            <div className="tittle-menag">
              <label className="tittle-font"> Treasure Hunt Tittle</label>
              <input className="tittle-input" type="text" />
            </div>
            <div className="tittle-menag">
              <label className="start-font"> Start</label>
              <input className="date-input-adjust" type="date" />
            </div>
            <div className="tittle-menag">
              <label className="start-font"> End</label>
              <input className="end-input-adjust" type="date" />
            </div>
            <div className="tittle-menag">
              <label className="start-font"> Timezone</label>
              <input className="date-input-adjust" type="time" />
            </div>
          </div>

          {/* Footer section */}
          <div className="main-footer-terms">
            <div className="logo-terms">
              <img
                className="info-image"
                src="/assets/image/info.png"
                alt="#"
              />
              <p> Terms and Conditions </p>
            </div>
            <div className="last-paragraph">
              <p>
                CryptoGrowth automatically generates Terms & Conditions for you.
              </p>
              <p>
                Click Edit Fields to customise your details or add your own
                fully custom Terms & Conditions below.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
