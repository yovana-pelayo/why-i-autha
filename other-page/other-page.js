// use checkAuth function to redirect is user not authenticated
import { logout, checkAuth } from '../fetch-utils.js';

// add event listener to the logout button and call logout

checkAuth();

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', async ()=> {
    await logout();
});
