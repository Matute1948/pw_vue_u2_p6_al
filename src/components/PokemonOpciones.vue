<template>
    <div class="opciones-container">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
export default{
    data() {
        return {
            
        }
    },
};

</script>

<style scoped>

ul{
    list-style-type: none;
    
}
li{
    border: 2px solid black;
    border-radius: 5px;
    margin: 10px;
    width: 500px;
    background-color: white;
    cursor: pointer;
    
}

li:hover{
    background-color: rgb(126, 130, 130);
}

.opciones-container{
    justify-content: center;
    align-items: center;
    display: flex;


}
</style>