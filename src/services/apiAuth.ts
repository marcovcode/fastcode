import { supabase } from "./supabase";

export async function join(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
        email: email,
    });

    if (error) throw new Error(error.message);
    return data;
}

export async function getUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data.user;
}

export async function logOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
}
