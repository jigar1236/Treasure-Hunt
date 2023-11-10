import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function Assets() {
  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="mainmargin-div">
          <Header />
          <div className="center-flex-adjust">
            <div className="center-paragraph4">
              <a href="/" className="hover-list0">
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
              <a href="/assets" className="hover-list5">
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
          <div className="flex">
            <div>
              <div className="grid">
                <label className="text-bold" htmlFor="company">
                  Company Name
                </label>
                <input
                  className="companyname-input"
                  type="text"
                  placeholder="Company"
                />
              </div>
              <div className="grid">
                <label className="text-bold" htmlFor="company">
                  Asset format
                </label>
                <input
                  className="companyname-input"
                  type="text"
                  placeholder="Image"
                />
              </div>
              <div className="grid">
                <label className="text-bold" htmlFor="company">
                  Price point
                </label>
                <input
                  className="companyname-input"
                  type="text"
                  placeholder="$1000"
                />
              </div>
            </div>
            <div>
              <div>
                <p className="advertising-image">Add advertising image/ link</p>
                <div className="image-card">
                  <div className="plusicon-set">
                    <img
                      className="plusicon"
                      src="/assets/image/plusicon.svg"
                      alt="#"
                      width={50}
                      height={50}
                    />
                  </div>
                  <img src="/assets/image/biggiftbox.svg" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
