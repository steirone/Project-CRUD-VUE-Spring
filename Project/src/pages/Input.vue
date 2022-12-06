<template>
    <div>
        <NavbarVue></NavbarVue>
        <FormVue></FormVue>
        <SuccessForm class="d-none"></SuccessForm>
        <CopyrightVue></CopyrightVue>

    </div>
</template>

<script>
import SuccessForm from "../components/SuccessForm.vue"
import NavbarVue from '@/components/Navbar.vue';
import FormVue from '@/components/Form.vue';
import CopyrightVue from '@/components/Copyright.vue';

export default {
    name: "ShippingPage",
    components: {
        NavbarVue,
        FormVue,
        CopyrightVue,
        SuccessForm,
        // Navbar,
        // Breadcrumbs,
        // ShippingForm,
        // Footer,
        
    }
}
</script>

<style>

</style>