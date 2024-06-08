import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../utils/logger";
import { enrollNewNodeService, isNodeAvailableService } from "../services/osquery.service";
import generateToken from "../utils/generate_token";
import newNode from "../interfaces/osquery.interface";

const log: RequestHandler = async (req, res) => {
  try {
    isNodeAvailableService({node_id:req.body.node_key}).then((node:newNode | null) => {
      if(node && req.body.log_type=="result")
      {
        logger.info("Got data for node: " + node.os_name + " " + node.host_identifier) 
      }
    })
    // if(req.body.log_type=="result")
    // {
    //   console.log(req.body)
    // }
    return res
      .status(StatusCodes.OK)
      .send();
  } catch (err: any) {
    logger.error(err);
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Error logging the data", err: err.message });
  }
};

const config: RequestHandler = async (req, res) => {
    try {
      let config = {
        "schedule": {
            "bpf_processes": {
                "query": "SELECT * FROM bpf_process_events;",
                "interval": 2
            }
        }
      }
    logger.info("Asked for configuration");
      return res
        .status(StatusCodes.OK)
        .send(config);
    } catch (err: any) {
      logger.error(err);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Error sending config", err: err.message });
    }
};

const enroll: RequestHandler = async (req, res) => {
try {
  let node_id = generateToken(32)
  enrollNewNodeService(req.body.host_identifier, req.body.host_details.os_version.name, node_id)
  let enroll = {
    "node_key": node_id,
    "node_invalid": true
  }
    logger.info("New Node enrolled");
    return res
    .status(StatusCodes.OK)
    .send(enroll);
} catch (err: any) {
    logger.error(err);
    return res
    .status(StatusCodes.BAD_REQUEST)
    .json({ msg: "Error while enrolling", err: err.message });
}
};

const osquery = { log, config, enroll };
export default osquery;
