export default function SingleCat({ name, latinName }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><em>{latinName}</em></p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '10px',
    width: '200px',
    textAlign: 'center',
    background: '#f7f7f7',
  }
};
