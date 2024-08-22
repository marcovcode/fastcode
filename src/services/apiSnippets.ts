import { Tables } from "../types";
import { supabase } from "./supabase";

export async function getSnippets() {
    const { data: snippets, error } = await supabase
        .from("snippets")
        .select("*");
    if (error) throw new Error(error.message);
    return snippets;
}

export async function createSnippet(snippet: Tables<"snippets">) {
    const { error } = await supabase
        .from("snippets")
        .insert([
            {
                title: snippet.title,
                content: snippet.content,
                language: snippet.language,
            },
        ])
        .select();
    if (error) throw new Error(error.message);
}

export async function deleteSnippet(id: number) {
    const { error } = await supabase.from("snippets").delete().eq("id", id);
    if (error) throw new Error(error.message);
}
