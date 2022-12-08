<template>
    <div class="grid">
        <div class="section-title">
        <h2>Get In Touch</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing <br> elitr, sed diam nonumy eirmod tempor invidunt utlabo</p>
        <div class="contact-content">
            <h3>Hot Line Call Us 24/7</h3>
            <a href="#">000-2222-5555</a>
            <br>
            <a href="#">hello@gmail.com</a>
        </div>

        </div>
        <div class="input-layouts">
            <input type="text" placeholder="Name">
            <input class="email" type="text" placeholder="Email">
            <div class="textarea">
                <input id="subject" type="text" placeholder="Subject">
                <textarea name="textarea" id="textarea" placeholder="Message"></textarea>
                <div class="text-right">
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 15%;
    justify-content: center;
    transform: translateX(-80px);
}
.section-title h2 {
    font-size: 35px;
    line-height: 55px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #283747; 
}
.section-title p {
    width: 380px;
line-height: 25px;
color: #747e88;
}
.contact-content {
    font-size: 25px;
    line-height: 55px;
    font-weight: 600;
 margin-top: 12%;
    color: #283747; 
}
.contact-content a {
    text-decoration: none;
    color: #283747; 
}
.contact-content a:hover {
    color: dodgerblue;
    animation: 0.2s all;
}
.input-layouts {
    display: grid;
    grid-template-columns: auto auto;
transform: translateX(100px);
  margin-top: 10px;
}
.input-layouts:focus-visible{
    animation: 0.1s all;
}
.input-layouts input {
    width: 370px;
    height: 50px;
    padding: 16px 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #747e88;
}
.input-layouts textarea {
    padding: 16px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    font-size: 16px;
    color: #747e88;
    width: 770px;
    height: 150px;
}
.input-layouts .textarea{
    display: grid;
    grid-template-columns: auto;
    width: 400px;
}
.textarea {
margin-bottom: 100px;
}
.textarea input {
   width: 770px;
}
.text-right {
    text-align: right!important;
}
.text-right button {
    padding: 16px 40px;
    border-radius: 5px;
    background: #f2a92c;
    color: #fff;
    border: none;
    margin-top: 20px;
}
@media only screen and (max-width:1400px) {
    .section-title {
       transform: translateX(60px);
    }
    .input-layouts input {
        width: 270px;
    height: 50px;
    padding: 16px 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #747e88;
    }
    .input-layouts input:nth-child(2) {
        transform: translateX(-100px);
    }
    .textarea input {
   width: 570px;
}
.input-layouts textarea {
    padding: 16px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    font-size: 16px;
    color: #747e88;
    width: 570px;
    height: 150px;
}
}
@media only screen and (max-width:1200px) {
    .section-title {
       transform: translateX(80px);
    }
    .section-title p {
        width: 300px;
    }

    .input-layouts input {
        width: 230px;
    height: 50px;
    padding: 16px 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #747e88;
    }
    .input-layouts input:nth-child(2) {
        transform: translateX(-150px);
    }
    .textarea input {
   width: 485px;
}
.input-layouts textarea {
    padding: 16px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    font-size: 16px;
    color: #747e88;
    width: 485px;
    height: 150px;
}
.grid {
    transform: translateX(-25px);
}
}
@media only screen and (max-width:1000px) {
    .grid {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    transform: translateX(-60px);
}
.section-title p {
    width: 400px;
}
.input-layouts input {
    width: 300px;
    height: 50px;
    padding: 16px 20px;
    border: 1px solid #bdbdbd;
    border-radius: 5px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #747e88;
}
.input-layouts textarea {
    padding: 16px 20px;
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    font-size: 16px;
    color: #747e88;
    width: 630px;
    height: 150px;
}
.input-layouts .textarea{
    display: grid;
    grid-template-columns: auto;
    width: 400px;
}
.textarea {
margin-bottom: 100px;
}
.textarea input {
   width: 630px;
}
.input-layouts input:nth-child(2) {
        transform: translateX(-70px);
    }
    .input-layouts {
        transform: translateX(80px);
    }
}
@media only screen and (max-width:775px) {
    .input-layouts {
        display: grid;
        grid-template-columns: auto;
        transform: translateX(5px);
    
    }
    .section-title h2 {
        font-size: 50px;
    }
  .grid {
    transform: translateX(-50px);
  }
.input-layouts input {
    width: 120%;
}
.input-layouts .email {
margin-left: 70px;
}
.section-title {
    transform: translateX(5px);
}
.textarea input , #textarea{
    width: 120%;
}
}
@media only screen and (max-width:580px) {
    .grid {
    transform: translateX(-10px);
  }
.input-layouts input {
    width: 80%;
}
.section-title {
    transform: translateX(5px);
}
.textarea input , #textarea{
    width: 80%;
}
.text-right {
    transform: translateX(-80px);
}
}
</style>