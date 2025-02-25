<script>
</script>
<template>
    <main class="d-flex align-items-center justify-content-center flex-wrap">
        <div>
            <h1 class="text-center">404 - Not found </h1>
            <router-link class="text-center link-style" :to="{name: 'solarsystem'}">
                <h3>Torna alla Home</h3>
            </router-link>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main{
    background-color:black;
    height:calc(100vh - 4rem);
    width:100%;
    
    h1{
        font-size:7rem;
    }
    .link-style{
        text-decoration:none;
    }
}
</style>