import newNode from "../interfaces/osquery.interface";
import NodeModel from "../models/osquery.model";
import logger from "../utils/logger";

export async function enrollNewNodeService(host_identifier: string, os_name: string, node_id: string) {
    try {
      const node = <newNode>{
        host_identifier: host_identifier,
        os_name: os_name,
        node_id: node_id
      };
      return await NodeModel.create(node);
    } catch (error: any) {
      logger.error(error);
      throw Error(error);
    }
}

export async function isNodeAvailableService(query: any) {
  try {
    return await NodeModel.findOne(query);
  } catch (err: any) {
    logger.error(err);
    throw err;
  }
}