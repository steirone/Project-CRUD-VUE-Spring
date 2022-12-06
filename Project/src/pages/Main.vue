<template>
    <div>
        <NavbarVue></NavbarVue>
        <MainVue></MainVue>
        <CopyrightVue></CopyrightVue>
    </div>
</template>

<script>
    import NavbarVue from '@/components/Navbar.vue';
    import MainVue from '@/components/Main.vue';
    import CopyrightVue from '@/components/Copyright.vue';

    export default {
        name: 'HomePage',
        components : {
            NavbarVue,
            MainVue,
            CopyrightVue,

        },
    }
</script>

<style>

</style>