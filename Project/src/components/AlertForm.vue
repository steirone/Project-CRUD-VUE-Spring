<template>
    <div class="card-body border-color-pink">
        <h5 class="card-title">Success!</h5>
        <p class="card-text" >Your Data Has Been Deleted</p>
        <button @click="RefreshFunc">Back</button>
    </div>
</template>

<script>
export default {
    methods : {
        RefreshFunc(){
            location.reload();
        }
    }

}
</script>

<style scoped>
    .border-color-pink{
        border: solid 2px #F9CADA;
    }

    .bg-color-pink{
        background-color: #F9CADA;
    }
</style>