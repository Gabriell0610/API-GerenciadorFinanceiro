import { server } from "./server/server.js";

server.listen(process.env.PORT || 3333, () => {
  console.log(`App rodando na porta ${process.env.PORT || 3333}`);
});
