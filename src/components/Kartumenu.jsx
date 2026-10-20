function KartuMenu(props) {
  return (
    <div className="card">
    <h1 className='judul'> Menu </h1>
      <p>{props.nama}</p>
      <p>{props.harga}</p>
      <p>Makanan: {props.kategori}</p>
    </div>
  );
}
export default KartuMenu;
