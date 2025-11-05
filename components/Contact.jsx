import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.inner}>
        <div id="reservas" className={`${styles.reservations} fade-in`}>
          <div>
            <p className={styles.eyebrow}>Reservas</p>
            <h2>Una mesa frente al mar te espera</h2>
            <p className={styles.description}>
              Para grupos, celebraciones especiales o una comida íntima, nuestro equipo te ayudará a crear una experiencia inolvidable.
            </p>
          </div>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="tel:+34952216638">
              Llamar al +34 952 21 66 38
            </a>
            <a className={styles.secondaryButton} href="mailto:reservas@laviborrilla.com">
              reservas@laviborrilla.com
            </a>
          </div>
        </div>
        <div className={`${styles.infoBlock} fade-in`}>
          <div className={styles.details}>
            <p className={styles.eyebrow}>Ubicación</p>
            <h3>Benalmádena Costa · Playa Las Yucas</h3>
            <p className={styles.description}>
              Carretera de Cádiz N-340, km 222 · Benalmádena, Málaga
            </p>
            <div className={styles.schedule}>
              <div>
                <h4>Horario</h4>
                <p>Lunes a domingo · 12:30h a 23:30h</p>
              </div>
              <div>
                <h4>Teléfono</h4>
                <a href="tel:+34952216638">+34 952 21 66 38</a>
              </div>
            </div>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              title="Mapa de La Viborrilla"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.2516179606796!2d-4.541862723487747!3d36.58697107232198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f7938bf0eaf3%3A0xfe93bc7f71e735eb!2sRestaurante%20La%20Viborrilla!5e0!3m2!1ses!2ses!4v1715619372009!5m2!1ses!2ses"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
