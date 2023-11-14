export interface ItemModel
{
    routerLink:string
    icon:string
    label:string
}
export let navbarData:ItemModel[]
export let adminbarData:ItemModel[]

navbarData= 
[
    {
        routerLink:'admin',
        icon:'fa-solid fa-chess-king',
        label:'Admin'
    },
    {
        routerLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'   
    },
    {
        routerLink: 'profile',
        icon: 'fa-solid fa-user',
        label: 'Profile'   
    },
    {
        routerLink: 'register',
        icon: 'fa-solid fa-registered',
        label: 'Register'   
    },
    {
        routerLink: 'login',
        icon: 'fa-solid fa-key',
        label: 'Login'   
    },
    {
        routerLink: 'logout',
        icon: 'fa-solid fa-power-off',
        label: 'Logout'   
    },
];

adminbarData= 
[
    {
        routerLink:'admin/home',
        icon:'fa-solid fa-house-user',
        label:'Home'
    },
    {
        routerLink: 'admin/catalog',
        icon: 'fa-solid fa-gauge',
        label: 'Catalog'   
    },
    {
        routerLink: 'admin/myaccount',
        icon: 'fa-solid fa-address-card',
        label: 'My Account'   
    },
    {
        routerLink: 'admin/addbooks',
        icon: 'fa-solid fa-book',
        label: 'Add Book'   
    },
    {
        routerLink: 'admin/removebooks',
        icon: 'fa-solid fa-receipt',
        label: 'Remove Book'   
    },
    {
        routerLink: 'admin/borrows',
        icon: 'fa-solid fa-bookmark',
        label: 'Borrows'   
    },
    {
        routerLink: 'admin/checks',
        icon: 'fa-solid fa-plus',
        label: 'Check In/Out'   
    },
    {
        routerLink: 'admin/settings',
        icon: 'fa-solid fa-gear',
        label: 'Settings'   
    },
    {
        routerLink: 'admin/login',
        icon: 'fa-solid fa-key',
        label: 'Login'   
    },
    {
        routerLink: 'login',
        icon: 'fa-solid fa-power-off',
        label: 'Logout'   
    },
];