import styles from './Menu.module.css';

const dishes = [
  {
    name: 'Espetos de Sardinas',
    description: 'Sardinas frescas asadas a la brasa frente al mar, con aliño cítrico y aceite de oliva virgen extra.',
    price: '14 €'
  },
  {
    name: 'Arroz Caldoso de Marisco',
    description: 'Arroz meloso con gamba roja, almejas y caldo de pescado artesanal, acabado con azafrán malagueño.',
    price: '24 €'
  },
  {
    name: 'Lubina a la Sal',
    description: 'Lubina de lonja horneada en costra de sal marina, servida con verduras ecológicas de temporada.',
    price: '28 €'
  }
];

export default function Menu() {
  return (
    <section id="carta" className={`fade-in ${styles.menuSection}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Nuestra carta</p>
          <h2>Sabores mediterráneos con producto local</h2>
          <p className={styles.description}>
            Una propuesta que honra la tradición marinera de Benalmádena con ingredientes frescos y una presentación contemporánea.
          </p>
        </div>
        <div className={styles.grid}>
          {dishes.map((dish) => (
            <article key={dish.name} className={styles.card}>
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <span className={styles.price}>{dish.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
