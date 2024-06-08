import { Schema, model } from "mongoose";
import collectionNames from "../constants/collectionNames";
import newNode from "../interfaces/osquery.interface";

//* Basic schema for ticket

const nodeSchema = new Schema(
  {
    host_identifier: { type: String, required: true },
    os_name: { type: String, required: true },
    node_id: { type: String, required: true },
  },
  {
    collection: collectionNames.osquery,
  }
);

const NodeModel = model<newNode>(collectionNames.osquery, nodeSchema);
export default NodeModel;
