<template>
    <div>
<div class="card card-collapsable mb-2">
    <a class="card-header" href="#collapseCardExample" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">Collapsable Card Example
        <div class="card-collapsable-arrow">
            <i class="fas fa-chevron-down"></i>
        </div>
    </a>
    <div class="collapse show" id="collapseCardExample">
        <div class="card-body">
            Hier kommt ein geiler CardBody hin ich hoffe dir gefällt was du hier siehst. Es wird für immer hier bleiben
        </div>
    </div>
</div>
    </div>

</template>
<script>
export default {
    name: "CollapsingCard"
}
</script>