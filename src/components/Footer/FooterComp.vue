<template>
    <div class="grid">
        <div class="section-title">
            <img src="https://preview.uideck.com/items/learn/assets/images/logo.svg" alt="">
            <p>Lorem ipsum dolor sit amco nsetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .</p>
        </div>
        <div class="quick-links right">
            <h2>Quick Links</h2>
            <a href="#">Home</a>
            <a href="#">Courses</a>
            <a href="#">Eventd</a>
            <a href="#">Blog</a>
        </div>
        <div class="quick-links left">
            <h2>Our Course</h2>
            <a href="#">Design</a>
            <a href="#">Development</a>
            <a href="#">Marketing</a>
            <a href="#">SEO Design</a>
        </div>
        <div class="quick-links right">
            <h2>Contact Us</h2>
            <a href="#">Phone: +884-9273-3867</a>
            <a href="#">Email: hello@gmail.com</a>
            <a href="#">Address: Random Road</a>
            <a href="#">USA</a>
        </div>
        <div class="footer-title">
            <p>Designed and Developed by UIdeck</p>
        </div>
        <div class="icon-links">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
        </div>
    </div>
</template>

<style scoped>

.grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    margin-top: 100px;
    justify-content: center;
    transform: translateX(-170px);
 }
.section-title p {
    width: 280px;
    line-height: 25px;
    color: #747e88;
    margin-top: 20px;
}
.quick-links {
    display: grid;
    margin-right: 80px;
    transform: translateX(100px);
}
.quick-links h2 {
    margin-bottom: 35px;
    color: #283747; 
}
.quick-links a {
    text-decoration: none;
    color: #747e88;
    line-height: 35px;
}
.quick-links a:hover {
    color: coral;
}
.icon-links p {
    margin-top: 40px;
    color: #747e88;
}
.icon-links {
    position: absolute;
    left: 110%;
   display: flex;
    top: 55%;
}
.icon-links i {
    margin: 0 15px;
    color: #747e88;
    font-size: 20px;
}
.footer-title p {
    color: #747e88;
}
.footer-title , .icon-links {
   margin-top: 150px;
}
@media only screen and (max-width:1400px) {
    .quick-links {
    display: grid;
    margin-right: 50px;
    transform: translateX(60px);
}
.section-title p {
    width: 230px;
}
.grid {
    transform: translateX(-105px);
}
}
@media only screen and (max-width:1200px) {
    .quick-links {
    display: grid;
    margin-right: 30px;
    transform: translateX(30px);
}
.section-title p {
    width: 190px;
}
.grid {
    transform: translateX(-10px);
}
}
@media only screen and (max-width:1000px) {
    .grid {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 100px;
    justify-content: center;
        transform: translateX(-100px);
 }
 .section-title p {
    width: 260px;
 }
 .right {
    transform: translate(80px,-25px);
    margin-top: 30px;
 }
 .left {
    transform: translateX(5px);
 }
}
@media only screen and (max-width:775px) {
    .grid {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        transform: translateX(30px);
    }
    .section-title p {
        width: 500px;
    }
    .right {
        margin-top: 15%;
        transform: translateX(1px);
    }
    .left {
        transform: translateY(40px);
    }
}
</style>