// Enter Supabase Information
const SUPABASE_URL = 'https://swgiucfleoaonawjlvme.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2l1Y2ZsZW9hb25hd2psdm1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NTIxNjEsImV4cCI6MTk2MDAyODE2MX0.KwPiwmAFu_q_7yxOSUYv4k6Ejgu8uDsvfsGLixOpD9o';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    // console.log(resp);
    return resp;
}

export async function signInUser(email, password) {
    const resp = await client.auth.signIn({ email, password });
    // console.log(resp);
    return resp;

}
export async function checkAuth() {}

export async function redirectIfLoggedIn() {
    const user = getUser();
    // console.log(user);
    if (user){
        location.replace('/other-page');
    }
}

export async function logout() {
    await client.auth.signOut();
    location.replace('/');
}

// eslint-disable-next-line no-unused-vars
function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}