<template>
    <div class="footer-container" id="footer">
        <div class="office">
            <h2>Oficinas</h2><br>
            <h3>Medellin, Colombia</h3>
            <p>Cra 43A #19-17, Poblado Block Centro Empresarial, 1124</p><br><br>
            <h3>Barcelona, España</h3><br>
            <p>Recinto Modernista de Sant Pau, Sant Manuel Pavilion Carrer de Sant Antoni María Claret 167, 08025.</p>
        </div>
        <div class="sales">
            <h2>Ventas</h2><br>
            <h3>LATAM</h3><br><br>
            <a href="">+57 322 625 8118</a><br><br><br>
            <a href="mailto:comercialmed@cocodigital.co">comercialmed@cocodigital.co</a><br><br>
            <router-link to="/services/form"><button class="block_button">Agendar una cita</button></router-link>
        </div>
        <div >
            <h2>Unete a nuestra comunidad</h2><br><br>
            <ul>
                <li><a class="comunity" target="_blank" href="https://www.linkedin.com/company/coco-tecnologias/?originalSubdomain=co"><i class='fab fa-linkedin'></i></a></li>
                <li><a class="comunity" target="_blank" href="https://www.facebook.com/cocoinc"><i class="fab fa-facebook"></i></a></li>
                <li><a class="comunity" target="_blank" href="https://www.instagram.com/cocotecnologias/"><i class="fab fa-instagram"></i></a></li>
                <li><a class="comunity" target="_blank" href="https://www.youtube.com/channel/UC4fAy1h6azsOt5T05DXURfg"><i class="fab fa-youtube"></i></a></li>
            </ul><br><br><br>
            <h3>Somos miembros del</h3><br><br>
            <a href="https://barcelonahealthhub.com/" target="_blank"><img src="https://static.wixstatic.com/media/43618d_989dc8694adb4aa4904c1f91c082b0cd~mv2.png/v1/fill/w_177,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cabecera-barcelona-health-hub.png" alt=""></a>
        </div>
    </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<style>
.footer-container {
    display: grid;
    grid-template-columns: auto auto auto;
    font-size: 18px;
    justify-content: space-around;
    padding-top: 30px;
    padding-bottom: 30px;
}
.office {
    width: 200px;
}
.sales a {
    text-decoration: none;
    color: black;
}
.sales a:hover {
    color: rgb(0, 129, 125);
}
.comunity i {
    color: rgb(0, 129, 125);
    font-size: 30px;
}
.comunity i:hover {
    color: black;
}
.block_button {
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
.block_button:hover {
    background-color: rgb(134, 41, 255);
    cursor: pointer;
}
</style>