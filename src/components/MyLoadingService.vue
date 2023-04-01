<template>
    <div class="loading">
        <div class="card"></div>
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .card{
        height: 240px;
        width: 246px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        gap: 20px;
        background: #115A7B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        filter: blur(4px);
        -webkit-filter: blur(4px);
    }

    .spinner {
        position: absolute;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #3498db;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
