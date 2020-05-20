<template>
    <div id="layoutSidenav_nav">
        <nav class="sidenav shadow-right sidenav-light">
            <div class="sidenav-menu">
                <div class="nav accordion" id="accordionSidenav">
                    <a class="nav-link" :class="{ 'active': $route.path == '/dashboard' }" href="charts.html"><div class="nav-link-icon"><i class="fas fa-desktop"></i></div>Dashboard</a>
                    <div class="sidenav-menu-heading">Finanzen</div>
                    <a class="nav-link" :class="{ 'active': $route.path == '/forcast' }" href="charts.html"><div class="nav-link-icon"><i class="fas fa-route"></i></div>Forcast</a>
                    <a class="nav-link" :class="{ 'active': $route.path == '/transactions' }" href="tables.html"><div class="nav-link-icon"><i class="fas fa-book"></i></div>Buchung</a>
                    <div class="sidenav-menu-heading">Kontakte</div>
                    <a class="nav-link" :class="{ 'active': $route.path == '/contacts' }" href="contacts"><div class="nav-link-icon"><i class="fas fa-list-ul"></i></div>Kontaktverwaltung</a>
                    <a class="nav-link" :class="{ 'active': $route.path == '/newcontact' }" href="charts.html"><div class="nav-link-icon"><i class="fas fa-plus-square"></i></div>Kontakt anlagen</a>
                    <div class="sidenav-menu-heading">Services</div>
                    <a class="nav-link" :class="{ 'active': $route.path == '/services' }" href="charts.html"><div class="nav-link-icon"><i class="fas fa-list-ul"></i></div>Serviceübersicht</a>
                    <a class="nav-link" :class="{ 'active': $route.path == '/newservicemapping' }" href="tables.html"><div class="nav-link-icon"><i class="fas fa-plus-square"></i></div>Neues Mapping</a>
                    <a class="nav-link" :class="{ 'active': $route.path == '/servicemapping' }" href="tables"><div class="nav-link-icon"><i class="fas fa-check-square"></i></div>Service-Mapping</a> 
                    <div class="sidenav-menu-heading">Sonstiges</div>
                    <a class="nav-link" :class="{ 'active': $route.path == '/blank' }" href="blank"><div class="nav-link-icon"><i class="fas fa-file"></i></div>Blank</a>

    
                </div>
            </div>
            <div class="sidenav-footer">
                <div class="sidenav-footer-content">
                    <div class="sidenav-footer-subtitle">Eingeloggt als:</div>
                    <div class="sidenav-footer-title">svote Admin</div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    
}
</script>
<style>

</style>