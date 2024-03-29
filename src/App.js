import React from "react";
import "./index.css";
import "./App.css";
import ReactCardFlip from "react-card-flip";

class DiriSendiri extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: [
        "apa hal yang membuatmu merasa insecure?",
        "kesan pertamamu ke salah satu dari kita?",
        "apa yang paling bikin kamu takut?",
        "series favoritmu dan alasannya",
        "ceritain hal paling memalukan yang pernah kamu lakuin",
        "mimpi paling aneh yang pernah kamu alamin",
        "siapa yang paling kamu benci diantara kita?",
        "siapa orang terakhir yang kamu chat di WA?",
        "hal paling menjijikan yang pernah kamu lakuin",
        "hewan apa yang paling sesuai sama kamu",
        "barang favorit kamu",
        "bagian tubuh yang paling kamu sukai dan tidak kamusukai",
        "ceritain terakhir kali kamu boong",
        "kapan terakhir kali kamu nangis",
        "hal yang paling kamu sesalin",
        "quotes favorit kamu",
        "ceritain momen life-changing kamu",
        "diantara kita siapa yang paling tau kamu",
        "ceritain mimpi kamu yang paling aib",
      ],
    };
  }

  get show() {
    return this.props.activeSection === "DiriSendiri";
  }

  render() {
    if (this.show) {
      var n = Math.floor(Math.random() * this.state.quest.length);
      let status = this.state.quest[n];
      return (
        <>
          <button name="" className="chosen diri-sendiri title-chosen" onClick={this.props.onClick}>
            Diri Sendiri
          </button>
          <div className="content-container">
            <p className="content">"{status}"</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

class MasaLalu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: [
        "kenapa kamu putus dengan mantan sebelumnya",
        "hal terbodoh yang pernah kamu lakuin pas masih bocil",
        "ceritain patah hati terbesar kamu",
        "siapa mantan/masa lalu terindah kamu?",
        "ceritain momen masa kecil yang ngga terlupakan",
        "terakhir kali ngompol",
        "kebohongan yang sampe sekarang belum kebongkar",
        "ceritain first love kamu",
        "mantan yang paling kamu benci",
        "ceritain nangis paling parah kamu",
        "lagu yang nemenin kamu pas lagi galau",
        "hal paling childish yang masih melekat sampe sekarang",
        "hal paling kejam yang pernah kamu lakuin ke salah satu dari kita",
        "hal paling parah yang kamu lakuin ke ortu",
        "ceritain pengalaman buruk kamu tentang cinta",
        "pernah ngga jadi selingkuhan? ceritain",
        "ceritain kejadian buruk yang membekas sampe sekarang",
        "ceritain hal yang paling bikin kamu sedih karena ortu",
        "film/series yang bikin kamu nangis",
      ],
    };
  }

  get show() {
    return this.props.activeSection === "MasaLalu";
  }

  render() {
    if (this.show) {
      var n = Math.floor(Math.random() * this.state.quest.length);
      let status = this.state.quest[n];
      return (
        <>
          <button name="" className="chosen masa-lalu title-chosen" onClick={this.props.onClick}>
            Masa Lalu
          </button>
          <div className="content-container">
            <p className="content">"{status}"</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

class Hubungan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: [
        "pernah selingkuh? apa pendapatmu soal selingkuh?",
        "siapa orang yang kamu sukai diam-diam?",
        "apa yang bikin kamu cemburu?",
        "diantara kita siapa yang mau kamu 'kiss'?",
        "siapa orang yang terakhir kamu stalk di sosmed?",
        "ceritain first kiss kamu",
        "diantara kita siapa yang paling kamu suka dalam konteks romantis?",
        "siapa orang yang pengen kamu jadiin suami/istri?",
        "ucapan yang paling parah ke pasangan",
        "hal yang paling malu malu in pas ngedate",
        "tunjukin foto kamu yang paling sweet",
        "pernah nge-ghosting ngga? ceritain",
        "ceritain hal kecil tapi berkesan yang dia lakuin ke kamu ",
        "ceritain love language kamu",
        "crush yang orang orang ngga pada tau",
        "diantara kita pernah nyimpen rasa ke siapa",
        "hal aneh tapi attractive buat kamu",
        "boong paling parah ke pasangan",
        "sesuatu yang pengen kamu lakuin bareng pasangan",
      ],
    };
  }

  get show() {
    return this.props.activeSection === "Hubungan";
  }

  render() {
    if (this.show) {
      var n = Math.floor(Math.random() * this.state.quest.length);
      let status = this.state.quest[n];
      return (
        <>
          <button name="" className="chosen hubungan title-chosen" onClick={this.props.onClick}>
            Hubungan
          </button>
          <div className="content-container">
            <p className="content">"{status}"</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

class Kehidupan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quest: [
        "tiruin seseorang dan yang lain menebak",
        "freestyle rap (1 menit)",
        "telepon seseorang dan nyanyi",
        "temenmu update sg di igmu",
        "didandanin temenmu",
        "confess ke gebetan!",
        "parodiin seleb sampe ada yang bisa nebak",
        "parodiin salah satu dari kita sampe ada yang nbisa nebak",
        "joget terbaikmu (1 menit)",
        "tebak siapa yang didepanmu(tutup mata)",
        "salah satu dari kita ngirim 1 pesan di hp kamu (ke siapapun)",
        "mutualan ig sama kasir",
        "minta nomor kasir",
        "dm ig follower random kamu",
        "tunjukin aib paling parah yang ada di galeri kamu",
        "dance yang lagi viral",
        "tulis nama salah satu diantara kita di pipi",
        "tunjukin chat terakhir sama gebetan kamu",
        "upload nyanyi di sg",
      ],
    };
  }

  get show() {
    return this.props.activeSection === "Kehidupan";
  }

  render() {
    if (this.show) {
      var n = Math.floor(Math.random() * this.state.quest.length);
      let status = this.state.quest[n];
      return (
        <>
          <button name="" className="chosen kehidupan title-chosen" onClick={this.props.onClick}>
            Dare
          </button>
          <div className="content-container">
            <p className="content">"{status}"</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}

const Buttons = ({ onToggle }) => (
  <>
    <div className="option ">
      <button name="DiriSendiri" className="button-option diri-sendiri" onClick={onToggle}></button>
      <div className="card-name">
        <p className="title">Diri Sendiri</p>
      </div>
    </div>
    <div className="option ">
      <button name="MasaLalu" className="button-option masa-lalu" onClick={onToggle}></button>
      <div className="card-name">
        <p className="title">Masa Lalu</p>
      </div>
    </div>
    <div className="option ">
      <button name="Hubungan" className="button-option hubungan" onClick={onToggle}></button>
      <div className="card-name">
        <p className="title">Hubungan</p>
      </div>
    </div>
    <div className="option ">
      <button name="Kehidupan" className="button-option kehidupan" onClick={onToggle}></button>
      <div className="card-name">
        <p className="title">Dare</p>
      </div>
    </div>
  </>
);

const Main = ({ activeSection, onClick }) => (
  <React.Fragment>
    <DiriSendiri activeSection={activeSection} onClick={onClick} />
    <MasaLalu activeSection={activeSection} onClick={onClick} />
    <Hubungan activeSection={activeSection} onClick={onClick} />
    <Kehidupan activeSection={activeSection} onClick={onClick} />
  </React.Fragment>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "",
      isFlipped: false,
    };

    this.handleToggleSection = this.handleToggleSection.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleToggleSection(e) {
    const { name } = e.target;
    this.setState((prevState) => ({
      activeSection: name,
      isFlipped: !prevState.isFlipped,
    }));
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  get show() {
    return this.state.activeSection === "";
  }

  render() {
    return (
      <>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal" flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>
          <div className="card">
            <Buttons onToggle={this.handleToggleSection} />
          </div>
          <div className="card">
            <Main activeSection={this.state.activeSection} onClick={this.handleToggleSection} />
          </div>
        </ReactCardFlip>
      </>
    );
  }
}

export default App;
