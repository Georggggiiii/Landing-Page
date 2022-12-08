<template>
       <div class="header-links">
    </div>

    <img class="logo" src="https://preview.uideck.com/items/learn/assets/images/logo.svg" alt="">
        <div class="header-link-tags">
        <a class="tags" href="#">Home</a>
        <a class="tags" href="#">Courses</a>
        <a class="tags" href="#">Mentors</a>
        <a class="tags" href="#">Blog</a>
        <a class="tags" href="#">Contact</a>
        <a class="tags btn" href="#">Get Started</a>


        <button @click="open = !open" class="navbar">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
            </button>
            <div v-if="open" class="button-links">
                <a href="#home">Home</a>
        <a href="#lovely">Couple</a>
        <a href="#story">Story</a>
        <a href="#gallery">Gallery</a>
        <a href="#events">Event</a>
        <a href="#rsvp">RSVP</a>
            </div> 
    </div>
       <div class="flex">
        <div class="hero-left">
            <img class="hero-image" src="https://preview.uideck.com/items/learn/assets/images/hero-img.png" alt="">
            <img class="shape" src="https://preview.uideck.com/items/learn/assets/images/dot-shape.svg" alt="">
        </div>
        <div class="hero-content">
            <h2>Education and Online Course Site Template</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam diam voluptua.</p>
            <div class="hero-btns">
                <a class="main-btn" href="#">Courses</a>
            </div>
        </div>
       </div>
</template>

<script>
export default {
    data() {
        return {
            open:false,
        }
    }
}
</script>

<style scoped>
.header-links {
    background-image: url(./hero-img\ \(1\).png);
    position: relative;
    z-index: -1;
    padding: 380px 0 400px;
    text-align: center;
}

.header-links::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(40,55,71,.97);
    z-index: -1;
}

.header-link-tags {
    margin-top: -330px;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: absolute;
    top: 43%;
    right: 195px;
}

.header-link-tags .tags {
text-decoration: none;
    color: white;
    font-size: 17px;
    margin-right: 45px;

}
.header-link-tags .tags:hover {
    color: #f2a92c;
}
 .logo {
    width: 130px;
    position: absolute;
    top: 6%;
    left: 15%;
    z-index: 999;
}
.header-link-tags .btn {
    padding: 12px 28px;
    border-radius: 30px;
    background: #f2a92c;
    color: #fff;
    display: inline-block;
}
.header-link-tags .btn:hover {
    color: white;
}
.flex {
    display: flex;
    position: absolute;
    top: 0;
}

.hero-left .shape {
    transform: translate(-200px,38px);
    z-index: -1;
}
.hero-left .hero-image {
    width: 61.7%;
    z-index: -1;
   

}

.hero-content {
    justify-content: center;
    margin-top: 200px;
position: absolute;
left: 80%;
}
.hero-content h2 {
    font-size: 55px;
    font-weight: 700;
    line-height: 65px;
    width: 500px;
    color: white;
}
.hero-content p {
    margin-top: 40px;
    font-size: 18px;
    line-height: 28px;
    width: 460px;
    color: white;
}
.main-btn {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 0;
    padding: 17px 35px;
    font-weight: 500;
    font-size: 15px;
    border-radius: 30px;
    color: #283747;
    cursor: pointer;
    z-index: 5;
    background-color: #fff;
    -webkit-transition: all .4s ease-out 0s;
    transition: all .4s ease-out 0s;
    margin-top: 30px;
    text-decoration: none;
}
@media only screen and (max-width:1500px) {
    .hero-left {
    display: none;
}
.hero-content {
    justify-content: center;
    transform: translateX(250px);
}
.hero-content h2 {
    width: 600px;
}
.header-link-tags {
    margin-top: -330px;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 999;
    position: absolute;
    top: 43%;
    right: -10px;
}
}

@media only screen and (max-width: 1000px) {
        .hero-content h2 {
        width: 500px;
        }
        .hero-content {
            transform: translateX(200px);
        }
        .header-link-tags .tags{
            display: none;
        }
        .button-links {
        display: grid;
        float: right;
        margin-top: 50px;
    }
    .button-links a {
        text-decoration: none;
        color: white;
        padding-bottom: 10px;
        margin-top: 10px;
    }
    .navbar ,.button-links {
        transform: translateX(-130px);
    }
    
    .navbar {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
  }
 .navbar .toggler-icon {
    width: 30px;
    height: 2px;
    background-color: rgb(255, 0, 0);
    display: block;
    margin: 5px 0;
    position: relative;
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
 }
    }
    @media only screen and (min-width:1000px) {
        .navbar ,.button-links {
            display: none;
        }
    }
    @media only screen and (max-width:770px) {
        .hero-content {
            transform: translateX(50px);
        }
        .hero-content h2 {
            width: 400px;
        }
    }
@media only screen and (max-width:510px) {
    .hero-content p{
           width: 250px;
        }
        .hero-content h2 {
            font-size: 30px;
            width: 300px;
        }
        .hero-content {
            transform: translateX(10px);
        }
        .navbar ,.button-links{
           transform: translateX(-30px);
        }
}
</style>