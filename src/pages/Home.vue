<template>
    <Navigation />
    <main>
        <section class="presentation">
            <div class="phrase">
                <h1>La salud más <span>accesible</span> que nunca</h1>
                <p><strong>Mejoramos</strong> la experiencia de tus pacientes y <strong>aumentamos</strong> la <i>productividad</i> de tu institución con un <i>software</i> médico avanzado.</p>
                <router-link to="/services/form"><button class="block_button">Agendar una cita</button></router-link>
            </div>
            <div class="image">
                <img src="https://us.123rf.com/450wm/juliasart/juliasart1612/juliasart161200302/67691031-iconos-sobre-medicina-iconos-planos-dentro-de-c%C3%ADrculos-vector.jpg?ver=6" alt="">
            </div>
        </section>
        <About />
        <Footer />
    </main>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import About from '../components/About.vue';
import Navigation from '../components/Navigation.vue';
</script>

<style>
.presentation {
    display: flex;
    justify-content: space-between;
    padding-top: 110px;
    padding-left: 80px;
    padding-right: 50px;
}
.phrase {
    width: 600px;
}
.phrase h1 {
    font-size: 80px;
    color: rgb(0, 129, 125);
    font-weight: 400;
}
.phrase p {
    font-size: 25px;
}
p strong {
    color: rgb(0, 179, 173);
}
.block button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 50px;
    background-color: rgb(0, 179, 173);
    border-radius: 20px;
    margin-top: 10px;
    border: none;
    font-size: 19px;
    color: white;
    transition: background-color 0.5s ease;
}
.block:hover, .block button:hover {
    background-color: rgb(134, 41, 255);
    cursor: pointer;
}
</style>