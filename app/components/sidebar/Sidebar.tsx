export default function Sidebar() {
  return (
    <>
      <div className="sidebar-adjust">
        <div className="main-icon">
          <img
            className="mainsidebar-icon"
            src="/assets/image/mainsidebaricon.png"
            alt="#"
            width={50}
            height={50}
          />
        </div>
        <div className="sidebar-icon">
          <img
            src="/assets/image/homeicon2.svg"
            alt="#"
            className="sidecar-other-icons"
            width={50}
            height={50}
          />
          <div className="addicon-border">
            <img
              className="sidecar-other-icons"
              src="/assets/image/addicon3.svg"
              alt="#"
              width={50}
              height={50}
            />
          </div>
          <img
            className="sidecar-other-icons"
            src="/assets/image/SelectedGift.svg"
            alt="#"
            width={50}
            height={50}
          />
          <img
            className="sidecar-other-icons"
            src="/assets/image/usericon2.svg"
            alt="#"
            width={50}
            height={50}
          />
          <img
            className="sidecar-other-icons"
            src="/assets/image/boxicon.svg"
            alt="#"
            width={50}
            height={50}
          />
        </div>
      </div>
    </>
  );
}
