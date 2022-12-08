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
       </div>
       <div class="routing">
       <h1>Courses Page</h1>
       <div class="back-to-home-page">
       <router-link to="/"><h4 class="back-to-home">Home</h4></router-link>
        <span>/</span>
        <h4 class="courses">Courses</h4>
       </div>
       </div>
    <div class="CoursesHeader">
        <h2 class="text">Popular Courses</h2>
       <center><p class="width">eStore UI Kit comes with all essential features, sections and elements you need to design and develop web UI efficiently.</p></center>
    </div>
    <center><div class="grid">
        <div class="stacks" v-for="(image,index) in database" :key="index">
           <a href=""><img class="image" :src="image.url" alt=""></a>
         <div class="stacks-info">
           <a href=""><h2>{{image.title}}</h2></a>
         <center><div class="icons">
           <div class="fix">
            <i class="fa-solid fa-user"></i>
            <span>{{image.info}}</span>
           </div>
           <div class="fix">
            <i class="fa-solid fa-eye"></i>
            <span>{{image.sallary}}k</span>
           </div>
           <div class="fix">
            <i class="fa-regular fa-star"></i>
            <span>{{image.rate}}k</span>
           </div>
           <div class="price">
            <span>${{image.price}}.00</span>
           </div>
          </div></center> 
       
         </div>
        </div>
    </div></center>
</template>


<script>

export default {
   components: {
    
   },
    data() {
        return {
            database: [
                {
                    id:1,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/full-stack.jpg",
                    title:"Full-stack Web Development",
                    info:"3.5k",
                    sallary:"12",
                    rate:5.0,
                    price:99.00
                },
                {
                    id:2,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/design.jpg",
                    title:"UX/UI Design",
                    info:"3k",
                    sallary:"11",
                    rate:5.0,
                    price:39.00
                },
                {
                    id:3,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/js.jpg",
                    title:"Modern JavaScript",
                    info:"2.5k",
                    sallary:"18",
                    rate:4.0,
                    price:19.00
                },
                {
                    id:4,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/business.jpg",
                    title:"Business Development",
                    info:"1.5k",
                    sallary:"15",
                    rate:4.5,
                    price:19.00
                },
                {
                    id:5,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/marketing.jpg",
                    title:"Email Marketing 101",
                    info:"1.9k",
                    sallary:"5",
                    rate:5.0,
                    price:69.00
                },
                {
                    id:1,
                    url:"https://preview.uideck.com/items/learn/assets/images/course/python.jpg",
                    title:"Getting Started with Python",
                    info:"1.2k",
                    sallary:"13",
                    rate:3.5,
                    price:9.00
                }
            ]
        }
    }
}
</script>


<style scoped>
.header-links {
    background-image: url(../assets/hero-bg\ \(1\).jpg);
    position: relative;
    z-index: -1;
    padding: 230px 0 230px;
    text-align: center;
    background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
}

.header-links::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
   
}
.header-link-tags {
    margin-top: -330px;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-align: center;
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
.routing {
  position: absolute;
  top: 25%;
  left: 40%;
}
.routing h1 {
  color: white;
  font-size: 48px;
}
.back-to-home-page {
  display: flex;
  transform: translateX(100px);
  margin-top: 10px;
}
.back-to-home-page .courses {
  color: #f2a92c;
}
.back-to-home-page .back-to-home {
  color: white;
  margin-right: 5px;
}
.back-to-home-page .back-to-home:hover {
  color: #f2a92c;
  transition: 0.2s all;
}
.back-to-home-page span {
  color: white;
  margin-right: 10px;
}
a {
  text-decoration: none;
}
a {
text-decoration: none;
}
.CoursesHeader {
    color: #283747;
    margin-top: 10%;
    text-align: center;
}
.CoursesHeader .text {
    font-size: 40px;

}
.CoursesHeader .width  {
    width: 580px;
    margin-top: 25px;
}
.grid {
    display: grid;
    grid-template-columns:auto auto auto;
    width: 100%;
margin-top: 20px;
}
.stacks:nth-child(4) {
    margin-top: 30px;
}
.stacks:nth-child(5) {
    margin-top: 30px;
}
.stacks:nth-child(6) {
    margin-top: 30px;
}
.stacks {
    align-items: center;
}
.stacks .image {
   width: 80%;
}
.stacks .image:hover {
    scale: 1.1;
    transition: 0.2s all;
}
.stacks-info h2 {
    color: #283747;
    margin-top: 8px;
}
.stacks-info h2:hover {
    color: #fd7e14;
    transition: 0.2s all;
}
.stacks-info i {
    font-size: 13px;
    color: #283747;
    width: 28px;
    height: 28px;
    line-height: 26px;
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    margin-right: 10px;
    text-align: center;
}
.stack > span {
    color: #283747;
}
.icons {
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-align: center;
    width: 35%;
    transform: translateX(-115px);
    padding-top: 20px;
}
.fix {
    width: 100px;
}
.price  {
    color: #fd7e14;
    font-weight: 700;
    margin-top: 5px;
}
</style>