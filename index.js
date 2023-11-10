import fs from "fs";

fs.writeFileSync("frase.txt", "Aula de LSWeb na sexta a tarde");

const conteudo = fs.readFileSync("frase.txt", {
  encoding: "utf-8",
});
console.log(conteudo);
