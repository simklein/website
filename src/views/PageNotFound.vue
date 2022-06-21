<template>
  <div class="404 px-10 md:px-28 py-20 max-w-screen-xl m-auto">
    <section class="hero relative h-screen">
      <div class="hero-text container h-full flex flex-col justify-center text-dark selection:bg-myyellow">
        <AppearTransition :duration="2000">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-title mb-6">
            404!
          </h1>
        </AppearTransition>
        <AppearTransition :duration="2000" :delay="1500">
          <h2 class="font-text text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl">
            There is nothing here.
          </h2>
        </AppearTransition>
      </div>
    </section>
  </div>
</template>
