<template>
    <div>
        <HeaderComp />
       <SkillArea />
       <CoursesComp />
       <WelcomeArea />
       <TopCategories />
       <AboutUs />
       <MentorsVue />
       <BlogVue />
       <ContactForm />
       <FooterComp />
    </div>
    <router-view />
</template>

<script>
import HeaderComp from '../components/Header/HeaderComp.vue'
import SkillArea from '../components/SkillArea.vue'
import CoursesComp from '../components//Courses/CoursesComp.vue'
import WelcomeArea from '../components/WelcomeArea.vue'
import TopCategories from '../components/Categories/TopCategories.vue'
import AboutUs from '../components/AboutUs.vue'
import MentorsVue from '../components/Mentors/MentorsVue.vue'
import BlogVue from '../components/BlogVue.vue'
import ContactForm from '../components/ContactForm/ContactForm.vue'
import FooterComp from '../components/Footer/FooterComp.vue'
export default {
    components: {
        HeaderComp,
        SkillArea,
        CoursesComp,
        WelcomeArea,
        TopCategories,
        AboutUs,
        MentorsVue,
        BlogVue,
        ContactForm,
        FooterComp
}
}
</script>

<style scoped>
* {
    overflow: hidden;
}
</style>