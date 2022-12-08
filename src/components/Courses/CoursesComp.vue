<template>
    <div class="CoursesHeader">
        <h2 class="text">Popular Courses</h2>
       <center><p class="width">eStore UI Kit comes with all essential features, sections and elements you need to design and develop web UI efficiently.</p></center>
    </div>
    <center><div class="grid">
        <div class="stacks" v-for="(image,index) in database" :key="index">
           <a href=""><img class="image" :src="image.url" alt=""></a>
         <div class="stacks-info">
           <a href=""><h2>{{image.title}}</h2></a>
         <div class="icons">
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
          </div>
            
         </div>
        </div>
    </div>
    <div class="view-all-course">
        <router-link to="/courses"><span>View All Course</span></router-link>
    </div>
    </center>
    <router-view />
</template>

<script>
export default {
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
                    id:6,
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
body {
    position: absolute;
    left: 10%;
}
a {
text-decoration: none;
}
.CoursesHeader {
    color: #283747;
    margin-top: 8%;
    text-align: center;
}
.CoursesHeader .text {
    font-size: 40px;

}
.CoursesHeader .width  {
    width: 580px;
    margin-top: 25px;
    color: #747e88;
}
.grid {
    display: grid;
    grid-template-columns:auto auto auto;
    width: 100%;
margin-top: 50px;
justify-content: center;
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
width: 380px;
margin-right: 40px;

}
.stacks .image {
   width: 100%;
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
    color: #747e88;
    width: 28px;
    height: 28px;
    line-height: 26px;
    border: 1px solid #d6d6d6;
    border-radius: 50%;
    margin-right: 10px;
    text-align: center;
}
.stack > span {
    color: #747e88;
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
.view-all-course span {
    font-size: 16px;
    font-weight: 500;
    padding: 16px 36px;
    border: 2px solid #f2a92c;
    color: #283747;
    border-radius: 50px;
}
.view-all-course {
    margin-top: 100px;
}
@media only screen and (max-width:1400px) {
    .CoursesHeader .width{
      width: 450px;
      line-height: 25px;
    }
    .stacks {
        width: 250px;
        margin-right: 80px;
    }
    .grid {
        justify-content: center;
    }
}
@media only screen and (max-width:1200px) {
    .stacks {
        width: 200px;
        margin-right:120px;
    }   
}
@media only screen and (max-width:1000px) {
    .grid {
    display: grid;
    grid-template-columns:auto auto;
}
.stacks {
        width: 300px;
        margin-right:60px;
    }
    .CoursesHeader .width {
        width: 500px;
    }
}
@media only screen and (max-width:775px) {
    .grid {
    display: grid;
    grid-template-columns:auto;
}
.stacks-info h2 {
   font-size: 20px;
}
.stacks {
    width: 550px;
}
.icons {
    margin-left: 100px;
}
.CoursesHeader .width {
        width: 450px;
    }
 
}
@media only screen and (max-width:550px) {
    .stacks {
        width: 330px;
    }
    .CoursesHeader .width {
        width: 300px;
    }
    .icons {
        transform: translateX(-140px);
    }
}
</style>