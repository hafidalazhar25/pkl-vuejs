<template>
<NavbarComponent/>
<div class="container">
  <HeaderComponent/>
</div>
<StatsComponent/>
<ProjectComponent id="project"/>
<SkillComponent id="skills"/>
<ContactComponent id="contact"/>
<FooterComponent/>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import StatsComponent from './components/StatsComponent.vue'
import ProjectComponent from './components/ProjectComponent.vue'
import ContactComponent from './components/ContactComponent.vue';
import SkillComponent from './components/SkillComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>