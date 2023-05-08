export default function Post(props) {
  return (
    <>
      {" "}
      <li class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.usrURL} alt={props.usr} />
            {props.usr}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imgURL} alt={props.dsc} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" alt="respondeai" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e{" "}
              <strong>outras {(Math.random() * (1000 - 2) + 2).toFixed(0)} pessoas</strong>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}
