<template>
    <div>
        <slot />
    </div>
</template>
<script>
export default {
    name: "LayoutBlank",
    mounted () {
        document.body.classList.add('bg-primary')
    },
    destroyed () {
     document.body.classList.remove('bg-primary')
    }
}

</script>

