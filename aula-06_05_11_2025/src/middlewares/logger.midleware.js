import { v4 as uuid4 } from 'uuid';

import { fileURLToPath } from 'url';

//Lidar com caminho de pastas e arquivos. 
import path, { dirname } from 'path';

//Lidar com arquivos de forma assícrona. 
import { existsSync } from 'fs';
//Garanta que conseguimos capturar o nome da arquivo e a pasta no diretório. 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Lib para formatar datas. 
import { format } from "date-fns";

import fsPromises from 'fs/promises';

//Criar Ou Atualizar um arquivo de logs.
const logEvents = async (message, logFileName) => {
  //Cria a estrutura de Data.
  //2025-11-04 19:55:33.
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH:mm:ss")}`;

  const finalLog = `${dateTime}\t${uuid4()}\t${message}\n`;
  try {

    const logsDir = path.join(__dirname, "..", "logs");
    //Verifica se a pasta logs existe.
    if (!existsSync(logsDir)) {
      await fsPromises.mkdir(logsDir);
    }
    //Cria ai um arquivo dentro da pasta logs, com nome que vier quando a função for chamada e taca o 
    // conteúdo que estruturamos em FINALLOG.
    await fsPromises.appendFile(path.join(logsDir, logFileName), finalLog);
  } catch (error) {
    log("Erro na função LogEvents ", error);

  }
};

//Cria um Middleware. 
export const logger = (req, res, next) => {

  logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, "req.log");
  next();
}