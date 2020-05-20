<template>
  <main>
<div style="position: absolute; top: 1rem; right: 1rem;">
    <!-- Toast container -->
    <div style="position: absolute; bottom: 1rem; right: 1rem;">
        <!-- Toast -->
        <div class="toast" id="toastBasic" role="alert" aria-live="assertive" aria-atomic="true" data-delay="5000">
            <div class="toast-header">
                <i data-feather="bell"></i>
                <strong class="mr-auto">Toast with Autohide</strong>
                <small class="text-muted ml-2">just now</small>
                <button class="ml-2 mb-1 close" type="button" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="toast-body">This is an example toast alert, it will dismiss automatically, or you can dismiss it manually.</div>
        </div>
    </div>
 
</div>
    <ContentHeader title="Blank" icon="fas fa-file" subtitle="A blank page to get you started!" />
    <div class="container-fluid mt-n10">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div class="row">
        <Card cHeader="Eine Karte" class="col-md-12"> {{ contacts }}</Card>
      </div>
    </div>
  </main>
</template>

<script>
  import ContentHeader from '../../components/ContentHeader'
  import Card from '../../components/Card'
  import axios from 'axios';
  import * as $ from 'jquery'
  
  export default {
    name: "Contact",
    components: {
      ContentHeader,
      Card,
      
    },
    data() {
      return {
        contacts: null,
        error: null
      }
    },
    mounted() {
        const url = 'http://localhost:3000/v1/';
         axios.get(url + 'contsact')
            .then(response => {
              this.contacts = response.data
               console.log(response)}
            )
            .catch(error => {
                 console.log(error.response)
                 console.log("hallo")
               // console.log(this.$refs);
               //  this.$refs.toastBasic.toast("show");
                 $("#toastBasic").toast("show");
                // this.$("#toastBasic").toast("show");
            });


    }
  }
</script>