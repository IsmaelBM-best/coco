<template>
    <nav :class="{ 'scrolled-nav': scrollPosition }">
        <img class="img" src="../assets/Principal.svg" alt="">
        <ul v-show="!mobile" class="navigation">
            <li class="top"><router-link to="/" class="black">Inicio</router-link></li>
            <li class="top"><router-link to="/services">Servicios</router-link></li>
            <li class="top"><a href="#about">Acerca de</a></li>
            <li class="top"><a href="#footer">Contactanos</a></li>
            <li class="block"><router-link to="/services/form">Agendar una cita</router-link></li>
        </ul>
        <button class="icon">
           <i @click="toggleMobileNav" v-show="mobile" class="fas fa-bars" :class="{'icon-active' : mobileNav}"></i>
        </button>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li class="top"><router-link class="black-color" to="/">Inicio</router-link></li>
                <li class="top"><router-link class="black-color" to="/services">Servicios</router-link></li>
                <li class="top"><a href="#about" class="black-color">Acerca de</a></li>
                <li class="top"><a href="#footer" class="black-color">Contactanos</a></li>
                <li class="block"><router-link class="black-color" to="/services/form">Agendar una cita</router-link></li>
                <img src="../assets/Recurso-55.svg" alt="">
            </ul>
        </transition>
    </nav>
</template>

<script>
export default {
    name: 'navigation',
    data() {
        return {
            scrollPosition: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created() {
        window.addEventListener("resize", this.checkScreen)
        this.checkScreen()
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },

        checkScreen() {
            this.windowWidth = window.innerWidth
            if (this.windowWidth <= 880) {
                this.mobile = true
                return
            }
            this.mobile = false
            this.mobileNav = false
            return
        }
    }
}
</script>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css'
</script>

<style>
nav {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: rgba(128, 224, 221, 0.712);
    padding-left: 90px;
    padding-right: 90px;
    z-index: 99;
}
nav img {
    width: 180px;
}
ul {
    display: flex;
    gap: 20px;
    list-style: none;
}
nav a {
    color: white;
    text-decoration: none;
    font-size: 20px;
}
.top {
    padding-top: 10px;
}
.block {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 40px;
    background-color: rgb(0, 179, 173);
    border-radius: 14px;
    transition: background-color 0.5s ease;
}
.black {
    color: black;
}
/* boton responsive */
.icon {
    position: absolute;
    right: 40px;
    top: 25px;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background-color: transparent;

}
.icon i {
    font-size: 30px;
    color: white;
    cursor: pointer;
    transition: 0.8s ease all;
}
.icon-active {
    transform: rotate(180deg);
}
.dropdown-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    width: 50%;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
    transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-100%);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}
.dropdown-nav li {
    margin-left: 0;
}
.dropdown-nav img {
    width: 100px;
    padding-top: 120px;
}
.black-color {
    color: black;
}
</style>