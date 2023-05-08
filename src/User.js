import { useState } from "react";

export default function User() {
  let [nome, setNome] = useState("catanacomics");
  let [foto, setFoto] = useState("assets/img/catanacomics.svg");
  return (
    <>
      <div class="usuario">
        <img
          src={foto}
          alt="imagem de perfil"
          onClick={() => {
            let entrada = prompt("URL da nova imagem:");
            if(entrada)setFoto(entrada);
          }}
        />
        <div class="texto">
          <span>
            <strong>{nome}</strong>
            <ion-icon
              name="pencil"
              onClick={() => {
                let entrada = prompt("Edite seu nome:");
                if (entrada) setNome(entrada);
              }}
            ></ion-icon>
          </span>
        </div>
      </div>
    </>
  );
}
