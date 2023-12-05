
class Oppilas {
  constructor() {
    this._nimi = "";
    this._syntymavuosi = new Date();
    this._osoite = "";
    this._puhelinnumero = "";
    this._arvosanat = [];
  }

  get nimi() {
    return this._nimi;
  }

  set nimi(uusiNimi) {
    this._nimi = uusiNimi;
  }

  get syntymavuosi() {
    return this._syntymavuosi;
  }

  set syntymavuosi(uusiSyntymavuosi) {
    this._syntymavuosi = new Date(uusiSyntymavuosi);
  }

  get osoite() {
    return this._osoite;
  }

  set osoite(uusiOsoite) {
    this._osoite = uusiOsoite;
  }

  get puhelinnumero() {
    return this._puhelinnumero;
  }

  set puhelinnumero(uusiPuhelinnumero) {
    this._puhelinnumero = uusiPuhelinnumero;
  }

  lisaaArvosana(oppiaine, arvosana, suorituspvm) {
    if (arvosana >= 0 && arvosana <= 10) {
      this._arvosanat.push(new Arvosana(oppiaine, arvosana, new Date(suorituspvm)));
    } else {
      window.alert("Virheellinen arvosana. Arvosana on oltava välillä 0-10.");
    }
  }

  tulosta() {
    const oppilasTiedot = `Oppilaan tiedot:
    Nimi: ${this.nimi}
    Syntymävuosi: ${this.syntymavuosi.toDateString()}
    Osoite: ${this.osoite}
    Puhelinnumero: ${this.puhelinnumero}`;
    window.alert(oppilasTiedot);
  }

  tulostaArvosanat() {
    let arvosanaTeksti = "arvosanat:\n";
    for (let i = 0; i < this._arvosanat.length; i++) {
      const arvosana = this._arvosanat[i];
      arvosanaTeksti += `Oppiaine: ${arvosana.oppiaine}\n`;
      arvosanaTeksti += `Arvosana: ${arvosana.arvosana}\n`;
      arvosanaTeksti += `Suorituspvm: ${arvosana.suorituspvm.toLocaleDateString()}\n\n`;
    }
    window.alert(arvosanaTeksti);
  }

  laskeIka() {
    const nykyinenVuosi = new Date().getFullYear();
    const syntymaVuosi = this.syntymavuosi.getFullYear();
    const ika = nykyinenVuosi - syntymaVuosi;
    return ika;
  }
}


class Arvosana {
  constructor(oppiaine, arvosana, suorituspvm) {
    this.oppiaine = oppiaine;
    this.arvosana = arvosana;
    this.suorituspvm = suorituspvm;
  }
}


const oppilas = new Oppilas();


document.getElementById("luoOppilas").addEventListener("click", function () {
  const nimi = document.getElementById("nimi").value;
  const syntymavuosi = document.getElementById("syntymavuosi").value;
  const osoite = document.getElementById("osoite").value;
  const puhelinnumero = document.getElementById("puhelinnumero").value;

  oppilas.nimi = nimi;
  oppilas.syntymavuosi = syntymavuosi;
  oppilas.osoite = osoite;
  oppilas.puhelinnumero = puhelinnumero;

  oppilas.tulosta();
});