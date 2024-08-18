import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setShowChangePassword } from "../utils/uiSlice";
import handlePwChange from "../utils/handlePwChange";
const ChangePassword = () => {
  const dispatch = useDispatch();
  const usrname = useRef(null);
  const oldPw = useRef(null);
  const newPw = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const handleCancel = () => {
    dispatch(setShowChangePassword());
  };
  const handleDone = async() => {
    const username = usrname.current.value;
    const oldPassword = oldPw.current.value;
    const newPassword = newPw.current.value;

    const success = await handlePwChange(
      username,
      oldPassword,
      newPassword,
      setErrMsg
    );
    if (success) {
      dispatch(setShowChangePassword());
    }
  };

  return (
    <div className=" w-[24%] h-[32%] absolute top-[25%] left-[44%] bg-gray-500 bg-opacity-95 rounded-lg z-10 p-4 flex justify-center items-start">
      <div className=" w-[80%] flex flex-col justify-center items-center mt-4">
        <input
          ref={usrname}
          className="p-2 m-2 rounded-md"
          type="text"
          placeholder="enter username"
        ></input>
        <input
          ref={oldPw}
          className="p-2 m-2 rounded-md"
          type="password"
          placeholder="enter old password"
        ></input>
        <input
          ref={newPw}
          className="p-2 m-2 rounded-md"
          type="password"
          placeholder="enter new password"
        ></input>
        <span className="mt-2 px-2 font-bold text-lg bg-red-600 text-white rounded-md">
          {errMsg}
        </span>
        <div className=" w-[70%]  flex justify-between mt-4">
          <button
            className="bg-red-500 px-4 py-2 font-bold text-white rounded-lg"
            onClick={() => {
              handleCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 px-4 py-2 font-bold text-white rounded-lg"
            onClick={() => {
              handleDone();
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
