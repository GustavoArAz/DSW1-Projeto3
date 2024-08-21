function MainPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <h5>Jogos com o maior número de jogadores</h5>
            <table className="table1">
              <tbody>
                <tr>
                  <th>Destiny 2</th>
                  <th>350 grupos</th>
                </tr>
                <tr>
                  <th>Helldivers 2</th>
                  <th>245 grupos</th>
                </tr>
                <tr>
                  <th>Diablo IV</th>
                  <th>193 grupos</th>
                </tr>
                <tr>
                  <th>Overwatch</th>
                  <th>180 grupos</th>
                </tr>
                <tr>
                  <th>Rainbow 6 Siege</th>
                  <th>120 grupos</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <h5>Posts mais populares nos fóruns</h5>
            <table className="table1">
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Estratagemas mais forte no novo Patch [Helldivers 2]</th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>
                    Build endgame Sorcerer focada em dano de fogo [Diablo IV]
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Patch Notes season 10 [Overwatch 2]</th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>500k+ DPS Volt Build [Warframe]</th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
                <tr>
                  <th>6</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
                <tr>
                  <th>7</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
                <tr>
                  <th>8</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
                <tr>
                  <th>9</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
                <tr>
                  <th>10</th>
                  <th>Lorem ipsum dolor, sit amet, consectetur adipiscing</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
