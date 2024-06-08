import authRoute from "./auth";
import osqueryRoute from "./osquery";
import ticketRoute from "./ticket";

export default function setupRoute(app: any) {
  app.use("/ticket", ticketRoute);
  app.use("/auth", authRoute);
  app.use("/osquery", osqueryRoute);
}
