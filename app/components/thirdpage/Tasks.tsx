import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

export default function Tasks() {
  return (
    <>
      <div className="Tasks-main">
        <Sidebar />
        <div className="mainmargin-div">
          <Header />
          <div className="center-flex-adjust">
            <div className="center-paragraph">
              <a href="/" className="hover-list0">
                Setup
              </a>
              <a href="/userdetails" className="hover-list0">
                User details
              </a>
              <a href="/tasks" className="hover-list3">
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

          {/* Task section */}

          <div className="task-text">UserDetails</div>
          <div className="twocard-flex">
            <div className="twitter-card">
              <div className="twitter-card-header">
                <p className="twitter-text"> Follow on Twitter</p>
                <div className="daily-task-flex">
                  <div className="daily-checkbox-flex">
                    <p className="checkbox-text">Daily task</p>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="daily-task-input" />
                      <label htmlFor="daily-task-input"></label>
                    </div>
                  </div>
                  <button className="remove-button">Remove</button>
                </div>
              </div>
              <div className="link-input-flex">
                {/* <span className="link-icon">
                  <img src="/assets/image/linkicon.svg" alt="#" />
                </span> */}
                <input
                  className="link-input"
                  type="text"
                  placeholder="Add redirect link"
                />
                <input
                  className="link-input"
                  type="text"
                  placeholder="Number of entries"
                />
              </div>
              <div className="description-margin">
                <input
                  className="description-input"
                  type="text"
                  placeholder="Add task description (Optional)"
                />
              </div>
            </div>
            {/* tik tok card */}
            <div className="twitter-card">
              <div className="twitter-card-header">
                <p className="twitter-text"> Follow on TikTok</p>
                <div className="daily-task-flex">
                  <div className="daily-checkbox-flex">
                    <p className="checkbox-text">Daily task</p>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="daily-task-input" />
                      <label htmlFor="daily-task-input"></label>
                    </div>
                  </div>
                  <button className="remove-button">Add</button>
                </div>
              </div>
              <div className="link-input-flex">
                <input
                  className="link-input"
                  type="text"
                  placeholder="Add redirect link"
                />
                <input
                  className="link-input"
                  type="text"
                  placeholder="Number of entries"
                />
              </div>
              <div className="description-margin">
                <input
                  className="description-input"
                  type="text"
                  placeholder="Add task description (Optional)"
                />
              </div>
            </div>
          </div>

          {/* Retweet card */}

          <div className="twocard-flex">
            <div className="twitter-card">
              <div className="twitter-card-header">
                <p className="twitter-text">Retweet this Twitter post</p>
                <div className="daily-task-flex">
                  <div className="daily-checkbox-flex">
                    <p className="checkbox-text">Daily task</p>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="daily-task-input" />
                      <label htmlFor="daily-task-input"></label>
                    </div>
                  </div>
                  <button className="remove-button">Add</button>
                </div>
              </div>
              <div className="link-input-flex">
                <input
                  className="link-input"
                  type="text"
                  placeholder="Add redirect link"
                />
                <input
                  className="link-input"
                  type="text"
                  placeholder="Number of entries"
                />
              </div>
              <div className="description-margin">
                <input
                  className="description-input"
                  type="text"
                  placeholder="Add task description (Optional)"
                />
              </div>
            </div>
            {/* facebook card */}
            <div className="twitter-card">
              <div className="twitter-card-header">
                <p className="twitter-text">Share this page on Facebook</p>
                <div className="daily-task-flex">
                  <div className="daily-checkbox-flex">
                    <p className="checkbox-text">Daily task</p>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="daily-task-input" />
                      <label htmlFor="daily-task-input"></label>
                    </div>
                  </div>
                  <button className="remove-button">Add</button>
                </div>
              </div>
              <div className="link-input-flex">
                <input
                  className="link-input"
                  type="text"
                  placeholder="Add redirect link"
                />
                <input
                  className="link-input"
                  type="text"
                  placeholder="Number of entries"
                />
              </div>
              <div className="description-margin">
                <input
                  className="description-input"
                  type="text"
                  placeholder="Add task description (Optional)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
