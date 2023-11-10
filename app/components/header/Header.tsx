export default function Header() {
  return (
    <>
      <div className="header-main-div">
        <div className="header-size">
          <p className="web-tittle"> Create your treasure hunt </p>
        </div>
        <div className="main-header">
          <div className="search-container">
            <span className="search-icon"><img src="/assets/image/searchicon.svg" alt="#" /></span>
            <input className="input-resize" type="text" placeholder="Search" />
          </div>

          <div className="image-adjust">
            <img
              src="/assets/image/settings3.png"
              alt="#"
              className="setting-img"
            />
            <img
              className="setting-img"
              src="/assets/image/bell10.png"
              alt="#"
            />

            <img
              className="setting-img2"
              src="/assets/image/profileicon.svg"
              alt="#"
            />
          </div>
        </div>
      </div>
      <img className="vector-image" src="/assets/image/Vector 67.png" alt="#" />
    </>
  );
}
