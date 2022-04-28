<template>
    <header class="bg-indigo-100 w-full z-50 fixed">
        <nav class="flex flex-row py-12 px-0 w-11/12 m-auto">
            <div class="logo p-3 text-amber-400 font-extrabold font">
                <!--img class="bg-black rounded-full" alt="Vue logo" src="@/assets/logo.png"-->
                SIMON
            </div>
            <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end font-extrabold">
                <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Home</router-link></li>
                <li class="uppercase p-3">/</li>
                <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">About</router-link></li>
                <li class="uppercase p-3">/</li>
                <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                <li class="uppercase p-3">/</li>
                <li class="social-link p-3">
                    <a href="https://www.linkedin.com/in/simklein/" target="_blank" title="LinkedIn">
                       LinkedIn
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

<style scoped>

</style>
