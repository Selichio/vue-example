<template>
    <div>
        <div class="card mb-4">
            <div class="card-header">{{ cHeader}}</div>
            <div class="card-body">
                <slot />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Card",
        props: {
            cHeader: String,
        }
    }
</script>