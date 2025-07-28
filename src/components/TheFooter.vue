<template>
  <div class="outer-div">
    <div class="list">
      <h3 class="mb">Funiro.</h3>
      <div class="fade">
        400 University Drive Suite 200 Coral Gables, <br />
        FL 33134 USA
      </div>
    </div>
    <div class="list">
      <div class="fade mb">Links</div>
      <div class="links">
        <div class="link">
          <router-link to="/">Home</router-link>
        </div>
        <div class="link">
          <router-link to="/shop">Shop</router-link>
        </div>
        <div class="link">
          <router-link to="/about">About</router-link>
        </div>
        <div class="link">
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="fade mb">Help</div>
      <div class="links">
        <div class="link">Payment Options</div>
        <div class="link">Returns</div>
        <div class="link">Privacy Policies</div>
      </div>
    </div>
    <div class="list">
      <div class="fade mb">Newsletter</div>
      <input type="email" name="email" placeholder="Enter Your Email Address" />
      <button>subscribe</button>
    </div>
  </div>
  <div class="copyright">
    <p>&copy; 2024 furino. All rights reserved</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.outer-div {
  max-width: 124rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 2fr;
}
h3 {
  font-size: 2.4rem;
  font-weight: 700;
}
.mb {
  margin-bottom: 5rem;
}
.fade {
  color: #9f9f9f;
  font-size: 1.6rem;
  max-width: 28.5rem;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
}
.link {
  font-size: 1.6rem;
  font-weight: 500;
}

button,
input {
  border: none;
  border-bottom: 1px solid #000;
  padding-bottom: 9px;
  font-size: 1.4rem;
  color: #9f9f9f;
  width: 20rem;
}
input:focus {
  color: #000;
  outline: none;
}
button {
  width: auto;
  cursor: pointer;
  background-color: transparent;
  color: #000;
  margin-left: 1rem;
  text-transform: uppercase;
}

a:link,
a:visited {
  color: inherit;
  transition: all 0.3s;
  text-decoration: none;
}

a:hover,
a:active {
  text-decoration: underline;
}
</style>

<style>
.copyright {
  max-width: 124rem;
  margin: 0 auto;
  margin-top: 4.8rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 3.5rem 0;
  font-size: 1.6rem;
  color: #333;
  text-align: center;
}
</style>
