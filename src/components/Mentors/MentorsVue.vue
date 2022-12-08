<template>
    <div class="row">
        <h2>Our Expert Instructors</h2>
        <center><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p></center>
        <div class="grid">
            <div class="single-team"  v-for="(image,index) in database" :key="index">
               <img :src="image.url" alt="">
               <h2>{{image.title}}</h2>
               <p>{{image.info}}</p>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            database: [
                {
                    id:1,
                    url:"https://preview.uideck.com/items/learn/assets/images/team/team-1.png",
                    title:"Jesika Parnendaj",
                    info:"Expert Designer",
                    
                },
                {
                    id:2,
                    url:"https://preview.uideck.com/items/learn/assets/images/team/team-2.png",
                    title:"Nelson Mendela",
                    info:"Web Developer",
                    
                },
                {
                    id:3,
                    url:"https://preview.uideck.com/items/learn/assets/images/team/team-3.png",
                    title:"Jhon Abraham",
                    info:"Business Marketing Expert",
                    
                },
                {
                    id:4,
                    url:"https://preview.uideck.com/items/learn/assets/images/team/team-4.png",
                    title:"Senidso Smid",
                    info:"SEO Expert",
                    
                },
            ]

        }
    }
}
</script>

<style scoped>
.row h2 {
    font-size: 45px;
    line-height: 55px;
    margin-bottom: 20px;
    color: #283747;
}
.row {
    transform: translateY(550px);
    text-align: center;
}
.row p {
    color: #747e88;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    margin-bottom: 60px;
    width: 550px;
}
.grid {
    display: grid;
    grid-template-columns: auto auto auto auto;
    text-align: center;
    justify-content: center;

}
.single-team h2 {
    font-size: 20px;
    margin-top: 10px;
}
.single-team p {
    transform: translate(-130px,-15px);
}
.single-team {
    width: 300px;

}
@media only screen and (max-width:1400px) {
    .row p {
        width: 500px;
    }
    .single-team {
        width: 250px;
    }
    .single-team img {
        width: 230px;
    }
}
@media only screen and (max-width:1200px) {
    .single-team img {
        width: 200px;
    }
    .single-team {
        width: 220px;
 
    }
}
@media only screen and (max-width:990px) {
    .row {
        margin-top: 85%;
    }
    .grid {
    display: grid;
    grid-template-columns: auto auto;
    text-align: center;
    justify-content: center;
   transform: translateX(30px);
}
.single-team {
    width: 380px;
}
.single-team img {
        width: 350px;
    }
}
@media only screen and (max-width:770px) {
    .grid {
    display: grid;
    grid-template-columns: auto;
    text-align: center;
    justify-content: center;
    transform: translateX(-70px);
}
.row {
        margin-top: 100%;
    }
    .single-team img {
        width: 550px;
    }
    .row p {
        width: 450px;
    }
}
</style>