import server from "./server";
import 'dotenv/config'

server.listen(3000, () => {console.log("listening to port 3000 from notice board")})