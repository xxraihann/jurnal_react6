
function Judul() {
  const jam = 9;
  const saldoAwal = 70 * 1000;

  return (
    <div className="judul">
      <h1>Kantin Raihan</h1>
      <p>Selamat datang di kantin Raihan!</p>
      <p></p>
      <h1
        style={{
          color: "blue",
          fontSize: "2rem",
        }}
      >
        Kantin Raihan
      </h1>

      <div>
        {jam < 12 ? <p>Selamat pagi</p> : <p>Selamat siang</p>}
      </div>

      <p>Saldo awal kartu kantin: Rp {saldoAwal}</p>

      <button disabled>Bayar</button>
    </div>
  );
}

export default Judul;