export default function AddPrize() {
  return (
    <>
      <div className="main-addprize-card hide" id="prize-modal">
        <div className="flex-image-card">
          <div>
            <div className="grid">
              <label className="small-text-addimage" htmlFor="prizename">
                Prize name
              </label>
              <input
                className="prizename-input"
                type="text"
                placeholder="iPhone 12 Pro"
              />
            </div>
            <div className="grid">
              <label className="small-text-addimage" htmlFor="prizename">
                How manywinners will win the prize
              </label>
              <input className="prizename-input" type="text" placeholder="10" />
            </div>
            <div className="grid">
              <label className="small-text-addimage" htmlFor="prizename">
                Prize value in USD per winner
              </label>
              <input
                className="prizename-input"
                type="text"
                placeholder="$999"
              />
            </div>
            <div className="grid">
              <label className="small-text-addimage" htmlFor="prizename">
                Treasury hunt difficulty level
              </label>
              <input
                className="prizename-input"
                type="text"
                placeholder="Treasury difficulty "
              />
            </div>
          </div>
          <div>
            <p className="addimage-text">Add prize image</p>
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
    </>
  );
}
