import { explorer } from "./index";
import { ADDFOLDER } from "./action";

export const reducer = (state = explorer, action) => {
  console.log("updated state", state);
  switch (action.type) {
    case ADDFOLDER:
      const { explorerData, folderId, item, isFolder } = action.payload;
      const insertNode = function (explorerData,folderId,item,isFolder) {
        if (explorerData.id === folderId && explorerData.isFolder) {
          explorerData.items.unshift({
            id: new Date().getTime(),
            name: item,
            isFolder: isFolder,
            items: [],
          });

          return explorerData;
        }

        let latestNode = [];
        latestNode = explorerData.items.map((ob) => {
          return insertNode(ob, folderId, item, isFolder);
        });

        
        return { ...explorerData, items: latestNode };
      };
      // console.log(insertNode())
      const data = insertNode(explorerData, folderId, item, isFolder)
      console.log("data",data);
      return { ...data };

    default:
      return { ...state };
  }
};
