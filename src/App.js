import { useState } from "react";
import Folder from "./components/Folder";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ADDFOLDER, addFolder } from "./store/action";
// 
export default function App() {
  const explorerData = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleInsertNode = (folderId, item, isFolder) => {
    dispatch(addFolder({explorerData,folderId,item,isFolder}));
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

