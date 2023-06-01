<template>
    <div  class="form-img">
        <router-link to="/"><a href=""><img src="../assets/Recurso 61.svg" alt=""></a></router-link>
    </div>
    <div class="atention">
        <h2>Atencion</h2>
        <p>El doctor esta disponible a partir del 1 junio 2023.</p>
    </div>
    <section class="date-form">
        <div class="img-form">
            <img src="https://png.pngtree.com/background/20211216/original/pngtree-medical-supplies-stethoscope-medicine-picture-image_1551270.jpg" alt="">
        </div>
        <div class="data">
        <FormKit 
        type="text" 
        label="Nombre" 
        name="your_name" 
        placeholder="Tu nombre aqui" 
        validation="required"
        :validation-messages="{
            required: 'Esta casilla es obligatoria'
        }"
        />
        <FormKit
        type="text"
        label="Apellido"
        name="your_lastname"
        placeholder="Escribe tu apellido"
        validation="required"
        :validation-messages="{
            required: 'Esta casilla es obligatioria'
        }"
        />
        <FormKit
        type="email"
        label="Correo electronico"
        help="Por favor ingresa tu correo electronico."
        validation="required|email|ends_with:.com"
        :validation-messages="{
            required: 'Se necesita un correo electronico'
        }"
        validation-visibility="live"
        placeholder="ejemplo@gmail.com"
        />
        <FormKit
        type="date"
        value="2011-01-01"
        label="Fecha para tu cita"
        help="Ingresar fecha"
        validation="required|date_after:2023-06-01"
        validation-visibility="live"
        />
        <FormKit
        class="time"
        type="time"
        label="Hora"
        value="06:00"
        help="Tienes que escoger una hora a partir de las 6:00 am hasta las 17:00 pm."
        />
        <FormKit
        type="form"
        submit-label="Confirmar cita"
        @submit="save"
        />
    </div>
    </section>
    <Footer />
    <div id="container"></div>
</template>

<script setup>
import Footer from '../components/Footer.vue';

const save = () => {
    alert('Tu cita ha sido programada con exito, te estaremos enviando un correo electronico en unas horas con mas informacion.')
}
</script>

<style>
.date-form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
}
.date-form img {
    margin-top: 4px;
    width: 350px;
    height: 700px;
    border-radius: 100px 0 0 100px;
    border-left: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
}
.atention {
    padding-top: 120px;
    text-align: center;
    font-size: 25px;
}
.atention h2 {
    font-weight: 400;
    color: red;
}

.form-img {
    position: fixed;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: white;
    height: 100px;
}
.form-img img {
    width: 140px;
}
.data {
    width: 450px;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-radius: 0 100px 100px 0;
}
.date-form input {
    z-index: 0;
    width: 400px;
    background-color: white;
}
</style>