<template>
    <div>
        <NavbarVue></NavbarVue>
        <FormVue></FormVue>
        <UpdatedForm class="d-none"></UpdatedForm>
        <CopyrightVue></CopyrightVue>

    </div>
</template>

<script>
import UpdatedForm from "../components/UpdatedForm.vue"
import NavbarVue from '@/components/Navbar.vue';
import FormVue from '@/components/Form.vue';
import CopyrightVue from '@/components/Copyright.vue';

export default {
    name: "ShippingPage",
    components: {
        NavbarVue,
        FormVue,
        CopyrightVue,
        UpdatedForm,
        
    }
}
</script>

<style>

</style>