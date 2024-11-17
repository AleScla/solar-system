<script>

export default {
    props:{
        image: String,
        name: String,
    }
}
</script>


<template>
    <div class="planet" :class="name">
        <div class="img-container">
            <img :src="image" :alt="name">  
        </div>
    </div>
    
</template>


<style lang="scss">

.planet{
    width:100%;
    height:100%;
    animation:rotate 20s linear infinite;
    border-radius:50%;
    .img-container{
        img{
            width:25px;
            position:absolute;
            top:-12px; 
            left:50%;
            transform:translateX(-50%);
            z-index:2;
        }
    }
}

    @keyframes rotate{
        0%{
            transform:rotate(0)
        }
        50%{
            transform:rotate(180deg)
        }
        100%{
            transform:rotate(360deg)
        }
    }
</style>
