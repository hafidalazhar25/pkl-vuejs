<template>
  <header>
    <NavbarComponent />
  </header>
  <div class="container mx-auto">
    <HeaderComponent />
  </div>
  <svg
    id="wave"
    style="transform: rotate(180deg); transition: 0.3s"
    viewBox="0 0 1440 320"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
        <stop stop-color="rgba(26, 101, 219, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style="transform: translate(0, 0px); opacity: 1"
      fill="url(#sw-gradient-0)"
      d="M0,0L40,0C80,0,160,0,240,10.7C320,21,400,43,480,48C560,53,640,43,720,53.3C800,64,880,96,960,96C1040,96,1120,64,1200,69.3C1280,75,1360,117,1440,138.7C1520,160,1600,160,1680,138.7C1760,117,1840,75,1920,58.7C2000,43,2080,53,2160,74.7C2240,96,2320,128,2400,154.7C2480,181,2560,203,2640,197.3C2720,192,2800,160,2880,165.3C2960,171,3040,213,3120,224C3200,235,3280,213,3360,197.3C3440,181,3520,171,3600,138.7C3680,107,3760,53,3840,58.7C3920,64,4000,128,4080,144C4160,160,4240,128,4320,101.3C4400,75,4480,53,4560,42.7C4640,32,4720,32,4800,42.7C4880,53,4960,75,5040,101.3C5120,128,5200,160,5280,170.7C5360,181,5440,171,5520,138.7C5600,107,5680,53,5720,26.7L5760,0L5760,320L5720,320C5680,320,5600,320,5520,320C5440,320,5360,320,5280,320C5200,320,5120,320,5040,320C4960,320,4880,320,4800,320C4720,320,4640,320,4560,320C4480,320,4400,320,4320,320C4240,320,4160,320,4080,320C4000,320,3920,320,3840,320C3760,320,3680,320,3600,320C3520,320,3440,320,3360,320C3280,320,3200,320,3120,320C3040,320,2960,320,2880,320C2800,320,2720,320,2640,320C2560,320,2480,320,2400,320C2320,320,2240,320,2160,320C2080,320,2000,320,1920,320C1840,320,1760,320,1680,320C1600,320,1520,320,1440,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    ></path>
  </svg>
  <div class="container mx-auto">
    <MainComponenet />
  </div>
  <MapsComponent />
  <FooterComponent />
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponenet from './components/MainComponenet.vue';
import MapsComponent from './components/MapsComponent.vue';
import FooterComponent from './components/FooterComponents.vue';
</script>
