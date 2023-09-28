import "./styles.scss";
// import styled from "styled-components";
import { useState } from "react";
import skumoleShack from "../skumoleShack.jpg";
import elSwankoCasa from "../ElSwankoCasa.png";
import iceCreamFactory from "../IcecreamFactory.png";
import washingtonBeach from "../WashingtonBeach.png";
import vercettiEstate from "../VercettiEstate.png";

export default function App() {
  const [tokenPos, setTokenPos] = useState({
    player1: { xPos: 70, yPos: 370 },
    player2: { xPos: 50, yPos: 390 },
    player3: { xPos: 30, yPos: 410 },
    player4: { xPos: 10, yPos: 430 }
  });
  const [playerDetails, setPlayerDetails] = useState([
    { global: "No use for this, 1-indexing will be easier" },
    { pos: 0, assets: [] },
    { pos: 0, assets: [] },
    { pos: 0, assets: [] },
    { pos: 0, assets: [] }
  ]);
  const [currentTurn, setCurrentTurn] = useState(0);

  const handleTokenPos = async (playerNumber, diceVal) => {
    const limits = { top: -480, bottom: 350, right: 10, left: -820 };
    console.log(tokenPos[`player${playerNumber}`], playerNumber);
    for (let i = 0; i < diceVal; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          let playerTokenPosition = tokenPos[`player${playerNumber}`];
          if (playerTokenPosition.xPos <= limits.left) {
            if (playerTokenPosition.yPos <= limits.top) {
              playerTokenPosition.xPos += 83;
            } else {
              playerTokenPosition.yPos -= 83;
            }
          } else if (playerTokenPosition.xPos >= limits.right) {
            if (playerTokenPosition.yPos < limits.bottom) {
              playerTokenPosition.yPos += 83;
            } else {
              playerTokenPosition.xPos -= 83;
            }
          } else {
            if (playerTokenPosition.yPos <= -480) {
              playerTokenPosition.xPos += 83;
            } else {
              playerTokenPosition.xPos -= 83;
            }
          }
          setTokenPos({
            ...tokenPos,
            [`player${playerNumber}`]: playerTokenPosition
          });

          resolve();
        }, 100);
      });
    }

    let temp = playerDetails;
    temp[playerNumber] = { pos: (temp[playerNumber].pos + diceVal) % 40 };
    setPlayerDetails(temp);
  };

  console.log("playerDetails", playerDetails);

  const rollDice = (playerNumber) => {
    handleTokenPos(playerNumber + 1, Math.floor(Math.random() * 6) + 1);
    setCurrentTurn((currentTurn + 1) % 4);
  };

  // console.log("tokenPos", tokenPos);

  return (
    <div>
      <div className="container" style={{ height: "1000px", width: "1000px" }}>
        <div className="a"></div>
        <div className="b"></div>
        <div className="c"></div>
        <div className="d"></div>
        <div className="e"></div>
        <div className="f"></div>
        <div className="g"></div>
        <div className="h">
          <img
            src={iceCreamFactory}
            width="100%"
            height="100%"
            alt="iceCreamFactory"
          />
        </div>
        <div className="i"></div>
        <div className="j"></div>
        <div className="k"></div>
        <div className="l"></div>
        <div className="m"></div>
        <div className="n"></div>
        <div className="o">
          <img
            src={elSwankoCasa}
            width="100%"
            height="100%"
            alt="elSwankoCasa"
          />
        </div>
        <div className="p"></div>
        <div className="q"></div>
        <div className="r"></div>

        <div className="s"></div>
        <div className="t">
          <img
            src={vercettiEstate}
            width="100%"
            height="100%"
            alt="vercettiEstate"
          />
        </div>
        <div className="u"></div>
        <div className="v">
          <img
            src={skumoleShack}
            width="100%"
            height="100%"
            alt="skumoleShack"
          />
        </div>
        <div className="w"></div>
        <div className="x"></div>
        <div className="y"></div>
        <div className="z"></div>
        <div className="aa"></div>

        <div className="ab"></div>
        <div className="ac"></div>
        <div className="ad">
          <img
            src={washingtonBeach}
            width="100%"
            height="100%"
            alt="washingtonBeach"
          />
        </div>
        <div className="ae"> </div>
        <div className="af"></div>
        <div className="ag"></div>
        <div className="ah"></div>
        <div className="ai"></div>
        <div className="aj"></div>
        <div className="ak"></div>
        <div className="al"></div>
        <div className="am"></div>
        <div className="an"></div>
      </div>

      <div className="token"></div>

      <div className="token">
        <div
          className="player1Token"
          style={{
            transform: `translate(${tokenPos.player1.xPos}px,${tokenPos.player1.yPos}px)`
          }}
          onClick={() => handleTokenPos(1)}
        >
          {/* {tokenPos.player1.xPos}px, {tokenPos.player1.yPos}px */}
        </div>
        <div
          className="player2Token"
          onClick={() => handleTokenPos(2)}
          style={{
            transform: `translate(${tokenPos.player2.xPos}px,${tokenPos.player2.yPos}px)`
          }}
          pos={{ x: tokenPos.player2.xPos, y: tokenPos.player2.yPos }}
        ></div>
        <div
          className="player3Token"
          onClick={() => handleTokenPos(3)}
          style={{
            transform: `translate(${tokenPos.player3.xPos}px,${tokenPos.player3.yPos}px)`
          }}
          pos={{ x: tokenPos.player3.xPos, y: tokenPos.player3.yPos }}
        ></div>
        <div
          className="player4Token"
          onClick={() => handleTokenPos(4)}
          style={{
            transform: `translate(${tokenPos.player4.xPos}px,${tokenPos.player4.yPos}px)`
          }}
          pos={{ x: tokenPos.player4.xPos, y: tokenPos.player4.yPos }}
        ></div>
      </div>

      <button onClick={() => rollDice(currentTurn)}>Roll</button>
    </div>
  );
}

// Brown Properties (Mediterranean Avenue and Baltic Avenue):
// skumole shack

// Potential Asset: Smaller motels or modest businesses.
// Light Blue Properties (Oriental Avenue, Vermont Avenue, and Connecticut Avenue):
//

// Potential Asset: Mid-level businesses, small restaurants, or stores.
// Pink Properties (St. Charles Place, States Avenue, and Virginia Avenue):

// Potential Asset: Upscale stores, boutiques, and restaurants in prime areas.
// Orange Properties (St. James Place, Tennessee Avenue, and New York Avenue):

// Potential Asset: Medium-sized hotels, downtown businesses.
// Red Properties (Kentucky Avenue, Indiana Avenue, and Illinois Avenue):

// Potential Asset: Prominent downtown buildings and businesses.
// Yellow Properties (Atlantic Avenue, Ventnor Avenue, and Marvin Gardens):

// Potential Asset: Mid-to-high-end businesses, hotels, and properties.
// Green Properties (Pacific Avenue, North Carolina Avenue, and Pennsylvania Avenue):

// Potential Asset: Top-tier businesses, high-end hotels, exclusive clubs, and properties.
// Dark Blue Properties (Park Place and Boardwalk):

// Potential Asset: The most luxurious and high-value properties, including Tommy Vercetti's mansion and exclusive clubs.
// These associations provide a fun way to connect Monopoly properties with iconic GTA Vice City landmarks and assets. It could add an interesting twist to a custom Monopoly game set in the Vice City universe.
