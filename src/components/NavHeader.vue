<template>
    <header class="w-full bg-light z-50 fixed">
        <div class="bg-dsp mt-10 mb-1">
            <nav class="flex flex-row py-0 px-0 w-11/12 m-auto text-dark">
                <!--div class="logo p-3 font-extrabold font">
                    <img class="h-24 w-24" alt="DSP logo" src="@/assets/dsp_logo.svg">
                </div-->
                <!--ul v-show="!mobile" class="navigation flex items-center flex-1 justify-star text-2xl uppercase font-text font-black">
                    <li class="p-3"><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
                    <li class="p-3">/</li>
                    <li class="p-3"><router-link class="link" :to="{name: '404'}">404</router-link></li>
                </ul-->
                <!--div v-show="!mobile" class="translate flex items-center flex-1 justify-start text-2xl uppercase font-text">
                    <div class="flex items-center justify-center">
                        <p class="text-dark font-extrabold">&#127466; &#127475;</p>
                        <p class="text-dark font-semibold">/</p>
                        <p class="text-dark font-semibold hover:text-red">&#127465; &#127466;</p>
                    </div>
                </div-->
                <ul v-show="!mobile" class="navigation flex items-center flex-1 justify-end font-extrabold">
                    <!--li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Home</router-link></li>
                    <li class="uppercase p-3">/</li>
                    <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">About</router-link></li>
                    <li class="uppercase p-3">/</li>
                    <li class="uppercase p-3"><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                    <li class="uppercase p-3">/</li-->
                    <div class="flex py-6 sm:text-xl md:text-2xl">
                            <div class="flex">
                                <AppearTransition :duration="1000" :delay="3000">
                                    <li class="flex items-center">
                                        <a href="https://www.linkedin.com/in/simklein/" class="fa-stack fa-2x" style="--fa-inverse: #FFDEAD" target="_blank" title="LinkedIn">
                                            <font-awesome-icon class="rounded-sm transform hover:scale-110 transition-transform fa-inverse fa-stack-1x" :icon="['fas', 'square']"/>
                                            <font-awesome-icon class="rounded-sm hover:text-red transform hover:scale-110 transition-transform fa-stack-1x" :icon="['fab', 'linkedin']"/>
                                        </a>
                                    </li>
                                </AppearTransition>
                                <!--AppearTransition :duration="1000" :delay="3500">
                                <li class="p-3">
                                    <a href="https://github.com/simklein" class="fa-stack fa-3x" style="--fa-inverse: #FFDEAD" target="_blank" title="Github">
                                        <font-awesome-icon class="rounded-sm transform hover:scale-110 transition-transform fa-inverse fa-stack-1x" :icon="['fas', 'square']"/>
                                        <font-awesome-icon class="rounded-sm hover:text-red transform hover:scale-110 transition-transform fa-stack-1x" :icon="['fab', 'github-square']"/>
                                    </a>
                                </li>
                                </AppearTransition-->
                                <AppearTransition :duration="1000" :delay="3500">
                                    <li class="flex items-center">
                                        <a href="/dsp_logo.png" download class="fa-stack fa-1x hover:text-red transform hover:scale-110 transition-transform" style="--fa-inverse: #FFDEAD" target="_blank" title="Download CV">
                                            <font-awesome-icon class="rounded-sm fa-stack-2x" :icon="['fas', 'square']"/>
                                            <font-awesome-icon class="rounded-sm fa-inverse fa-stack-1x" :icon="['far', 'file-pdf']"/>
                                        </a>
                                        <!--a href="/dsp_logo.png" download class="fa-layers fa-fw fa-2x" style="--fa-top: 50%" target="_blank" title="Download CV">
                                            <font-awesome-icon class="rounded-sm hover:text-red transform hover:scale-110 transition-transform" :icon="['fas', 'file']"/>
                                            <span class="text-light font-black text-lg fa-layers-text fa-top">CV</span>
                                        </a-->
                                    </li>
                                </AppearTransition>
                                <li class="icon">
                                    <i @click="toggleMobileNav" v-show="mobile" class="underline text-dark" :class="{ 'icon-active': mobileNav}">Mobile</i>
                                </li>
                            </div>
                    </div>
                    <!--li class="social-link p-3">
                        <a href="https://github.com/simklein" target="_blank" title="Instagram">
                            <font-awesome-icon class="bg-light rounded-md h-10 w-10 hover:text-red transform hover:scale-110 transition-transform" :icon="['fab', 'instagram-square']"/>
                        </a>
                    </li-->
                </ul>
                <div class="icon">
                    <i @click="toggleMobileNav" v-show="mobile" class="underline text-dark" :class="{ 'icon-active': mobileNav}">Mobile</i>
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="dropdown-nav">
                        <li><router-link class="link" :to="{name: ''}">Home</router-link></li>
                        <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                        <li><router-link class="link" :to="{name: ''}">Portfolio</router-link></li>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>
</template>
