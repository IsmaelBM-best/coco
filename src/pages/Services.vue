<template>
    <Navigation />
    <div class="options">
        <h2 class="options-h2">¡Cuentanos que tipo de servicio y atencion estas buscando!</h2>
        <div class="options-container">
            <div class="option">
                <h3>Consultas médicas en línea</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/6283/6283278.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Programas de bienestar</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/172/172011.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Citas médicas en línea</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/2933/2933245.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Servicios de telemedicina</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/5987/5987020.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Seguimiento de la salud</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/196/196123.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Asesoramiento psicológico en línea</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/387/387554.png" alt=""></router-link>
            </div>
            <div class="option">
                <h3>Servicios de atención domiciliaria</h3>
                <router-link to="/services/form"><img src="https://cdn-icons-png.flaticon.com/512/164/164758.png" alt=""></router-link>
            </div>
        </div>
    </div>
    <Footer class="footer-services" />
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Navigation from '../components/Navigation.vue';
</script>

<style>
.options {
    padding-top: 120px;
}
.options h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 400;
    color: rgb(0, 129, 125);
}
.options-container {
    padding-top: 50px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 80px;
}
.options-container img {
    width: 150px;
}
.option {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 240px;
    height: 240px;
    border: 6px solid;
    border-style:outset;
    border-radius: 10px;
    background-color: rgb(146, 233, 228);
}
.option h3 {
    font-weight: 500;
    text-align: center;
    color: rgb(0, 129, 125);
}
.option:hover {
    border: 4px solid;
    border-style:outset;
    background-color: rgb(184, 236, 234);
}
.option:active {
    border: 5px solid;
    border-style:inset;
    background-color: rgb(121, 235, 229);
}
.footer-services {
    padding-top: 100px;
}
</style>