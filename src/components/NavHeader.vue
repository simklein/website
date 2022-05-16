<template>
    <header class="w-full bg-light z-50 fixed">
        <nav class="flex flex-row py-12 px-0 w-11/12 m-auto text-dark">
            <div class="logo p-3 font-extrabold font">
                <img class="h-24 w-24" alt="DSP logo" src="@/assets/dsp_logo.svg">
            </div>
            <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end font-extrabold">
                <!--li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Home</router-link></li>
                <li class="uppercase p-3">/</li>
                <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">About</router-link></li>
                <li class="uppercase p-3">/</li>
                <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                <li class="uppercase p-3">/</li-->
                <li class="social-link p-3">
                    <a href="https://www.linkedin.com/in/simklein/" target="_blank" title="LinkedIn">
                        <font-awesome-icon class="h-8 w-8" :icon="['fab', 'linkedin']"/>
                    </a>
                </li>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="" :class="{ 'icon-active': mobileNav}"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{name: ''}">Home</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                </ul>
            </transition>
       </nav>
    </header>
</template>
