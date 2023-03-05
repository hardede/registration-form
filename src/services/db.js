import { createRxDatabase } from "rxdb";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import MessageSchema from "./SchemasRxDB/MessageSchemaRx";
import ChatSchema from "./SchemasRxDB/ChatSchemaRx";

import { addRxPlugin } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
addRxPlugin(RxDBDevModePlugin);

class DB {
  static initialized = false;
  static rx;

  static createInstance = async () => {
    if (!DB.initialized) {
      DB.initialized = true;

      DB.rx = await createRxDatabase({
        name: "chatdb",
        storage: getRxStorageDexie(),
      });

      await DB.rx.addCollections({
        chat: {
          schema: ChatSchema,
        },
        message: {
          schema: MessageSchema,
        },
      });
    }
  };
}

export default DB;
