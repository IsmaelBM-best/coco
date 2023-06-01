<template>
    <section class="container-video-colums" id="about">
        <div class="video-container">
            <iframe width="660" height="415" src="https://www.youtube.com/embed/M7uG6bozBcE" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <h2 class="title">¡Mejoramos el sector de la salud!</h2>
        <div class="about-container">
            <div>
                <h3>instituciones<br>Publicas</h3>
                <div class="folder">
                    <p>Eliminamos las barreras de acceso a la atención con una experiencia centrada en el paciente.</p>
                </div>
            </div>
            <div>
                <h3>Instituciones<br>Privadas</h3>
                <div class="folder">
                    <p>Aumentamos la productividad y los niveles de atención automatizando procesos.</p>
                </div>
            </div>
            <div>
                <h3>Profesionales<br>Independientes</h3>
                <div class="folder">
                    <p>Transformamos tu negocio con tecnología de punta que aumenta tus ventas y rentabilidad.</p>
                </div>
            </div>
            <div>
                <h3>Otros<br>Sectores</h3>
                <div class="folder">
                    <p>Automatizamos tus procesos de agendamiento y comunicación.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style>
.container-video-colums {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 80px;
    padding-top: 200px;
    padding-bottom: 300px;
}
.about-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 100px;
    padding-left: 50px;
    padding-right: 50px;
}
.about-container h3 {
    color: rgb(0, 129, 125);
}
.folder {
    width: 140px;
    font-size: 18px;
}
.title {
    text-align: center;
}
</style>