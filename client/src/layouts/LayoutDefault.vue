<template>
    <div>
        <Topbar />
        <div id="layoutSidenav">
            <Navbar />
            <div id="layoutSidenav_content">
                <slot />
                <Footer />
            </div>    
        </div>
  </div>
</template>
<script>
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default {
    name: "LayoutDefault",
    components: {
         Topbar,
         Navbar,
         Footer
    }

}
</script>