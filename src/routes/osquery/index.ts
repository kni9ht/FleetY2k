import { Router } from "express";
import  osquery from "../../controller/osquery";
import { verifyBodyRequest } from "../../middlewares/verifyRequest";
import { verifyToken } from "../../middlewares/auth.jwt";

const osqueryRoute = Router();

osqueryRoute.post("/log", verifyBodyRequest, osquery.log);
osqueryRoute.post("/config", verifyBodyRequest, osquery.config);
osqueryRoute.post("/enroll", verifyBodyRequest, osquery.enroll);


export default osqueryRoute;