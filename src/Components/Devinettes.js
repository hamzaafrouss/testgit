import React, { Component } from 'react';

class Devinettes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombADeviner: this.NombreAleatoire(1, 100),
      compteur: 0,
      tentative: '',
      message: 'Devinez un nombre entre 1 et 100.'
    };
  }

  NombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  GTentative = () => {
    const { nombADeviner, tentative, compteur } = this.state;
    const nombTente = parseInt(tentative, 10);

    if (isNaN(nombTente)) {
      this.setState({ message: 'Veuillez entrer un nombre valide.' });
      return;
    }

    if (nombTente === nombADeviner) {
      this.setState({
        message: `Bravo ! Vous avez deviné le nombre en ${compteur + 1} essais.`,
        compteur: compteur+ 1
      });
    } else if (nombTente < nombADeviner) {
      this.setState({
        message: 'Trop bas. Essayez encore.',
        compteur: compteur + 1
      });
    } else {
      this.setState({
        message: 'Trop haut. Essayez encore.',
        compteur: compteur + 1
      });
    }
  }

  reessayer = () => {
    this.setState({
      nombreADeviner: this.genererNombreAleatoire(1, 100),
      compteur: 0,
      tentative: '',
      message: 'Devinez un nombre entre 1 et 100.'
    });
  }

  render() {
    const { message, compteur, tentative } = this.state;

    return (
      <div>
        <p>{message}</p>
        <input
          type="number"
          value={tentative}
          onChange={(e) => this.setState({ tentative: e.target.value })}
        />
        <button onClick={this.GTentative}>Devinez</button>
        {compteur> 0 && message !== 'Bravo ! Vous avez deviné le nombre.' && (
          <button onClick={this.reessayer}>Réessayer</button>
        )}
        <p>Nombre d'essais : {compteur}</p>
      </div>
    );
  }
}

export default Devinettes;