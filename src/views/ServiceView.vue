<template>
  <div class="page-wrapper">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-content d-flex justify-content-between align-items-center">
          <div class="brand-and-toggler d-flex align-items-center justify-content-between">
            <a href="#" class="navbar-brand d-flex align-items-center">
              <div class="logo-circle">
                <img src="images/logo.png" alt="Logo de huellitas">
              </div>
              <span class="brand-text fw-7">Huellitas</span>
            </a>
            <button type="button" class="d-none navbar-show-btn">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="navbar-box">
            <button type="button" class="navbar-hide-btn">
              <i class="fas fa-times"></i>
            </button>
            <ul class="navbar-nav d-flex align-items-center">
              <li class="nav-item">
                <!-- Reemplaza el texto con la imagen -->
                <a href="index.html" class="nav-opcion fw-7">Home</a>
              </li>
              <li class="nav-item">
                <a href="login.html" class="nav-opcion fw-7">Sobre nosotros</a>
              </li>
              <li class="nav-item">
                <a href="services.html" class="nav-opcion fw-7">Servicios</a>
              </li>
              <li class="nav-item">
                <a href="login.html" class="nav-opcion fw-7">Contacto</a>
              </li>
              <li class="">
                <a href="login.html" class="nav-link"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <div class="video-container">
      <video autoplay loop muted class="back-video">
        <source src="images/y.mp4" type="video/mp4">
      </video>
      <div class="content">
        <h1>SERVICIOS</h1>
        <a href="#">EXPLORA</a>
      </div>
    </div>



    <main>
      <section class="sc-services">
        <div class="services-shape">
          <img src="images/curve-shape-1.png" alt="" />
        </div>
        <div class="container">
          <div class="services-content">
            <div class="title-box text-center">
              <div class="content-wrapper">
                <h3 class="title-box-name">Nuestros servicios</h3>
                <div class="title-separator mx-auto"></div>
                <p class="text title-box-text">
                  <b>En nuestra instalación de cuidado y hospedaje para mascotas,
                    entendemos que tu amigo peludo es una parte invaluable de tu
                    familia. En Huellitas, nos comprometemos a
                    proporcionarle a tu mascota la mejor atención y comodidad
                    durante su estancia con nosotros. Nuestro equipo de profesionales
                    amantes de los animales está dedicado a ofrecer un ambiente seguro,
                    feliz y saludable para todos nuestros huéspedes.!</b>
                </p>
              </div>
            </div>

            <div class="articles-list d-flex flex-wrap justify-content-center">
              <article class="articles-item">
                <div class="item-img">
                  <img src="images/servicedentista.jpeg" />
                </div>
                <div class="item-body">
                  <div class="item-title">Odontología</div>
                  <a href="#" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>

              <article class="articles-item">
                <div class="item-img">
                  <img src="images/serviceLaboratorio.jpg" />
                </div>
                <div class="item-body">
                  <div class="item-title">Laboratorio</div>
                  <a href="#" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>
              <article class="articles-item">
                <div class="item-img">
                  <img src="images/serviceLimpieza.jpeg" />
                </div>
                <div class="item-body">
                  <div class="item-title">Limpieza</div>
                  <a href="#" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>
              <article class="articles-item">
                <div class="item-img">
                  <img src="images/serviceCirugia.png" />
                </div>
                <div class="item-body">
                  <div class="item-title">Cirugia</div>
                  <a href="#" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>
              <article class="articles-item">
                <div class="item-img">
                  <img src="images/serviceSpa.jpeg" />
                </div>
                <div class="item-body">
                  <div class="item-title">SPA</div>
                  <a href="spa.html" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>
              <article class="articles-item">
                <div class="item-img">
                  <img src="images/serviceVacunas.jpg" />
                </div>
                <div class="item-body">
                  <div class="item-title">Vacunación</div>
                  <a href="#" class="item-link text-blue d-flex align-items-baseline">
                    <span class="item-link-text">Más información</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-grid sc-grid-one">
        <div class="container">
          <div class="grid-content d-grid align-items-center">
            <div class="grid-text">
              <div class="content-wrapper text-start">
                <div class="title-box">
                  <h3 class="title-box-name text-white">Reservar una cita</h3>
                  <div class="title-separator mx-auto"></div>
                </div>

                <p class="text title-box-text text-white">
                  "¡Estamos aquí para hacer la vida más fácil para usted y su mascota!
                  Llámenos al +(57) 317-415-4499 para programar una cita o
                  visite nuestro sitio web para reservar en línea.
                  Esperamos poder atenderle pronto."
                </p>
                <button type="button" class="btn btn-white-outline">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-grid sc-grid-two">
        <div class="container">
          <div class="grid-content d-grid align-items-center"></div>
        </div>
      </section>
      <section class="sc-grid sc-grid-one1">
        <div class="container">
          <div class="grid-content d-grid align-items-center">
            <div class="grid-img">
              <img src="images/goodDog.svg" alt="">
            </div>
            <div class="grid-text">
              <div class="content-wrapper text-start">
                <div class="title-box">
                </div>
                <p class="text title-box-text text-white">
                  En nuestra clínica, tratamos a cada mascota
                  con el mismo amor y cuidado que brindarías tú mismo.
                  Estamos aquí para ser tu socio en la salud y el bienestar
                  de tus mascotas, y esperamos servir a tu familia peluda con
                  el más alto nivel de atención y dedicación.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="sc-articles">
        <div class="articles-shape">
          <img src="images/curve-shape-2.png" alt="" />
        </div>
        <div class="container">
          <div class="articles-content">
            <div class="articles-element">
              <img src="images/element-img-2.png" alt="" />
            </div>
            <div class="title-box text-center">
              <div class="content-wrapper">
                <h3 class="title-box-name">Mandanos un mensaje</h3>
                <div class="title-separator mx-auto"></div>
              </div>
            </div>
            <!-------------------------------------------------------------------------------------------------------------->
            <div class="form-container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nombre" id="nombre" name="nombre" required>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" v-model="apellido" id="apellido" name="apellido" required>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="tel" v-model="telefono" id="telefono" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
      </div>
      <div class="form-group">
        <label for="correo">Correo electrónico:</label>
        <input type="email" v-model="correo" id="correo" name="correo" required>
      </div>
      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea v-model="mensaje" id="mensaje" name="mensaje" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
            <!-------------------------------------------------------------------------------------------------------------->
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-list d-grid text-white">
            <div class="footer-item">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <div class="logo-circle">
                  <img src="images/logo.png" alt="Logo de Diarymedi" />
                </div>
                <span class="brand-text fw-7">Huellitas</span>
              </a>
              <p class="text-white">
                Huellitas ofrece atención veterinaria, cuidado de mascotas y
                servicios de spa se encuentra disponible para todos a través
                de dispositivos móviles y acceso en línea.
              </p>
              <p class="text-white copyright-text">
                &copy; Huellitas PTY LTD 2024. All rights reserved.
              </p>
            </div>

            <div class="footer-item">
              <h3 class="footer-item-title">Compañía</h3>
              <ul class="footer-links">
                <li><a href="#">Sobre Nosostros</a></li>
                <li><a href="#">Encuentra un Hotel</a></li>
                <li><a href="#">Apps</a></li>
              </ul>
            </div>

            <div class="footer-item">
              <h3 class="footer-item-title">Region</h3>
              <ul class="footer-links">
                <li><a href="#">Indonesia</a></li>
                <li><a href="#">Singapore</a></li>
                <li><a href="#">Hongkong</a></li>
                <li><a href="#">Canada</a></li>
              </ul>
            </div>

            <div class="footer-item">
              <h3 class="footer-item-title">Ayuda</h3>
              <ul class="footer-links">
                <li><a href="#">Centro de ayuda</a></li>
                <li><a href="#">Soporte</a></li>
                <li><a href="#">Instruciones</a></li>
                <li><a href="#">Trabaja con Nosostros</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-element-1">
        <img src="images/element-img-4.png" alt="" />
      </div>
      <div class="footer-element-2">
        <img src="images/element-img-4.png" alt="" />
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      mensaje: '',
    }
  },
  methods: {
    onSubmit() {
      // Aquí se procesa el envío del formulario
      // Puedes enviar los datos a un servidor o realizar otras acciones
      alert('Formulario enviado');
      this.resetForm();
    },
    resetForm() {
      this.nombre = '';
      this.apellido = '';
      this.telefono = '';
      this.correo = '';
      this.mensaje = '';
    }
  }
}
</script>

<style src="../css/services.css"></style>
<style src="../css/utilitiesService.css"></style>