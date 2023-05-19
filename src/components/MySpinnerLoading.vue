<template>
    <div class="loading">
        <div class="spinner"></div>
    </div>
</template>

<style scoped>
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .spinner {
        position: absolute;
        border: 4px solid #3498db;
        border-top: 4px solid #f3f3f3;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>