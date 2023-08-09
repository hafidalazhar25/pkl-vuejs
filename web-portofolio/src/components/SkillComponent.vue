<template>
  <div class="skills-section my-5">
    <div class="skills-header">
      <h1 class="text-black text-4xl font-bold my-4">Skills</h1>
    </div>
    <div class="skills-container">
      <div class="skills-box">
        <div class="skills-title">
          <div class="skills-img">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/html-5-logo-png-transparent.png"
              alt=""
              class="skills-icons"
            />
          </div>
          <h3>HTML 5</h3>
        </div>
      </div>

      <div class="skills-box">
        <div class="skills-title">
          <div class="skills-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg"
              alt=""
              class="skills-icons"
            />
          </div>
          <h3>CSS3</h3>
        </div>
      </div>

      <div class="skills-box">
        <div class="skills-title">
          <div class="skills-img">
            <img
              src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg"
              alt=""
              class="skills-icons"
            />
          </div>
          <h3>JAVASCRIPT</h3>
        </div>
      </div>

      <div class="skills-box">
        <div class="skills-title">
          <div class="skills-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png"
              alt=""
              class="skills-icons"
            />
          </div>
          <h3>NODE.JS</h3>
        </div>
      </div>

      <div class="skills-box">
        <div class="skills-title">
          <div class="skills-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png"
              alt=""
              class="skills-icons"
            />
          </div>
          <h3>Vue.js</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

.skills-section {
  padding-top: 20px;
}

.skills-header {
  text-align: center;
  color: #fff;
  padding: 1rem;
  position: relative;
}

.skills-header:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  border-radius: 2px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-gap: 1rem;
  padding: 1rem 80px;
  font-size: 1.2rem;
}
.skills-box {
  padding: 1rem;
  color: #000;
  cursor: pointer;
}
.skills-box:hover .skills-img {
  transform: translateX(-20px);
}

.skills-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  position: relative;
}

.skills-title:after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  width: 20px;
  height: 4px;
  border-radius: 2px 0 0 2px;

  transition: 0.5s;
}

.skills-title:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100px;
  height: 4px;
  border-radius: 0 2px 2px 0;
}

.skills-icons {
  width: 50px;
  z-index: 2;
}

.skills-img {
  width: 90px;
  height: 90px;
  position: relative;
  border-radius: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.skills-img:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 90px;
  background: rgba(100, 100, 100, 0.5);
  border-radius: 45px 0 0 45px;
}
.skills-title h3 {
  color: #333;
  margin-top: 0.5rem;
}
@media screen and (max-width: 990px) {
  .skills-container {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem 50px;
  }
}

@media screen and (max-width: 650px) {
  .skills-container {
    grid-template-columns: 2fr;
    padding: 2rem 50px;
  }
}
</style>
