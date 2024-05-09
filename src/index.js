import { server } from "./server/server.js";

server.listen(process.env.PORT || '3333', () => {
  console.log(`App rodando na porta http://localhost:${process.env.PORT}`);
});
