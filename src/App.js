import { useState } from "react";
import Folder from "./components/Folder";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { ADDFOLDER, addFolder } from "./store/action";

export default function App() {
  // const [explorerData, setExplorerData] = useState(explorer);
  const explorerData = useSelector((state) => state);
  const dispatch = useDispatch();

  // const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    dispatch(addFolder({explorerData,folderId,item,isFolder}));
    // const finalTree = insertNode(explorerData, folderId, item, isFolder);
    // setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// fix connect script in latest video
