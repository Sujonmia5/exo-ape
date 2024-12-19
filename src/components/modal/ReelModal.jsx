import { useContext } from "react";
import { UpdateFollower } from "react-mouse-follower";
import { AppContext } from "../../context/context";

const ReelModal = () => {
  const { setIsOpen } = useContext(AppContext);
  return (
    <div className="w-screen h-[100vh] bg-black fixed inset-0 top-0 left-0 z-[9999] overflow-y-hidden">
      <UpdateFollower
        className="sample"
        mouseOptions={{
          zIndex: 99999,
          backgroundColor: "black",
          scale: 8,

          backgroundElement: (
            <div style={{ width: "100%" }}>
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <p className="text-[2px] text-white font-Lausanne font-medium">
                  Close
                </p>
              </div>
            </div>
          ),
        }}
      >
        <div className="w-full h-full">
          <video
            autoPlay
            muted
            loop
            //   controls
            onClick={() => setIsOpen(false)}
            className="object-cover w-11/12 mx-auto "
            src="https://res.cloudinary.com/dwvt17wew/video/upload/v1733895164/9e976370_uprsxj.mp4"
          ></video>
        </div>
      </UpdateFollower>
    </div>
  );
};

export default ReelModal;
