"use client";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import AddPrize from "./AddPrize";

export default function Prizes() {
  return (
    <>
      <div className="flex">
        <Sidebar />

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
              <a href="/tasks" className="hover-list">
                Tasks
              </a>
              <a href="/prizes" className="hover-list4">
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
          <div>
            <p className="prize-text">Tasks</p>
          </div>

          <div>
            <button
              className="addprize-btn"
              onClick={() => {
                const addPrizeModal = document.getElementById("prize-modal");
                if (addPrizeModal?.classList.contains("hide")) {
                  addPrizeModal.classList.remove("hide");
                  addPrizeModal?.classList.add("show");
                } else {
                  addPrizeModal?.classList.remove("show");
                  addPrizeModal?.classList.add("hide");
                }
              }}
            >
              Add prize
            </button>
              <AddPrize />
          </div>
        </div>
      </div>
    </>
  );
}
