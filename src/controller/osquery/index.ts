import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "../../utils/logger";

const log: RequestHandler = async (req, res) => {
  try {
    if(req.body.log_type=="result")
    {
      console.log(req.body) 
    }
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
                "interval": 15
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
    let enroll = {
      "node_key": "yoegshjadhav78728162781",
      "node_invalid": true
    }
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
