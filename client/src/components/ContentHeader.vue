<template>
    <div class="page-header pb-10 page-header-dark bg-gradient-primary-to-secondary">
            <div class="container-fluid">
                <div class="page-header-content">
                    <h1 class="page-header-title">
                        <div class="page-header-icon"><i :class="icon"></i></div>
                        <span>{{title}}</span>
                    </h1>
                    <div class="page-header-subtitle">{{subtitle}}</div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: "ContentHeader",
    props: ['title', 'icon', 'subtitle']
    
}
</script>